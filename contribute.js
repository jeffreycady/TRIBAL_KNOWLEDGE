/* Renders the readable logic of the app for contributors.
   Reads the same data files as the app, so this page can't drift from it. */

const REPO = 'https://github.com/jeffreycady/TRIBAL_KNOWLEDGE';
const CATEGORY_FILES = { physical:'data/physical.js', mental:'data/mental.js', gear:'data/gear.js', training:'data/training.js' };
const CATEGORY_NAMES = { physical:'Physical & Medical', mental:'Mental & Psychological', gear:'Gear & Logistics', training:'Training' };

function esc(s){
  return String(s==null?'':s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function outcomeLabel(id){
  return OUTCOMES[id] ? `Outcome: ${OUTCOMES[id].title}` : NODES[id] ? `Question ${id}` : id;
}

// Each id lives in exactly one data file: the file that defines it.
function homeCategory(id){
  if(PHYSICAL_IDS.has(id)) return 'physical';
  if(typeof MENTAL_IDS !== 'undefined' && MENTAL_IDS.has(id)) return 'mental';
  if(typeof GEAR_IDS !== 'undefined' && GEAR_IDS.has(id)) return 'gear';
  if(typeof TRAIN_IDS !== 'undefined' && TRAIN_IDS.has(id)) return 'training';
  return 'physical';
}

function itemActions(cat, id){
  return `<div class="item-actions">
    <a class="tk-btn small" href="${REPO}/edit/main/${CATEGORY_FILES[homeCategory(id)]}" target="_blank" rel="noopener">Edit in GitHub</a>
    <button class="tk-btn ghost small" type="button" data-copy="${esc(id)}">Copy id</button>
  </div>`;
}

// Walk trees from their roots to find every node and outcome for a category
function reachableFor(cat){
  const nodes = new Set(), outcomes = new Set();
  const visit = (id) => {
    if(NODES[id]){ if(nodes.has(id)) return; nodes.add(id); NODES[id].opts.forEach(o => visit(o.next)); }
    else if(OUTCOMES[id]){ outcomes.add(id); }
  };
  DECISION_TREES.filter(t => t.category === cat).forEach(t => visit(t.root));
  // Show every item once, under the category whose file defines it.
  // Includes outcomes reached only by name (DIRECT_INDEX) so nothing is hidden from editors.
  return {
    nodes: Object.keys(NODES).filter(id => homeCategory(id) === cat),
    outcomes: Object.keys(OUTCOMES).filter(id => homeCategory(id) === cat)
  };
}

function nodeCard(cat, id){
  const n = NODES[id];
  const opts = n.opts.map(o => `<li>${esc(o.label)} <span class="meta">&rarr; ${esc(outcomeLabel(o.next))}</span></li>`).join('');
  return `<section class="item" id="${esc(id)}">
    <div class="item-head"><h4>Question</h4><span class="id-chip">${esc(id)}</span></div>
    <p>${esc(n.text)}</p>
    <ul>${opts}</ul>
    ${itemActions(cat, id)}
  </section>`;
}

function outcomeCard(cat, id){
  const o = OUTCOMES[id];
  const src = o.source ? `<p class="src">Source: <a href="${esc(o.source.url)}" target="_blank" rel="noopener">${esc(o.source.title)}</a> — ${esc(o.source.host)}</p>` : '<p class="src"><strong>Missing source</strong></p>';
  return `<section class="item" id="${esc(id)}">
    <div class="item-head"><h4>${esc(o.title)}</h4><span class="id-chip">${esc(id)}</span></div>
    <p class="meta">Severity: ${esc(o.severity)} · Status: open for community edits, not yet clinically reviewed</p>
    <p><strong>What's likely going on:</strong> ${esc(o.body)}</p>
    <p><strong>Do this now:</strong> ${esc(o.action)}</p>
    ${src}
    ${itemActions(cat, id)}
  </section>`;
}

function renderCategory(cat){
  const r = reachableFor(cat);
  const trees = DECISION_TREES.filter(t => t.category === cat).map(t =>
    `<li><strong>${esc(t.title)}</strong> <span class="meta">starts at ${esc(t.root)}</span></li>`).join('');
  return `<div class="cat-block">
    <div class="tk-section-title">${esc(CATEGORY_NAMES[cat])}</div>
    <div class="tk-section-sub">Entry points: </div>
    <ul class="rules">${trees}</ul>
    <h4 style="font-family:'IBM Plex Mono',monospace;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;color:var(--accent-dark);margin:24px 0 10px;">Questions (${r.nodes.length})</h4>
    ${r.nodes.map(id => nodeCard(cat, id)).join('')}
    <h4 style="font-family:'IBM Plex Mono',monospace;font-size:12px;text-transform:uppercase;letter-spacing:0.05em;color:var(--accent-dark);margin:24px 0 10px;">Outcomes (${r.outcomes.length})</h4>
    ${r.outcomes.map(id => outcomeCard(cat, id)).join('')}
  </div>`;
}

function render(){
  const root = document.getElementById('content');
  root.innerHTML = Object.keys(CATEGORY_FILES).map(renderCategory).join('');
  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.copy;
      const done = () => { btn.textContent = 'Copied'; setTimeout(() => btn.textContent = 'Copy id', 1500); };
      if(navigator.clipboard) navigator.clipboard.writeText(id).then(done).catch(done);
      else done();
    });
  });
  const body = encodeURIComponent('Id of the question or outcome (if editing):\n\nWhat should change:\n\nSource (a page you have read):\n\nWhy:\n');
  document.getElementById('new-item').href = `${REPO}/issues/new?title=${encodeURIComponent('Content suggestion: ')}&body=${body}`;
  // Jump to an item when linked from the app, e.g. contribute.html#out_crisis
  if(location.hash){
    const el = document.getElementById(location.hash.slice(1));
    if(el) el.scrollIntoView({ block:'start' });
  }
}

render();
