/* Glossary for Tribal Knowledge.
   Each term is written in our own words. kind:'fact' means a definition
   we can check; kind:'community' means common usage or slang, which varies.
   To suggest a change, open contribute.html. */

const GLOSSARY = [
  { term:"Aid station", aliases:["aid"], sports:["ultra","trail-run","road-run","tri"], kind:"fact", def:"A supplied checkpoint on a course where runners refill, eat, and sometimes get medical help." },
  { term:"Back-to-back long runs", aliases:["back to back"], sports:["ultra","trail-run","road-run","tri"], kind:"community", def:"Long runs on consecutive days, used to practice running on tired legs." },
  { term:"Bonk", aliases:["hit the wall"], sports:["ultra","trail-run","road-run","tri","road-bike","gravel","mtb"], kind:"fact", def:"Sudden, severe fatigue during a long effort, usually when glycogen stores run low." },
  { term:"Buckle", aliases:["belt buckle"], sports:["ultra","trail-run"], kind:"community", def:"The belt buckle awarded for finishing a 100-mile race." },
  { term:"Cairn", aliases:[], sports:["ultra","trail-run","hiking","mountaineering","trekking","sky","skimo"], kind:"fact", def:"A stack of stones that marks a route where the trail is unclear." },
  { term:"Crew", aliases:["crew chief"], sports:["ultra","trail-run"], kind:"fact", def:"People who support a runner at aid stations with food, drink, gear, and encouragement." },
  { term:"Cutoff", aliases:["cut-off", "time cutoff"], sports:["ultra","trail-run","road-run","tri"], kind:"fact", def:"A time limit to reach an aid station or finish. Missing it usually ends your race." },
  { term:"DFL", aliases:["dead last"], sports:["ultra","trail-run","road-run","tri"], kind:"community", def:"Finishing last among those who made the cutoff." },
  { term:"DNF", aliases:["did not finish"], sports:["ultra","trail-run","road-run","tri","road-bike","gravel","mtb","sky"], kind:"fact", def:"Did not finish: you dropped out, missed a cutoff, or were pulled from the course." },
  { term:"DNS", aliases:["did not start"], sports:["ultra","trail-run","road-run","tri","road-bike","gravel","mtb","sky"], kind:"fact", def:"Did not start: you registered but never reached the start line." },
  { term:"Drop bag", aliases:["drop bags"], sports:["ultra","trail-run"], kind:"fact", def:"Supplies packed in advance and left at a specific aid station for you to use later." },
  { term:"Electrolytes", aliases:["electrolyte"], sports:["ultra","trail-run","road-run","tri","road-bike","gravel","mtb","sky"], kind:"fact", def:"Minerals such as sodium, potassium, and magnesium that you lose through sweat." },
  { term:"Elevation gain", aliases:["vert", "vertical gain"], sports:["ultra","trail-run","sky","skimo","hiking","mtb","road-bike","gravel","mountaineering","bikepacking"], kind:"fact", def:"The total climbing on a course. It's a better guide to difficulty than distance." },
  { term:"Euro-hiking", aliases:[], sports:["ultra","trail-run","hiking","sky","skimo"], kind:"community", def:"Uphill walking with a hand pressing down on each quad with every step." },
  { term:"FKT", aliases:["fastest known time"], sports:["ultra","trail-run","road-run","road-bike","mtb","sky","hiking"], kind:"fact", def:"Fastest known time: the record for a route, set outside a race and usually self-timed." },
  { term:"Fueling", aliases:["fuel", "nutrition"], sports:["ultra","trail-run","road-run","tri","road-bike","gravel","mtb","sky"], kind:"fact", def:"Taking in calories and fluid during a run, such as gels, food, and drink." },
  { term:"Golden hour", aliases:[], sports:["ultra"], kind:"community", def:"The final hour before a 100-mile race's cutoff, when the last finishers come in to crowds cheering." },
  { term:"Gut training", aliases:["train your gut"], sports:["ultra","trail-run","road-run","tri","road-bike","gravel","mtb"], kind:"community", def:"Practicing eating and drinking during training so your stomach handles it on race day." },
  { term:"Hallucinations", aliases:["seeing things"], sports:["ultra","trail-run","sky","skimo","mountaineering"], kind:"fact", def:"Seeing things that aren't there, such as shapes or small figures, which many runners report after a night without sleep. See the Mental section." },
  { term:"Lottery", aliases:[], sports:["ultra","trail-run","road-run","tri"], kind:"fact", def:"A random draw used to fill popular races when more people apply than there are places." },
  { term:"Out and back", aliases:[], sports:["ultra","trail-run","road-run","hiking","road-bike","gravel","mtb","sky","trekking","bikepacking"], kind:"fact", def:"A route that returns along the same path to the start." },
  { term:"Age Rank", aliases:["UltraSignup age rank"], sports:["ultra","trail-run","road-run","tri"], kind:"fact", def:"On UltraSignup, the same percentile score as Runner Rank, but compared only with runners in your age and gender group." },
  { term:"Pacer", aliases:["pacers"], sports:["ultra","trail-run"], kind:"fact", def:"A runner who joins for part of a race to keep you company, help you stay on course, and keep you safe." },
  { term:"Power hiking", aliases:["power hike"], sports:["ultra","trail-run","hiking","sky","skimo"], kind:"community", def:"Walking uphill quickly, often with hands on the thighs. Many ultrarunners do it on climbs to save energy." },
  { term:"Quad buster", aliases:[], sports:["ultra","trail-run","sky","mtb"], kind:"community", def:"A steep downhill run, often taken fast, that hammers the quads." },
  { term:"Reverse taper", aliases:[], sports:["ultra","road-run","tri","road-bike","gravel","mtb"], kind:"community", def:"Gradually building training volume back up after a race or a recovery break." },
  { term:"Runnable", aliases:[], sports:["ultra","trail-run","hiking"], kind:"community", def:"Loose term for terrain you can actually run, not technical or dangerous." },
  { term:"Runner Rank", aliases:["UltraSignup runner rank"], sports:["ultra","trail-run","road-run","tri"], kind:"fact", def:"On UltraSignup, a percentile score from 0 to 100 comparing your results with other finishers in your gender division, averaged over your races." },
  { term:"RPE", aliases:["rate of perceived exertion"], sports:["ultra","trail-run","road-run","tri","road-bike","gravel","mtb","sky","hiking","trekking","ows","skimo","mountaineering"], kind:"fact", def:"Rate of perceived exertion: a self-rated scale of how hard an effort feels, used in place of a fixed pace." },
  { term:"Singletrack", aliases:["single track"], sports:["ultra","trail-run","hiking","mtb","sky","bikepacking","trekking"], kind:"fact", def:"A narrow trail that fits one runner at a time." },
  { term:"Taper", aliases:["tapering"], sports:["ultra","road-run","tri","road-bike","gravel","mtb"], kind:"fact", def:"Cutting training volume in the weeks before a race so you arrive fresh." },
  { term:"Time on feet", aliases:[], sports:["ultra","trail-run","road-run","tri","road-bike","gravel","mtb","sky","hiking","trekking","ows","skimo","mountaineering","bikepacking"], kind:"fact", def:"Total time spent moving during training or a race, used instead of distance on long events." },
  { term:"Trail gnome", aliases:["trail gnomes"], sports:["ultra","trail-run","hiking","trekking"], kind:"community", def:"Two meanings. In ultras, slang for gnome-like figures that runners say they see at night. On the Appalachian Trail, a garden gnome passed between hostels in a folklore game where carrying it to the next hostel earns a free night." },
  { term:"UltraSignup", aliases:["ultra signup"], sports:["ultra","trail-run","road-run"], kind:"fact", def:"A race website for event registration, results, an event finder, and runner rankings." }
];
