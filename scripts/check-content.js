/* Content checks for Tribal Knowledge.
   Loads the data the same way the app does, then fails on broken links,
   missing sources, unreachable outcomes, or render errors.
   Usage: node scripts/check-content.js */
const fs = require('fs');
const vm = require('vm');
const path = require('path');
const root = path.join(__dirname, '..');

const src = ['data/physical.js', 'data/mental.js', 'data/gear.js', 'data/training.js', 'data/glossary.js', 'data/sports.js', 'app.js']
  .map(f => fs.readFileSync(path.join(root, f), 'utf8')).join('\n;\n')
  .replace(/^render\(\);$/m, '');
const stub = { getElementById: () => ({ innerHTML: '' }), querySelectorAll: () => [] };
const ctx = { document: stub, window: { scrollTo() {} }, navigator: {}, console };
vm.createContext(ctx);
vm.runInContext(src + `
  globalThis.D = { OUTCOMES, NODES, DECISION_TREES, CATEGORIES, DIRECT_INDEX, MENTAL_DIRECT,
    renderHub, renderCategory, renderTreeQuestion, renderOutcome, setState(v){ state = v; } };`, ctx);
const { OUTCOMES, NODES, DECISION_TREES, CATEGORIES, DIRECT_INDEX, MENTAL_DIRECT } = ctx.D;
const D = ctx.D;

const failures = [];
const fail = (msg) => failures.push(msg);

// 1) outcomes: required fields and a real source URL
for (const [id, o] of Object.entries(OUTCOMES)) {
  if (!o.title || !o.body || !o.action) fail(`outcome ${id}: missing title, body, or action`);
  if (!o.source || !/^https?:\/\//.test(o.source.url || '')) fail(`outcome ${id}: missing source URL`);
  if (!['low', 'mid', 'high'].includes(o.severity)) fail(`outcome ${id}: severity must be low, mid, or high`);
}

// 2) every path through every tree: links resolve, screens render
const reached = new Set();
let screens = 0;
function walk(nodeId, tree, depth) {
  reached.add(nodeId);
  if (depth > 12) return fail(`path too deep at ${nodeId} (cycle?)`);
  if (NODES[nodeId]) {
    D.setState({ screen: 'tree-question', categoryId: tree.category, treeId: tree.id, nodeId, step: depth });
    try { D.renderTreeQuestion(); screens++; } catch (e) { fail(`render ${nodeId}: ${e.message}`); }
    NODES[nodeId].opts.forEach(o => walk(o.next, tree, depth + 1));
  } else if (OUTCOMES[nodeId]) {
    D.setState({ screen: 'tree-outcome', categoryId: tree.category, treeId: tree.id, nodeId, step: depth });
    try { D.renderOutcome(); screens++; } catch (e) { fail(`render outcome ${nodeId}: ${e.message}`); }
  } else {
    fail(`broken link to "${nodeId}" from a question`);
  }
}
DECISION_TREES.forEach(t => {
  if (!t.category) fail(`tree ${t.id}: missing category`);
  walk(t.root, t, 1);
});

// 3) hub and category screens render; direct lists resolve
D.setState({ screen: 'hub' }); D.renderHub(); screens++;
CATEGORIES.filter(c => c.ready).forEach(c => {
  D.setState({ screen: 'category', categoryId: c.id }); D.renderCategory(); screens++;
  (c.direct || []).forEach(id => { if (!OUTCOMES[id]) fail(`direct list ${c.id}: unknown outcome ${id}`); });
});

// 4) every outcome is reachable from a tree or listed by name
for (const id of Object.keys(OUTCOMES)) {
  if (!reached.has(id) && !DIRECT_INDEX.includes(id) && !MENTAL_DIRECT.includes(id)) {
    fail(`outcome ${id} is not reachable from any tree or direct list`);
  }
}

if (failures.length) {
  console.error(`FAIL: ${failures.length} problem(s)`);
  failures.forEach(f => console.error('  - ' + f));
  process.exit(1);
}
console.log(`OK: ${Object.keys(OUTCOMES).length} outcomes, ${Object.keys(NODES).length} questions, ` +
  `${DECISION_TREES.length} trees, ${screens} screens rendered.`);
