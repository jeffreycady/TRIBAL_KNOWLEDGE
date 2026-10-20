/* Gear & Logistics content.
   Every outcome cites a source. Keep ids stable when editing.
   To suggest a change, open contribute.html. */

const GEAR_IDS = new Set(['out_lost','out_cold','out_fuel_plan','out_pacing_early','out_exit_plan','gl_root','gc_root','gf_root','gp_root','gx_root']);

Object.assign(OUTCOMES, {
  out_lost:{
    severity:'mid', band:'Stop and reset', title:"Lost or off course: stop and reset",
    body:"Getting lost despite trail markings is a common reason runners don't finish. In a 2022 marathon in South Africa, about 19% of runners who didn't finish said they got lost, even with markings (Maleka and colleagues, 2026).",
    action:"Stop moving forward. If you're safe, stay where you can be found. Retrace only as far as the last marker you're sure of. Use your GPS track or route file, and call for help or signal if you have service or an emergency device. If you're hurt, cold, or can't find any markers, treat it as an emergency and call for help now.",
    source:{title:"Navigating adversity: non-completion and evacuation of trail runners at the 2022 Magoebaskloof Forest Marathon", host:"South African Journal of Sports Medicine (2026), University of Pretoria repository", url:"https://repository.up.ac.za/items/5e82369c-58b4-48a2-879c-2f28fa7e0aa1"}
  },
  out_cold:{
    severity:'mid', band:'Warm up now', title:"Getting cold: warm up before it becomes dangerous",
    body:"A review of serious trail-running incidents (Viljoen and colleagues, 2025) found cold weather with possible hypothermia was the most common external cause of death in the news-based sample. Risk rises when the weather turns quickly, or when you stop moving while damp from sweat. The sample comes from news reports, so it likely undercounts events.",
    action:"Put on your warm layer now, eat and drink, and keep moving if you can. Get out of wind and any wet clothing. Don't stand still for long while damp. If you become confused, very drowsy, or stop shivering, call for emergency help now.",
    source:{title:"Serious adverse events in trail running: a review of fatal, missing and catastrophic cases", host:"Wilderness & Environmental Medicine (2025)", url:"https://repository.up.ac.za/server/api/core/bitstreams/55430fce-09b0-4fba-b86d-6b3e0fef1d94/content"}
  },
  out_fuel_plan:{
    severity:'low', title:"Fuel and drink on a schedule, not by feel",
    body:"The ACSM position stand on exercise and fluid replacement (2007) advises replacing sweat losses rather than drinking a fixed amount. It recommends starting to drink early and at regular intervals, about 500 ml roughly two hours before exercise, and sodium in fluids for efforts over about an hour, around 0.5 to 0.7 g per liter. It uses body-weight change as the benchmark for fluid needs.",
    action:"Write a fueling and fluid plan for your race: a set time to eat, a target fluid amount per hour, and sodium for long efforts. Test it in training. Weigh yourself before and after long runs to check your fluid plan.",
    source:{title:"American College of Sports Medicine position stand: Exercise and fluid replacement", host:"Medicine & Science in Sports & Exercise (ACSM) / PubMed", url:"https://pubmed.ncbi.nlm.nih.gov/17277604/"}
  },
  out_pacing_early:{
    severity:'low', title:"Went out too fast? Plan a slowdown on purpose",
    body:"In a study of the 100 km Lauf Biel (2000 to 2009), the top ten male finishers slowed over the first two segments and held most of their pace later (Knechtle and colleagues, 2015). That's one race, men only, and descriptive, but it suggests planning an early slowdown rather than racing the first hours by feel.",
    action:"Slow down on purpose now, not later. Check your effort for the next hour. Eat and drink before you're hungry or thirsty. Pick your next checkpoint and aim to hold effort until you reach it.",
    source:{title:"Pacing strategy in male elite and age-group 100 km ultra-marathoners", host:"Open Access Journal of Sports Medicine (2015) / PMC", url:"https://pmc.ncbi.nlm.nih.gov/articles/PMC4376307"}
  },
  out_exit_plan:{
    severity:'low', title:"Plan your exit before you need it",
    body:"In the same 2022 South African marathon, most runners who didn't finish (63% of those surveyed) hiked back to the nearest aid station, and 19% were then taken out by shuttle (Maleka and colleagues, 2026). Knowing your exit points ahead of time makes a stop safer.",
    action:"Before race day, mark the aid stations and the nearest road or exit on your route. Tell your crew or a friend your exit plan and check-in times. If you want to stop, head to the nearest aid station rather than pushing further along the course.",
    source:{title:"Navigating adversity: non-completion and evacuation of trail runners at the 2022 Magoebaskloof Forest Marathon", host:"South African Journal of Sports Medicine (2026), University of Pretoria repository", url:"https://repository.up.ac.za/items/5e82369c-58b4-48a2-879c-2f28fa7e0aa1"}
  }
});

Object.assign(NODES, {
  gl_root:{
    text:"Where are you right now?",
    opts:[
      {label:"Off course, or not sure where I am", next:'out_lost'},
      {label:"On course, but I need to stop or leave the course", next:'out_exit_plan'}
    ]
  },
  gc_root:{
    text:"Are you (or they) confused, very drowsy, or have you stopped shivering?",
    opts:[
      {label:"Yes", next:'out_emergency'},
      {label:"No, but I'm getting cold or wet", next:'out_cold'}
    ]
  },
  gf_root:{
    text:"Which sounds closer?",
    opts:[
      {label:"Mostly plain water, and I feel bloated or puffy", next:'out_hyponatremia'},
      {label:"Hot and flushed, sweating heavily, but thinking clearly", next:'out_heat_exhaustion'},
      {label:"I haven't been eating or drinking on a schedule", next:'out_fuel_plan'}
    ]
  },
  gp_root:{
    text:"Where are you in the race?",
    opts:[
      {label:"Early, and I went out too fast", next:'out_pacing_early'},
      {label:"Late, and I've slowed a lot", next:'out_fuel_plan'}
    ]
  }
});

DECISION_TREES.push(
  { id:'gear-lost', category:'gear', title:"Lost, or need to get off the course", blurb:"Find out whether you're off route, or whether you need to stop safely.", root:'gl_root' },
  { id:'gear-cold', category:'gear', title:"Getting cold or wet", blurb:"Cold can turn dangerous quickly, especially after you stop moving.", root:'gc_root' },
  { id:'gear-fuel', category:'gear', title:"Fueling, fluids, or heat", blurb:"Most long-day problems start with what's going in, or how hot you're getting.", root:'gf_root' },
  { id:'gear-pacing', category:'gear', title:"Pacing: went out too fast, or slowing late", blurb:"Plan the pace and the fuel together.", root:'gp_root' }
);

const GEAR_DIRECT = ['out_lost','out_cold','out_fuel_plan','out_pacing_early','out_exit_plan'];
