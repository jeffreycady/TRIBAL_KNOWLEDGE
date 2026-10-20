/* Gear & Logistics content.
   Every outcome cites a source. Keep ids stable when editing.
   To suggest a change, open contribute.html. */

const GEAR_IDS = new Set(['start-bike','sbb_root','out_sb_bike','out_sb_run','out_sb_plan','out_sb_essentials','sb_root','start-backcountry','out_blue_bag_where','out_water_treat','out_filter_sawyer','out_filter_platypus','out_filter_general','out_catholes','out_waste_bag','gs_root','gear-sanitation','out_lost','out_cold','out_fuel_plan','out_fuel_ultra','out_pacing_early','out_exit_plan','gl_root','gc_root','gf_root','gp_root','gx_root']);

Object.assign(OUTCOMES, {
  out_fuel_ultra:{
    sports:['ultra','trail-run'],
    severity:'low', title:"Long race: eat carbohydrate every hour, not just when you're hungry",
    body:"For efforts of about an hour or longer, the common guidance is 30 to 60 g of carbohydrate per hour. For events of 2.5 hours or more, a 2013 review by Jeukendrup describes up to about 90 g per hour, using a mix of glucose or maltodextrin and fructose, for well-trained athletes. Lower intensity or less experienced runners may need less. The figure is in grams, not per kilogram of body weight.",
    action:"Set a schedule for eating, not a feel-based one. Start near the low end of the range for your effort and build up only if your stomach handles it. Practice the amount and the foods you plan to use on your long training runs, so race day has no surprises.",
    source:{title:"SSE #108: Multiple Transportable Carbohydrates and Their Benefits", host:"Gatorade Sports Science Institute (GSSI), Sports Science Exchange (2013)", url:"https://www.gssiweb.org/sports-science-exchange/article/sse-108-multiple-transportable-carbohydrates-and-their-benefits"}
  },
  out_lost:{
    sports:['ultra','trail-run','hiking','sky','skimo','mountaineering','trekking'],
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
    prerace:true,
    severity:'low', title:"Fuel and drink on a schedule, not by feel",
    body:"The ACSM position stand on exercise and fluid replacement (2007) advises replacing sweat losses rather than drinking a fixed amount. It recommends starting to drink early and at regular intervals, about 500 ml roughly two hours before exercise, and sodium in fluids for efforts over about an hour, around 0.5 to 0.7 g per liter. It uses body-weight change as the benchmark for fluid needs.",
    action:"Write a fueling and fluid plan for your race: a set time to eat, a target fluid amount per hour, and sodium for long efforts. Test it in training. Weigh yourself before and after long runs to check your fluid plan.",
    source:{title:"American College of Sports Medicine position stand: Exercise and fluid replacement", host:"Medicine & Science in Sports & Exercise (ACSM) / PubMed", url:"https://pubmed.ncbi.nlm.nih.gov/17277604/"}
  },
  out_pacing_early:{
    prerace:true,
    severity:'low', title:"Went out too fast? Plan a slowdown on purpose",
    body:"In a study of the 100 km Lauf Biel (2000 to 2009), the top ten male finishers slowed over the first two segments and held most of their pace later (Knechtle and colleagues, 2015). That's one race, men only, and descriptive, but it suggests planning an early slowdown rather than racing the first hours by feel.",
    action:"Slow down on purpose now, not later. Check your effort for the next hour. Eat and drink before you're hungry or thirsty. Pick your next checkpoint and aim to hold effort until you reach it.",
    source:{title:"Pacing strategy in male elite and age-group 100 km ultra-marathoners", host:"Open Access Journal of Sports Medicine (2015) / PMC", url:"https://pmc.ncbi.nlm.nih.gov/articles/PMC4376307"}
  },
  out_exit_plan:{
    sports:['ultra','trail-run','road-run','tri','road-bike','gravel','mtb','sky','skimo'],
    prerace:true,
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

// First-ultra branch on the fueling tree
NODES.gf_root.opts.push({label:"I'm planning my first long race and want to know how much to eat", next:'out_fuel_ultra'});

DECISION_TREES.push(
  { id:'gear-lost', sports:['ultra','trail-run','hiking','sky','skimo','mountaineering','trekking'], category:'gear', title:"Lost, or need to get off the course", blurb:"Find out whether you're off route, or whether you need to stop safely.", root:'gl_root' },
  { id:'gear-cold', category:'gear', title:"Getting cold or wet", blurb:"Cold can turn dangerous quickly, especially after you stop moving.", root:'gc_root' },
  { id:'gear-fuel', category:'gear', title:"Fueling, fluids, or heat", blurb:"Most long-day problems start with what's going in, or how hot you're getting.", root:'gf_root' },
  { id:'gear-pacing', category:'gear', title:"Pacing: went out too fast, or slowing late", blurb:"Plan the pace and the fuel together.", root:'gp_root' }
);

Object.assign(OUTCOMES, {
  out_catholes:{
    severity:'low', band:'Dig it right', title:"Going to the bathroom on the trail: the cat hole",
    body:"Leave No Trace guidance is to dig a cat hole 6 to 8 inches deep and 4 to 6 inches wide, at least 200 feet (about 70 to 80 adult paces) from water, trails, and camp. Cover it with natural material when you finish. Bury toilet paper deep in the hole or pack it out. Menstrual products and wipes should be packed out.",
    steps:[
      "Carry a small trowel and hand sanitizer.",
      "Walk at least 200 feet (about 70 to 80 adult paces) from water, trails, and camp. Avoid sandy washes and low spots where runoff collects.",
      "Dig a hole 6 to 8 inches deep and 4 to 6 inches wide.",
      "Go in the hole.",
      "Put toilet paper in the hole and cover it with soil. Pack out toilet paper if you don't bury it.",
      "Cover the hole with natural material when you finish.",
      "Pack out menstrual products and wipes. Clean your hands with sanitizer."
    ],
    action:"Carry a small trowel and hand sanitizer that doesn't need rinsing. Walk at least 200 feet away from water, trails, and camp, and avoid sandy washes and low spots where runoff collects. Dig the hole, go, cover it, and sanitize your hands. Pack out what you don't bury.",
    source:{title:"Principle 3: Dispose of Waste Properly", host:"Leave No Trace Center for Outdoor Ethics", url:"https://lnt.org/learn/principle-3"}
  },
  out_waste_bag:{
    severity:'mid', band:'Check the rules first', title:"I have to carry my poop out: how to use a pack-out (blue) bag",
    body:"Some places require you to pack out solid human waste. Zion National Park requires carrying it out from all canyons, including the Narrows, and offers disposal bags at its bookstore and through local outfitters. Leave No Trace also notes that land managers may require pack-out in fragile settings, such as narrow canyons.",
    steps:[
      "Check the rules for the park or area before you go, including whether you have to carry waste out.",
      "Get the bags before you leave. Ask the permit office or bookstore where to buy them.",
      "Open the outer bag and pull out the inner liner. Take out the hand sanitizer and toilet paper.",
      "Sit over the bag and hold the plastic bag around your hips so it catches the waste.",
      "When you're done, use the cinch loop on the inner pouch to seal and tie it off.",
      "Run your fingers along the zip seal on the outer bag to close it.",
      "Check that the seal has no openings or leaks before you store the bag.",
      "On a multi-day trip, keep the used bag in the bottom of your pack, away from food.",
      "Carry out all solid human waste, toilet paper, and feminine hygiene products.",
      "Dispose of the bag only where the land manager says to."
    ],
    action:"Carry one bag per person per night when the area requires it. Seal it, check it, and carry it out. Ask the park where to dispose of it.",
    links:[{name:"How to use a WAG bag", url:"https://thedyrt.com/magazine/gear/wag-bag-camping-waste/", note:"step-by-step use and disposal"}],
    source:{title:"Zion National Park: Carry Out Solid Human Waste (park staff statements)", host:"National Parks Traveler (2025)", url:"https://www.nationalparkstraveler.org/node/20195"}
  }
});

Object.assign(NODES, {
  gs_root:{
    text:"What do you need?",
    opts:[
      {label:"I need to poop", next:'out_catholes'},
      {label:"Do I have to carry my poop out?", next:'out_waste_bag'}
    ]
  }
});

DECISION_TREES.push(
  { id:'gear-sanitation', category:'gear', title:"Sanitation: bathroom, waste, and water", blurb:"Where to go, how to pack out waste, and how to treat water and keep a filter flowing.", root:'gs_root' }
);

Object.assign(OUTCOMES, {
  out_blue_bag_where:{
    severity:'low', band:'Check before you go', title:"Which parks require you to carry waste out",
    body:"More parks and wilderness areas now require you to carry out solid human waste. Zion requires it in all canyons, including the Narrows. Guadalupe Mountains requires a toilet bag system for overnight wilderness permits. Rio Grande Wild and Scenic River requires commercial and private river parties to pack out waste on overnight trips. Rules change, so check each land manager's current rules before you go.",
    action:"Look up the park or wilderness before you leave. Ask the permit office or bookstore about bags. The Rio Grande page was last updated in 2013, and one Guadalupe page still has older burial advice, so confirm both with the park before relying on them.",
    source:{title:"Zion National Park: Carry Out Solid Human Waste (park staff statements)", host:"National Parks Traveler (2025)", url:"https://www.nationalparkstraveler.org/node/20195"},
    links:[
      {name:"Guadalupe Mountains National Park", url:"https://home.nps.gov/thingstodo/gumo_human_waste_wilderness.htm", note:"overnight wilderness permits"},
      {name:"Rio Grande Wild and Scenic River", url:"https://www.nps.gov/rigr/planyourvisit/humanwaste.htm", note:"commercial and private river parties on overnight trips"},
      {name:"Zion National Park (via National Parks Traveler)", url:"https://www.nationalparkstraveler.org/node/20195", note:"all canyons, including the Narrows"}
    ]
  },
  out_water_treat:{
    severity:'low', band:'Treat before you drink', title:"Treating water: boil, filter, or disinfect",
    body:"The CDC says boiling is the most reliable method: boil for 1 minute, or 3 minutes above 6,500 feet. A filter rated 0.3 micron or smaller stops bacteria, and a cyst-certified filter also stops Giardia and Cryptosporidium. Filters do not remove viruses. Chlorine and iodine are only somewhat effective against Giardia and are not effective against Cryptosporidium. Chlorine dioxide is effective against Giardia. UV works only in clear water.",
    steps:[
      "If the water is cloudy, filter it first.",
      "To boil, bring water to a rolling boil. Keep it boiling for 1 minute, or 3 minutes above 6,500 feet.",
      "To filter, use a filter rated 0.3 micron or smaller. Choose a cyst-certified filter if you need to stop Giardia and Cryptosporidium.",
      "To use a chemical, follow the product label exactly, including the wait time.",
      "Remember that filters do not remove viruses. Boiling is the most reliable method."
    ],
    action:"If the water is cloudy, filter it first, then treat it. If you rely on a filter alone, it won't stop viruses. If you use a chemical, follow the label exactly, including the wait time. For dosing and warnings on chemical treatments, see the CDC travel guidance and the product label.",
    source:{title:"Backcountry Water Treatment", host:"Centers for Disease Control and Prevention (CDC)", url:"https://www.cdc.gov/healthywater/pdf/drinking/Backcountry_Water_Treatment-508.pdf"}
  },
  out_filter_sawyer:{
    severity:'low', band:'Clean it and backflush', title:"Sawyer filter is slow: backflush until it runs clear",
    body:"Water flows through a filter by passing through thousands of tiny hollow fibers. Over time, dirt builds up inside them and the flow slows. Backflushing means pushing clean water backward through the filter, the opposite way water normally flows, to push the dirt out. Keep backflushing until the water coming out the dirty end runs clear. Sawyer recommends backflushing when the flow slows down.",
    steps:[
      "Get the Sawyer syringe and some clean water. Use water you have already treated.",
      "Fill the syringe with clean water.",
      "Attach the syringe to the clean end of the filter. The clean end is the end you drink from.",
      "Push the plunger firmly. The water goes backward through the filter and comes out the dirty end. Aim the dirty end at the ground, away from any stream or lake.",
      "Refill the syringe and push again. Keep going until the water coming out runs clear and flows easily.",
      "If it is still slow, soak the filter in hot water, no hotter than you can comfortably keep your finger in, for 2 hours. Then backflush again until it runs clear.",
      "If your water is mineral-rich, soak the filter in vinegar for 30 minutes, then backflush with hot water until it runs clear."
    ],
    diagram:'<svg viewBox="0 0 440 170" role="img" aria-label="Backflush diagram: push clean water into the clean end of the filter, opposite the normal flow"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="currentColor"/></marker></defs><rect x="30" y="50" width="70" height="40" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><text x="65" y="75" text-anchor="middle" font-size="12" fill="currentColor">Syringe or bottle</text><text x="65" y="110" text-anchor="middle" font-size="12" fill="currentColor">Clean water</text><rect x="150" y="40" width="120" height="60" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="210" y="75" text-anchor="middle" font-size="13" fill="currentColor">Filter</text><text x="330" y="75" text-anchor="middle" font-size="12" fill="currentColor">Dirty end</text><line x1="104" y1="70" x2="146" y2="70" stroke="currentColor" stroke-width="2.5" marker-end="url(#ah)"/><text x="125" y="62" text-anchor="middle" font-size="11" fill="currentColor">Push</text><line x1="300" y1="130" x2="160" y2="130" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#ah)"/><text x="230" y="152" text-anchor="middle" font-size="11" fill="currentColor">Normal flow: dirty in, clean out</text></svg>',
    action:"Fill the Sawyer syringe with clean water, attach it to the clean end, and push. Keep backflushing until the water runs clear.",
    source:{title:"5 Sawyer Squeeze Hacks for Hikers", host:"Sawyer (manufacturer blog)", url:"https://www.sawyer.com/blog/5-sawyer-squeeze-hacks-for-hikers"}
  },
  out_filter_platypus:{
    severity:'low', band:'Clean it and backflush', title:"Platypus filter is slow: backflush until it runs clear",
    body:"Water flows through a filter by passing through thousands of tiny hollow fibers. Over time, dirt builds up inside them and the flow slows. Platypus says clean water passed in the clean side and out the dirty side rinses the particles out of the fibers. Keep backflushing until the water runs clear. Platypus recommends backflushing after every 10 liters you filter.",
    steps:[
      "Get a clean bottle and some clean water. Use water you have already treated.",
      "Fill the bottle with clean water.",
      "Attach the bottle to the clean end of the filter, using the fitting that came with your filter. Your Platypus instructions show which fitting to use.",
      "Squeeze the bottle to push the water backward through the filter and out the dirty end. Do this away from any stream or lake.",
      "Refill the bottle and keep going until the water coming out runs clear and flows easily.",
      "If it is still slow, check your Platypus instructions. You can also call Cascade Designs at 1-800-531-9531."
    ],
    diagram:'<svg viewBox="0 0 440 170" role="img" aria-label="Backflush diagram: push clean water into the clean end of the filter, opposite the normal flow"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="currentColor"/></marker></defs><rect x="30" y="50" width="70" height="40" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><text x="65" y="75" text-anchor="middle" font-size="12" fill="currentColor">Syringe or bottle</text><text x="65" y="110" text-anchor="middle" font-size="12" fill="currentColor">Clean water</text><rect x="150" y="40" width="120" height="60" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="210" y="75" text-anchor="middle" font-size="13" fill="currentColor">Filter</text><text x="330" y="75" text-anchor="middle" font-size="12" fill="currentColor">Dirty end</text><line x1="104" y1="70" x2="146" y2="70" stroke="currentColor" stroke-width="2.5" marker-end="url(#ah)"/><text x="125" y="62" text-anchor="middle" font-size="11" fill="currentColor">Push</text><line x1="300" y1="130" x2="160" y2="130" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#ah)"/><text x="230" y="152" text-anchor="middle" font-size="11" fill="currentColor">Normal flow: dirty in, clean out</text></svg>',
    action:"Fill a clean bottle with treated water, attach it to the clean end of the filter, and squeeze. Keep going until the water runs clear.",
    source:{title:"Platypus Frequently Asked Questions", host:"Cascade Designs (Platypus maker)", url:"https://cascadedesigns.com/pages/faq-platypus"}
  },
  out_filter_general:{
    severity:'low', band:'Clean it and backflush', title:"Filter is slow: backflush until it runs clear",
    body:"A filter slows down when dirt builds up inside its tiny hollow fibers. Backflushing means pushing clean water backward through the filter, the opposite way water normally flows, to push the dirt out. Keep backflushing until the water runs clear.",
    steps:[
      "Look at the brand name on your filter. If it says Sawyer or Platypus, use that page instead.",
      "Get clean water that you have already treated, and a syringe or clean bottle that fits the clean end of the filter.",
      "Attach it to the clean end of the filter, which is the end you drink from.",
      "Push the water backward through the filter, out the dirty end. Do this away from any stream or lake.",
      "Keep going until the water coming out runs clear and flows easily.",
      "If it is still slow, check your filter's manual."
    ],
    diagram:'<svg viewBox="0 0 440 170" role="img" aria-label="Backflush diagram: push clean water into the clean end of the filter, opposite the normal flow"><defs><marker id="ah" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="currentColor"/></marker></defs><rect x="30" y="50" width="70" height="40" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><text x="65" y="75" text-anchor="middle" font-size="12" fill="currentColor">Syringe or bottle</text><text x="65" y="110" text-anchor="middle" font-size="12" fill="currentColor">Clean water</text><rect x="150" y="40" width="120" height="60" rx="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="210" y="75" text-anchor="middle" font-size="13" fill="currentColor">Filter</text><text x="330" y="75" text-anchor="middle" font-size="12" fill="currentColor">Dirty end</text><line x1="104" y1="70" x2="146" y2="70" stroke="currentColor" stroke-width="2.5" marker-end="url(#ah)"/><text x="125" y="62" text-anchor="middle" font-size="11" fill="currentColor">Push</text><line x1="300" y1="130" x2="160" y2="130" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#ah)"/><text x="230" y="152" text-anchor="middle" font-size="11" fill="currentColor">Normal flow: dirty in, clean out</text></svg>',
    action:"Check the brand on your filter. Then push clean water backward through it until it runs clear.",
    source:{title:"Sawyer Filter Backwashing Tips and Tricks", host:"Sawyer (manufacturer resource)", url:"https://www.sawyer.com/resources/backwashing-tips-and-tricks"}
  }
});

Object.assign(NODES, {
  fs_root:{
    text:"Which water filter do you have?",
    opts:[
      {label:"Sawyer", next:'out_filter_sawyer'},
      {label:"Platypus", next:'out_filter_platypus'},
      {label:"I'm not sure", next:'out_filter_general'}
    ]
  }
});

Object.assign(OUTCOMES, {
  out_sb_plan:{
    severity:'low', band:'Start here', title:"Before you go: plan, tell someone, and know your route",
    body:"Backcountry means you are far from help, so the planning you do at home matters most. The National Park Service says to tell someone where you are going and when to expect you back. Know how to use your map and compass or GPS before you go, and bring a paper map as a backup. Prepare for sudden changes in weather.",
    steps:[
      "Tell a trusted person where you are going, which trail or area, and when you expect to be back. Tell them when to call for help if you don't return.",
      "Learn to read a topographic map and use a compass or GPS before you leave home.",
      "Carry a paper map as a backup, even if you use a phone or GPS.",
      "Check the weather for the area, and plan for it to change quickly.",
      "Check the area's rules before you go. Some parks require permits or have fire restrictions."
    ],
    action:"Write down your route and return time, leave a copy with someone, and practice using your map before you go.",
    source:{title:"The Ten Essentials", host:"U.S. National Park Service", url:"https://www.nps.gov/articles/10essentials.htm"}
  },
  out_sb_essentials:{
    severity:'low', band:'Pack these', title:"What to pack: the Ten Essentials",
    body:"The National Park Service recommends carrying these ten categories of gear on every trip, whether it's a short walk or an overnight. They are navigation, sun protection, extra clothing, illumination, first-aid supplies, fire, a repair kit and tools, extra food, water and treatment, and emergency shelter.",
    steps:[
      "Navigation: a map, a compass, and a GPS. Bring a paper map as a backup.",
      "Sun protection: sunglasses, sunscreen, and a hat.",
      "Extra clothing: a jacket, hat, gloves, and a rain shell. Choose bright colors so rescuers can spot you.",
      "Illumination: a headlamp or flashlight, and spare batteries. A headlamp keeps your hands free.",
      "First-aid supplies: a kit for your trip, with any regular medications you take.",
      "Fire: matches or a lighter, plus fire starters. Know the area's fire rules.",
      "Repair kit and tools: duct tape, a knife, a multi-tool, and scissors.",
      "Nutrition: an extra day's worth of mostly no-cook, energy-rich food.",
      "Hydration: water, and supplies to treat water. Drink before you feel thirsty.",
      "Emergency shelter: a tent, space blanket, tarp, or bivy."
    ],
    action:"Check your pack against this list before you leave home, then again before you start hiking.",
    source:{title:"The Ten Essentials", host:"U.S. National Park Service", url:"https://www.nps.gov/articles/10essentials.htm"}
  }
});

Object.assign(NODES, {
  sb_root:{
    text:"What do you need to know before a trail or backcountry trip?",
    opts:[
      {label:"How do I plan my trip?", next:'out_sb_plan'},
      {label:"What should I pack?", next:'out_sb_essentials'},
      {label:"I need clean water", next:'out_water_treat'},
      {label:"I need to poop", next:'out_catholes'}
    ]
  }
});

Object.assign(OUTCOMES, {
  out_sb_run:{
    severity:'low', band:'Start here', title:"Running on a backcountry trail",
    body:"When you run in the backcountry, cell service, water, and help can all be far away. The National Park Service's guidance for backcountry travel applies to runners as well as hikers. Plan for the worst case, and carry what you need to wait for help if you have to.",
    steps:[
      "Tell someone where you're going and when to expect you back.",
      "Know how to use your map and compass or GPS before you start. Carry a paper map as a backup.",
      "Check the weather, and plan for it to change suddenly.",
      "Carry the Ten Essentials, including extra clothing in bright colors so rescuers can spot you.",
      "Carry water and a way to treat it, and know where you can find water along the route.",
      "Carry an extra day's worth of mostly no-cook, energy-rich food."
    ],
    action:"Tell someone your route and return time, carry the Ten Essentials, and check the weather before you start.",
    source:{title:"The Ten Essentials", host:"U.S. National Park Service", url:"https://www.nps.gov/articles/10essentials.htm"}
  }
});

NODES.sb_root.opts.splice(0,0,{label:"I'm going to run on a backcountry trail", next:'out_sb_run'});

Object.assign(OUTCOMES, {
  out_sb_bike:{
    severity:'low', band:'Start here', title:"Riding a bike in the backcountry",
    body:"On a bike in the backcountry you can cover miles quickly, and a mechanical problem or a crash can leave you far from help. The National Park Service's backcountry guidance applies to riders as well as hikers. Plan for a flat, a broken part, or a change in the weather.",
    steps:[
      "Tell someone your route, where you're starting, and when to expect you back.",
      "Know how to use your map and compass or GPS before you start. Carry a paper map as a backup.",
      "Check the weather, and plan for it to change suddenly.",
      "Carry the Ten Essentials, plus the tools your bike needs to fix a flat or a broken part.",
      "Carry water and a way to treat it, and know where you can find water along the route.",
      "Carry extra food, more than you think you'll need."
    ],
    action:"Tell someone your route and return time, carry the Ten Essentials and your bike tools, and check the weather before you ride.",
    source:{title:"The Ten Essentials", host:"U.S. National Park Service", url:"https://www.nps.gov/articles/10essentials.htm"}
  }
});

Object.assign(NODES, {
  sbb_root:{
    text:"What do you need to know before a bike trip in the backcountry?",
    opts:[
      {label:"I'm going to ride a bike in the backcountry", next:'out_sb_bike'},
      {label:"I need clean water", next:'out_water_treat'},
      {label:"I need to poop", next:'out_catholes'}
    ]
  }
});

DECISION_TREES.push(
  { id:'start-bike', sports:['mtb','gravel','bikepacking'], category:'gear', title:"Start here: bike trips in the backcountry", blurb:"The basics for planning, packing, and fixing a bike in remote terrain.", root:'sbb_root' }
);

DECISION_TREES.push(
  { id:'start-backcountry', sports:['trail-run','hiking','mtb','gravel','bikepacking','trekking','sky','skimo','mountaineering','climbing','snowshoe'], category:'gear', title:"Start here: trails and backcountry", blurb:"The basics for planning and packing before you head out.", root:'sb_root' }
);


NODES.gs_root.opts = [
  {label:"I need to poop", next:'pn_root'},
  {label:"I need clean water", next:'pw_root'}
];
Object.assign(NODES, {
  pn_root:{
    text:"Can you dig a hole here?",
    opts:[
      {label:"Yes, I can dig a hole", next:'out_catholes'},
      {label:"No, I have to carry it out", next:'out_waste_bag'},
      {label:"Which parks make me carry it out?", next:'out_blue_bag_where'}
    ]
  },
  pw_root:{
    text:"What do you need with water?",
    opts:[
      {label:"Make it safe to drink", next:'out_water_treat'},
      {label:"My filter is slow", next:'fs_root'}
    ]
  }
});

const GEAR_DIRECT = ['out_lost','out_cold','out_fuel_plan','out_fuel_ultra','out_pacing_early','out_exit_plan'];
