/* Tribal Knowledge app engine.
   Renders the decision trees defined in data/*.js. Content lives in data/;
   see contribute.html for how to suggest changes. */

const REPO_URL = 'https://github.com/jeffreycady/TRIBAL_KNOWLEDGE';

const CATEGORIES = [
  { id:'physical', name:'Physical & Medical', tone:'high', desc:'Injuries, illness, and in-the-moment medical situations.', ready:true,
    intro:"You don't need to know what it's called. Start with what you actually feel and where. A couple of questions gets you to the right answer.",
    direct: DIRECT_INDEX },
  { id:'mental', name:'Mental & Psychological', tone:'mid', desc:'Race-day nerves, low moments, quitting, motivation, and self-talk.', ready:true,
    intro:"Mental struggles are part of endurance sport, and many are treatable. These pages separate normal pressure from patterns that need more support.",
    direct: MENTAL_DIRECT },
  { id:'gear', name:'Gear & Logistics', tone:'low', desc:'Getting lost, cold and wet, fueling and heat, pacing, and getting off course safely.', ready:true,
    intro:"Most gear problems are really planning problems. Find the situation you're in and the next step is clear.",
    direct: GEAR_DIRECT },
  { id:'training', name:'Training', tone:'low', desc:'Plateaus, tapering for a race, and running down or sleeping badly.', ready:true,
    intro:"Training problems usually come from too little change or too much load. These pages help you find which.",
    direct: TRAIN_DIRECT }
];

let state = { screen:'hub', categoryId:null, treeId:null, nodeId:null, step:1 };

