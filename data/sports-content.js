/* Sport-specific content (road running, trail running).
   Each outcome cites its source. Keep ids stable when editing.
   To suggest a change, open contribute.html. */

const SPORT_IDS = new Set(['out_load_ramp','out_trail_skin','rl_root','tk_root']);

Object.assign(OUTCOMES, {
  out_load_ramp:{
    severity:'low', band:'Common with fast ramp-ups', title:"Ramping up too fast: change one thing at a time",
    body:"Running injuries are often blamed on training changes, but the evidence is weak. A 2018 systematic review (Damsted and colleagues) found some studies where bigger, sudden jumps in distance, speed, or runs per week went with more injuries. Across the four studies it reviewed, the evidence was very limited and inconsistent.",
    action:"Change one thing at a time: distance, speed, or how often you run. Keep weekly increases modest. If a sore spot lasts more than a few days or gets worse while you run, cut back and see a clinician or physiotherapist.",
    source:{title:"Is there evidence for an association between changes in training load and running-related injuries? A systematic review", host:"International Journal of Sports Physical Therapy (2018)", url:"https://doi.org/10.26603/ijspt20180931"}
  },
  out_trail_skin:{
    severity:'low', band:'Clean it and cover it', title:"Cuts, scrapes, or blisters from a trail fall or long run",
    body:"In a 2021 systematic review of trail runners (Viljoen and colleagues), skin injuries such as lacerations, abrasions, and blisters were the most common types reported. Injury rates varied widely across the studies, and much of the research covered skin and stomach problems.",
    action:"Rinse cuts and scrapes with clean water, remove any grit, and cover them. Change wet socks, and check your feet during long runs for blister spots. If you see spreading redness, warmth, pus, or fever, see a clinician soon.",
    source:{title:"Epidemiology of Injury and Illness Among Trail Runners: A Systematic Review", host:"Sports Medicine (2021)", url:"https://doi.org/10.1007/s40279-020-01418-1"}
  }
});

Object.assign(NODES, {
  rl_root:{
    text:"What changed recently?",
    opts:[
      {label:"I added distance, speed, or runs per week quickly", next:'out_load_ramp'},
      {label:"A sore spot won't go away, and I haven't changed much", next:'out_load_ramp'}
    ]
  },
  tk_root:{
    text:"What happened on the trail?",
    opts:[
      {label:"I fell or got scraped", next:'out_trail_skin'},
      {label:"I got blisters on a long run", next:'out_trail_skin'}
    ]
  }
});

DECISION_TREES.push(
  { id:'running-load', category:'training', sports:['road-run','trail-run','ultra'], title:"Training more and something hurts", blurb:"Running injuries are often linked to changes in training. Change one thing at a time.", root:'rl_root' },
  { id:'trail-skin', category:'physical', sports:['trail-run','ultra'], title:"Cut, scraped, or blistered on the trail", blurb:"Skin injuries are the most common trail injury. Most are easy to manage if you clean and cover them.", root:'tk_root' }
);
