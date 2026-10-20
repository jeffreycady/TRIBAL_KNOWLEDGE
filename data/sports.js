/* Sports list for the sport picker.
   status:'live' sports show content. 'soon' sports are listed but disabled.
   Content with no `sports` field applies to ultra running only (the default).
   To tag content for other sports, add sports:['trail-run','ultra'] to a
   tree or outcome. */

const SPORTS = [
  { id:'ultra',         name:'Ultra running',               status:'live' },
  { id:'road-run',      name:'Road running',                status:'soon' },
  { id:'trail-run',     name:'Trail running',               status:'soon' },
  { id:'hiking',        name:'Hiking',                      status:'soon' },
  { id:'road-bike',     name:'Road cycling',                status:'soon' },
  { id:'gravel',        name:'Gravel cycling',              status:'soon' },
  { id:'mtb',           name:'Mountain biking',             status:'soon' },
  { id:'tri',           name:'Triathlon',                   status:'soon' },
  { id:'sky',           name:'Sky running',                 status:'soon' },
  { id:'skimo',         name:'Ski mountaineering (skimo)',  status:'soon' },
  { id:'mountaineering',name:'Mountaineering',              status:'soon' },
  { id:'climbing',      name:'Rock climbing',               status:'soon' },
  { id:'trekking',      name:'Trekking and backpacking',    status:'soon' },
  { id:'bikepacking',   name:'Bikepacking',                 status:'soon' },
  { id:'snowshoe',      name:'Snowshoeing',                 status:'soon' },
  { id:'ows',           name:'Open-water swimming',         status:'soon' }
];

const DEFAULT_SPORT = 'ultra';

function appliesTo(item, sport){
  const list = (item && item.sports) || [DEFAULT_SPORT];
  return list.includes(sport);
}

function loadSport(){
  try {
    const saved = localStorage.getItem('tk-sport');
    const found = SPORTS.find(s => s.id === saved && s.status === 'live');
    return found ? found.id : DEFAULT_SPORT;
  } catch(e) { return DEFAULT_SPORT; }
}

function saveSport(id){
  try { localStorage.setItem('tk-sport', id); } catch(e) {}
}