function escapeHtml(s){
  return String(s==null?'':s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function renderDisclaimer(){
  return `<div class="tk-disclaimer"><strong>Not medical advice.</strong> This is general information to help you think clearly in the moment, built from published sources. It is not a diagnosis and not a substitute for a real medical evaluation. When in doubt, or if anything is getting worse, seek qualified medical help.</div>`;
}

function crisisLine(cat){
  if(!cat || cat.id !== 'mental') return '';
  return `<div class="tk-crisis"><strong>If you're thinking about hurting yourself:</strong> call or text 988 (US), or call 911 if you're in immediate danger. Outside the US, use your local emergency number.</div>`;
}

function footer(){
  return `<div class="tk-footer">Tribal Knowledge · © 2026 <a href="https://jcady.org" target="_blank" rel="noopener">JCady LLC</a> · works offline, nothing you enter is stored or sent anywhere · <a href="contribute.html">Suggest an update</a></div>`;
}

function glossaryList(q){
  const needle = (q || '').trim().toLowerCase();
  const items = GLOSSARY.filter(g => !needle ||
    g.term.toLowerCase().includes(needle) ||
    g.aliases.some(a => a.toLowerCase().includes(needle)) ||
    g.def.toLowerCase().includes(needle));
  if(!items.length) return `<p class="gloss-empty">No match. Try a shorter word, or <a href="contribute.html">suggest the term</a>.</p>`;
  return items.map(g => `
    <div class="gloss-item">
      <h4>${escapeHtml(g.term)}${g.kind === 'community' ? ' <span class="gloss-kind">Community usage</span>' : ''}</h4>
      <p>${escapeHtml(g.def)}</p>
    </div>`).join('');
}

function renderHub(){
  return `
  <div class="tk-hero">
    <div class="wrap">
      <div class="tk-eyebrow">TRIBAL KNOWLEDGE</div>
      <h1>Problems endurance athletes actually run into</h1>
      <p>The knowledge that keeps people safe in this sport already exists. It's just scattered across forums, buried in a coach's head, or something people only learn by getting hurt once. This puts it in one place, sourced and organized.</p>
      ${renderDisclaimer()}
    </div>
  </div>
  <div class="tk-body">
    <div class="wrap">
      <div class="tk-section-title">Pick a category</div>
      <div class="tk-section-sub">Physical &amp; Medical and Mental &amp; Psychological are live. The rest are coming.</div>
      <div class="cat-grid">
        ${CATEGORIES.map(c => `
          <div class="cat-card tone-${c.tone} ${c.ready?'':'disabled'}" ${c.ready?`data-nav="category" data-id="${c.id}"`:''}>
            <h3>${escapeHtml(c.name)}</h3>
            <p>${escapeHtml(c.desc)}</p>
            <span class="tag">${c.ready ? 'Browse &rarr;' : 'Coming soon'}</span>
          </div>
        `).join('')}
        <div class="cat-card tone-low" data-nav="glossary">
          <h3>Glossary</h3>
          <p>Ultra and running words, explained. Search by term or by what it means.</p>
          <span class="tag">Search &rarr;</span>
        </div>
      </div>
      <div class="tk-section-sub">Know something that should be here? <a href="contribute.html">Suggest an update &rarr;</a></div>
      </div>
    </div>
  </div>
  ${footer()}`;
}

function renderGlossary(){
  return `
  <div class="tk-hero" style="padding:32px 0 28px;">
    <div class="wrap">
      <button class="back-link" data-nav="hub" style="color:var(--dim);">&larr; All categories</button>
      <div class="tk-eyebrow">REFERENCE</div>
      <h1 style="font-size:clamp(26px,4.5vw,38px);">Glossary</h1>
      <p style="font-size:14.5px;max-width:58ch;margin-top:10px;">Ultra and running words, explained. Search by term, or by a word in the meaning.</p>
    </div>
  </div>
  <div class="tk-body">
    <div class="wrap">
      <input class="gloss-search" id="gloss-q" type="search" placeholder="Search, like bonk, DFL, or cutoff" aria-label="Search the glossary" autocomplete="off">
      <div id="gloss-list" class="gloss-list">${glossaryList('')}</div>
    </div>
  </div>
  ${footer()}`;
}

function renderCategory(){
  const cat = CATEGORIES.find(c => c.id === state.categoryId);
  const trees = DECISION_TREES.filter(t => t.category === cat.id);
  const direct = (cat.direct || []).filter(id => OUTCOMES[id]);
  return `
  <div class="tk-hero" style="padding:32px 0 28px;">
    <div class="wrap">
      <button class="back-link" data-nav="hub" style="color:var(--dim);">&larr; All categories</button>
      <div class="tk-eyebrow">${escapeHtml(cat.name).toUpperCase()}</div>
      <h1 style="font-size:clamp(26px,4.5vw,38px);">${escapeHtml(cat.name)}</h1>
      <p style="font-size:14.5px;max-width:58ch;margin-top:10px;">${escapeHtml(cat.intro)}</p>
    </div>
  </div>
  <div class="tk-body">
    <div class="wrap">
      ${crisisLine(cat)}
      <div class="tk-section-title">What are you noticing?</div>
      <div class="tk-section-sub">Pick whichever's closest. A plain description is enough to start.</div>
      <ul class="tree-list">
        ${trees.map(t => `
          <li class="tree-item" data-nav="tree-start" data-id="${t.id}">
            <div><h4>${escapeHtml(t.title)}</h4><p>${escapeHtml(t.blurb)}</p></div>
            <span class="arrow">Start &rarr;</span>
          </li>`).join('')}
      </ul>
      <div style="margin-top:36px;">
        <div class="tk-section-title">Already know what it is?</div>
        <div class="tk-section-sub">Jump straight to it.</div>
        <ul class="simple-list">
          ${direct.map(id => `
            <li class="simple-item" data-nav="direct" data-id="${id}">
              <div><h4>${escapeHtml(OUTCOMES[id].title)}</h4></div>
              <span class="arrow">View &rarr;</span>
            </li>`).join('')}
        </ul>
      </div>
    </div>
  </div>
  ${footer()}`;
}

function renderTreeQuestion(){
  const tree = DECISION_TREES.find(t => t.id === state.treeId);
  const cat = CATEGORIES.find(c => c.id === tree.category);
  const node = NODES[state.nodeId];
  return `
  <div class="tk-body" style="padding-top:32px;">
    <div class="wrap">
      <button class="back-link" data-nav="category" data-id="${cat.id}">&larr; ${escapeHtml(cat.name)}</button>
      ${crisisLine(cat)}
      <div class="q-card">
        <div class="q-progress">${escapeHtml(tree.title).toUpperCase()} &middot; STEP ${state.step}</div>
        <p class="q-text">${escapeHtml(node.text)}</p>
        <div class="q-opts">
          ${node.opts.map((o,i) => `<button type="button" class="q-opt" data-nav="answer" data-idx="${i}">${escapeHtml(o.label)}</button>`).join('')}
        </div>
      </div>
    </div>
  </div>
  ${footer()}`;
}

function renderOutcome(){
  const outcome = OUTCOMES[state.nodeId];
  const tree = state.treeId ? DECISION_TREES.find(t => t.id === state.treeId) : null;
  const cat = CATEGORIES.find(c => c.id === (tree ? tree.category : state.categoryId));
  const band = outcome.band || (outcome.severity === 'high' ? 'Seek medical attention' : outcome.severity === 'mid' ? 'Caution — monitor closely' : 'Generally manageable');
  const level = { low:1, mid:2, high:3 }[outcome.severity] || 1;
  const bars = [1,2,3].map(i => `<span class="${i <= level ? 'on-' + outcome.severity : ''}"></span>`).join('');
  return `
  <div class="wrap tk-body" style="padding-top:18px;">
    <button class="back-link" data-nav="category" data-id="${cat.id}">&larr; ${escapeHtml(cat.name)}</button>
    ${crisisLine(cat)}
    <div class="outcome-card">
      <div class="outcome-band ${outcome.severity}">${escapeHtml(band)}</div>
      <div class="outcome-severity" aria-label="Severity: ${escapeHtml(outcome.severity)}">${bars}</div>
      <div class="outcome-body">
        <div class="tk-eyebrow">${escapeHtml(cat.name)} &middot; likely cause</div>
        <h2>${escapeHtml(outcome.title)}</h2>
        ${outcome.symptoms ? `<h5>What it typically feels like</h5><p>${escapeHtml(outcome.symptoms)}</p>` : ''}
        <h5>What's likely going on</h5>
        <p>${escapeHtml(outcome.body)}</p>
        <div class="action-box">
          <h5>Do this now</h5>
          <p>${escapeHtml(outcome.action)}</p>
        </div>
        ${outcome.prerace ? `<div class="uera-box">
          <h5>Racing soon?</h5>
          <p>Before race day, check your readiness across the whole plan with the Ultra Event Readiness &amp; Risk Assessment (UERA), built by Jeff Cady.</p>
          <a class="tk-btn small" href="https://uera.jcady.org" target="_blank" rel="noopener">Take UERA</a>
        </div>` : ''}
        ${outcome.prevention ? `<h5>Prevention</h5><p>${escapeHtml(outcome.prevention)}</p>` : ''}
        <div class="source-line">Source: <a href="${escapeHtml(outcome.source.url)}" target="_blank" rel="noopener">${escapeHtml(outcome.source.title)}</a> &mdash; ${escapeHtml(outcome.source.host)}</div>
      </div>
    </div>
    <div class="share-row">
      <button type="button" class="tk-btn ghost small" data-share="${escapeHtml(state.nodeId)}">Share with a training partner</button>
      <span class="share-status" role="status" aria-live="polite"></span>
    </div>
    <div class="outcome-report">
      <h5>Something off on this page?</h5>
      <p>Suggest a correction or a better source. Edits go through GitHub and a maintainer reviews them.</p>
      <a class="tk-btn ghost block" href="contribute.html#${escapeHtml(state.nodeId)}">Suggest a change</a>
    </div>
    <div class="tk-nav">
      ${tree ? `<button type="button" class="tk-btn ghost small" data-nav="tree-start" data-id="${tree.id}">Start over</button>` : ''}
      <button type="button" class="tk-btn small" data-nav="category" data-id="${cat.id}">All ${escapeHtml(cat.name)} topics</button>
    </div>
  </div>
  ${footer()}`;
}

function shareText(outcome){
  const site = 'https://tk.jcady.org';
  const first = (outcome.action || '').split(/(?<=\.)\s/)[0];
  return `${outcome.title}\n\nDo this now: ${first}\n\nGeneral information, not medical advice. Source: ${outcome.source.title}\n${site}`;
}

function setShareStatus(msg){
  const el = document.querySelector('.share-status');
  if(el) el.textContent = msg;
}

async function shareOutcome(id){
  const outcome = OUTCOMES[id];
  if(!outcome) return;
  const text = shareText(outcome);
  if(navigator.share){
    try{ await navigator.share({ title:'Tribal Knowledge', text, url:'https://tk.jcady.org' }); return; }
    catch(e){ if(e && e.name === 'AbortError') return; }
  }
  try{
    await navigator.clipboard.writeText(text);
    setShareStatus('Copied. Paste it into a message.');
  }catch(e){
    setShareStatus('Could not copy. Select the text and copy it manually.');
  }
}

function attachEvents(){
  const glossQ = document.getElementById('gloss-q');
  if(glossQ) glossQ.addEventListener('input', () => {
    document.getElementById('gloss-list').innerHTML = glossaryList(glossQ.value);
  });
  document.querySelectorAll('[data-share]').forEach(el => {
    el.addEventListener('click', () => shareOutcome(el.dataset.share));
  });
  document.querySelectorAll('[data-nav]').forEach(el => {
    el.addEventListener('click', () => {
      const nav = el.dataset.nav;
      if(nav === 'hub'){
        state = { screen:'hub', categoryId:null, treeId:null, nodeId:null, step:1 };
      }
      else if(nav === 'category'){
        state = { screen:'category', categoryId:el.dataset.id, treeId:null, nodeId:null, step:1 };
      }
      else if(nav === 'glossary'){
        state = { screen:'glossary', categoryId:null, treeId:null, nodeId:null, step:1 };
      }
      else if(nav === 'tree-start'){
        const tree = DECISION_TREES.find(t => t.id === el.dataset.id);
        state = { screen:'tree-question', categoryId:tree.category, treeId:tree.id, nodeId:tree.root, step:1 };
      }
      else if(nav === 'answer'){
        const node = NODES[state.nodeId];
        const chosen = node.opts[parseInt(el.dataset.idx, 10)];
        state.step = (state.step || 1) + 1;
        state.nodeId = chosen.next;
        state.screen = NODES[chosen.next] ? 'tree-question' : 'tree-outcome';
      }
      else if(nav === 'direct'){
        state = { screen:'tree-outcome', categoryId:state.categoryId, treeId:null, nodeId:el.dataset.id, step:1 };
      }
      render();
    });
  });
}

function render(){
  const app = document.getElementById('app');
  const views = { hub:renderHub, glossary:renderGlossary, category:renderCategory, 'tree-question':renderTreeQuestion, 'tree-outcome':renderOutcome };
  app.innerHTML = views[state.screen]();
  window.scrollTo(0, 0);
  attachEvents();
}

render();

if('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {
      // Service workers need http(s); file:// still works, just not installable or offline.
    });
  });
}
