/* Sports list for the sport picker.
   status:'live' sports show content. 'soon' sports are listed but disabled.
   Content with no `sports` field applies to ultra running only (the default).
   To tag content for other sports, add sports:['trail-run','ultra'] to a
   tree or outcome. */

const SPORTS = [
  { id:'ultra',         name:'Ultra running',               status:'live', intro:"Races longer than a marathon, on trail or road." },
  { id:'road-run',      name:'Road running',                status:'soon', intro:"Racing and training on pavement, from 5K to the marathon." },
  { id:'trail-run',     name:'Trail running',               status:'soon', intro:"Running on dirt trails, from short races to long ones." },
  { id:'hiking',        name:'Hiking',                      status:'soon', intro:"Walking trails for enjoyment, fitness, or distance." },
  { id:'road-bike',     name:'Road cycling',                status:'soon', intro:"Cycling on paved roads, from group rides to road races." },
  { id:'gravel',        name:'Gravel cycling',              status:'soon', intro:"Mixed-surface riding on gravel and dirt roads." },
  { id:'mtb',           name:'Mountain biking',             status:'soon', intro:"Riding off-road trails, from cross-country to enduro." },
  { id:'tri',           name:'Triathlon',                   status:'soon', intro:"Swimming, cycling, and running in one race." },
  { id:'sky',           name:'Sky running',                 status:'soon', intro:"Steep, technical mountain running, usually above 2,000 meters." },
  { id:'skimo',         name:'Ski mountaineering (skimo)',  status:'soon', intro:"Ski mountaineering: climbing and skiing up and down mountains." },
  { id:'mountaineering',name:'Mountaineering',              status:'soon', intro:"Climbing peaks, often on snow, ice, and rock." },
  { id:'climbing',      name:'Rock climbing',               status:'soon', intro:"Rock climbing on routes and boulders." },
  { id:'trekking',      name:'Trekking and backpacking',    status:'soon', intro:"Multi-day hiking and backpacking." },
  { id:'bikepacking',   name:'Bikepacking',                 status:'soon', intro:"Multi-day cycling with gear carried on the bike." },
  { id:'snowshoe',      name:'Snowshoeing',                 status:'soon', intro:"Walking or racing across snow on snowshoes." },
  { id:'ows',           name:'Open-water swimming',         status:'soon', intro:"Swimming in lakes, rivers, or the ocean." }
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
