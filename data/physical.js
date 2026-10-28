/* Physical & Medical content.
   Every outcome cites a source. Keep ids stable when editing.
   To suggest a change, open contribute.html. */
const OUTCOMES = {
  out_emergency:{
    severity:'high', title:"This needs emergency medical attention now",
    body:"Confusion, slurred speech, or altered behavior during or after endurance exercise is the single biggest red flag in sports medicine — it's the feature that separates a routine, self-resolving problem from heat stroke, severe hyponatremia, a cardiac event, or another genuine emergency. It isn't something to wait out.",
    action:"Call emergency services now. If it's hot, begin cooling immediately (shade, remove excess clothing, cold water or ice on neck/armpits/groin if available) while help is on the way. Do not give fluids if they can't safely swallow. Do not leave them alone.",
    source:{title:"Exercise-Associated Collapse", host:"StatPearls / NCBI Bookshelf", url:"https://www.ncbi.nlm.nih.gov/books/NBK576425/"}
  },
  out_heat_exhaustion:{
    severity:'mid', title:"Likely heat exhaustion",
    symptoms:"Feeling hot, flushed, or overheated, often with nausea, heavy sweating, weakness, dizziness, headache — while still thinking and speaking clearly. Can happen even when it's not especially hot outside, particularly during hard effort.",
    body:"Feeling hot or overheated with nausea and normal, clear thinking is the classic picture of heat exhaustion — uncomfortable and worth taking seriously, but distinct from heat stroke as long as mental status stays normal. It can progress to heat stroke if ignored.",
    action:"Stop exercising and get out of the heat. Move to shade or cooler air and remove extra clothing or gear. Cool your skin actively with water or wet cloths, and rest. Sip fluids once nausea allows, without forcing large amounts. Re-check how you are thinking every few minutes. If you become confused, stop responding normally, faint, or your condition gets worse, call emergency services now: this can be heat stroke, which is a medical emergency.",
    source:{title:"ACSM Expert Consensus Statement on Exertional Heat Illness: Recognition, Management, and Return to Activity", host:"Current Sports Medicine Reports (2023), doi:10.1249/JSR.0000000000001058", url:"https://doi.org/10.1249/JSR.0000000000001058"}
  },
  out_hyponatremia:{
    severity:'high', title:"Possible exercise-associated hyponatremia",
    symptoms:"Nausea, bloating, puffiness or swelling (hands, feet), headache — after drinking a lot of plain water over a long effort.",
    body:"Bloating, puffiness, or swelling after heavy plain-water intake over a long effort is a real warning sign for exercise-associated hyponatremia (low blood sodium) — a condition that gets worse, not better, with more water. Mild cases cause nausea and bloating; severe cases progress to confusion and can be life-threatening.",
    action:"Stop drinking plain water now. Take in salty food or a drink with added sodium, in small amounts, and sit down to rest. Many sports drinks contain less sodium than long efforts call for, so salty food is a useful addition. If you become confused, very drowsy, or start vomiting repeatedly, this is a medical emergency: call for help now.",
    source:{title:"Pathophysiology and treatment of exercise-associated hyponatremia", host:"National Library of Medicine", url:"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12847173/"}
  },
  out_hypoglycemia:{
    severity:'mid', title:"Likely low blood sugar",
    symptoms:"Shakiness, lightheadedness, irritability — connected to having under-fueled for the effort.",
    body:"Shakiness connected to under-fueling is a common, usually straightforward fix — but it can look similar to more serious things early on, so it's worth confirming it actually resolves.",
    action:"Take in fast-acting carbs (gel, sugary drink, fruit) now. You should start feeling better within 15 minutes. If you don't improve, or you get worse, treat this as the more serious possibilities above — stop and seek help.",
    source:{title:"Common Trail Running Injuries and How to Avoid Them", host:"CTS / Jason Koop", url:"https://trainright.com/trail-running-injuries-and-how-to-avoid-them/"}
  },
  out_uncertain:{
    severity:'mid', title:"Not a clear match — treat this cautiously",
    body:"Feeling genuinely unwell mid-effort without a clean explanation is exactly the situation sports medicine literature says deserves an actual evaluation, not a guess. Several serious and several benign conditions can look similar in the first few minutes.",
    action:"Stop. Don't push through it. Get to medical support if it's available (aid station, event medical), or have someone stay with you and reassess in 10–15 minutes. If anything moves toward confusion, worsening nausea, chest discomfort, or you're getting worse rather than better, treat it as an emergency.",
    source:{title:"Exercise-Associated Collapse", host:"StatPearls / NCBI Bookshelf", url:"https://www.ncbi.nlm.nih.gov/books/NBK576425/"}
  },
  out_eac:{
    severity:'low', title:"Likely exercise-associated collapse (benign)",
    symptoms:"Faint, unsteady, or dizzy right after stopping or finishing — improves with lying down.",
    body:"Feeling faint or unsteady right after stopping — especially after a long effort — is usually exercise-associated collapse: blood pooling in your legs once your muscles stop actively pumping it back. It's the most common reason athletes need help at a finish line, and it's generally not dangerous.",
    action:"Keep lying down with legs elevated above heart level. You should start improving within several minutes. Sip fluids once you're not lightheaded. If you don't improve, or mental status changes, that's no longer routine — seek medical attention.",
    source:{title:"Exercise-Associated Collapse", host:"StatPearls / NCBI Bookshelf", url:"https://www.ncbi.nlm.nih.gov/books/NBK576425/"}
  },
  out_eamc:{
    severity:'low', title:"Likely exercise-associated muscle cramping",
    symptoms:"Cramping confined to specific muscles (calves, hamstrings, quads) — everything else feels normal.",
    body:"Cramping confined to specific muscles during sustained effort is common and usually benign — most likely a combination of muscle fatigue and fluid/salt losses, not a sign of anything more serious.",
    action:"Stop, gently stretch and massage the muscle. Take in fluid and sodium (salted snack, electrolyte drink). It usually resolves with rest — if it keeps recurring across an event, that's worth adjusting your electrolyte strategy, not just treating each cramp.",
    prevention:"A tested electrolyte and fluid strategy for your expected duration and conditions, rather than reacting cramp by cramp.",
    source:{title:"ACSM Position Stand: Exertional Heat Illness", host:"American College of Sports Medicine / PubMed", url:"https://pubmed.ncbi.nlm.nih.gov/17473783/"}
  },
  blisters:{
    severity:'low', title:'Blisters',
    symptoms:"A painful, fluid-filled pocket under the skin — often preceded by a 'hot spot' (localized burning/rubbing sensation) before it fully forms.",
    body:"Repeated friction between skin and sock, shoe, pack strap, or clothing, worsened by moisture (sweat, wet trail crossings) and poor-fitting gear.",
    action:"Address hot spots the moment you notice them — don't wait for a full blister. Cover with tape (kinesiology tape or a purpose-made blister patch) before it worsens. If a blister has already formed and is painful, draining it with a sterilized needle and covering it is reasonable; leave the roof of skin in place rather than removing it, to reduce infection risk.",
    prevention:"Properly fitted shoes, socks, and gear (moisture-wicking, not cotton), anti-chafe balm on known hot-spot areas before you start, and addressing hot spots immediately rather than pushing through them.",
    source:{title:"13 Ultramarathon Race Day Ailments & Injuries", host:"Relentless Forward Commotion", url:"https://relentlessforwardcommotion.com/ultramarathon-race-day-ailments-injuries/"}
  },
  chafing:{
    severity:'low', title:'Chafing',
    symptoms:"Raw, burning, reddened skin, typically where skin rubs skin or fabric (inner thighs, underarms, sports bra line, waistband, nipples).",
    body:"Repetitive friction combined with sweat and salt residue, worsened over long durations and in hot/humid conditions.",
    action:"Clean and dry the area, apply a barrier balm or diaper-rash-style cream to reduce ongoing friction, and change out of damp clothing where possible. Cover raw areas to prevent further rubbing.",
    prevention:"Anti-chafe balm applied before starting at known friction points, well-fitted moisture-wicking clothing without rough seams, and lubricant reapplied on long efforts rather than applied once.",
    source:{title:"13 Ultramarathon Race Day Ailments & Injuries", host:"Relentless Forward Commotion", url:"https://relentlessforwardcommotion.com/ultramarathon-race-day-ailments-injuries/"}
  },
  'black-toenails':{
    severity:'low', title:'Black or Lost Toenails',
    symptoms:"Discoloration (dark red, purple, or black) under a toenail, sometimes with pain or pressure; occasionally the nail loosens and falls off entirely over following weeks.",
    body:"Repeated toe-to-shoe impact, especially on descents, causing bleeding under the nail (subungual hematoma). Undersized shoes or long toenails make it more likely.",
    action:"If painful from pressure buildup, this can be relieved by a medical professional draining the blood under the nail. Otherwise, leave it alone and let it grow out — it's not dangerous even if the nail eventually falls off.",
    prevention:"Shoes with real room in the toe box (a thumb's width beyond your longest toe), toenails trimmed short before long efforts, and downhill running form that reduces braking impact.",
    source:{title:"Most Common Running Injuries", host:"Marathon Handbook", url:"https://marathonhandbook.com/most-common-running-injuries/"}
  },
  'bruised-ball-of-foot':{
    severity:'low', title:'Bruised Ball of Foot (Stone Bruise)',
    symptoms:"Deep, bruise-like pain in the ball of the foot (sometimes the heel pad instead) — like there's a pebble stuck under your foot with every step. Can show up right after stepping on something hard, or build up gradually from repeated impact.",
    body:"Commonly called a 'stone bruise' — a deep contusion to the fat pad or bone at the ball of the foot, usually from impact with a rock, root, or hard ground, or from repeated pounding on hard surfaces over a long effort.",
    action:"Rest, ice, compression, and elevation. Avoid walking barefoot or in thin-soled shoes while it heals — cushioning matters here. It typically takes one to three weeks to resolve. If it's a specific pinpoint spot on the bone that keeps getting worse rather than better, treat it as a possible stress fracture instead.",
    prevention:"Well-cushioned shoes matched to the terrain, and picking your line on rocky or technical trail to avoid hard, direct impacts where you can.",
    source:{title:"What is Stone Bruise or Metatarsalgia and How to Treat it", host:"American Academy of Podiatric Sports Medicine", url:"http://www.aapsm.org/stone-bruise.html"}
  },
  'it-band':{
    severity:'low', title:"IT Band Syndrome",
    symptoms:"Sharp or aching pain on the outside of the knee, usually worsening with continued running, especially downhill.",
    body:"Irritation of the iliotibial band where it crosses the outside of the knee — strongly linked to weak hip/glute muscles rather than the band itself being 'tight.'",
    action:"Reduce mileage and downhill running in the short term. The evidence-backed fix is a glute-strengthening program (particularly hip abductors), not just stretching or foam rolling the IT band itself.",
    prevention:"An ongoing glute and hip-strength routine, and avoiding sudden jumps in downhill volume.",
    source:{title:"The Emerging Science of Road and Trail Running Injuries", host:"Outside / Trail Runner", url:"https://run.outsideonline.com/training/trail-running-injuries-science/"}
  },
  'plantar-fasciitis':{
    severity:'low', title:'Plantar Fasciitis',
    symptoms:"Pain at the bottom of the heel, classically worst with the first steps after rest (getting out of bed, standing after sitting), sometimes easing once warmed up.",
    body:"Repetitive microtrauma to the plantar fascia (the tissue connecting heel to toes) from rapid increases in mileage, elevation gain, or intensity, or from poorly fitting shoes.",
    action:"Because it can fade once warmed up, it's easy to run through — which prolongs it. Reduce load in the acute phase (first 2–6 weeks), and add calf and intrinsic foot strengthening. Persistent cases benefit from a physical therapist.",
    prevention:"Progress mileage and elevation gain gradually rather than in large jumps, and maintain calf/foot strength year-round.",
    source:{title:"Common Trail Running Injuries and How to Avoid Them", host:"CTS / Jason Koop", url:"https://trainright.com/trail-running-injuries-and-how-to-avoid-them/"}
  },
  'shin-splints':{
    severity:'low', title:'Shin Splints',
    symptoms:"Aching or sharp pain along the shin bone, usually during or after running, in a broad area rather than one pinpoint spot.",
    body:"Overuse of the muscles and tissue around the shin bone, most often from a rapid increase in volume, intensity, or running on hard/unfamiliar surfaces.",
    action:"Reduce mileage and impact in the short term, ice for symptom relief, and address underlying causes (footwear, surface, training load) rather than just resting and returning to the same jump in volume.",
    prevention:"Progress training load gradually, and avoid sudden surface changes (e.g., a big jump in road mileage if you're used to trail, or vice versa).",
    source:{title:"Most Common Running Injuries", host:"Marathon Handbook", url:"https://marathonhandbook.com/most-common-running-injuries/"}
  },
  achilles:{
    severity:'low', title:'Achilles Tendinitis',
    symptoms:"Pain, stiffness, or tenderness in the Achilles tendon (back of the ankle/lower calf), often worse in the morning or after sitting, and with uphill running.",
    body:"Overuse of the tendon from increased volume, hill work, or a sudden change in footwear (especially shoe drop). If this came from a sudden twist or roll rather than a gradual ache, it may be a sprain instead — rest, ice, and get it checked if you can't bear weight on it.",
    action:"Reduce hill volume and intensity while symptomatic. Eccentric calf-strengthening exercises (heel drops) are the evidence-backed rehab approach, progressing from double-leg to single-leg as tolerated.",
    prevention:"Build hill volume gradually, and maintain a consistent calf-strengthening routine rather than only reacting once pain starts.",
    source:{title:"Common Trail Running Injuries and How to Avoid Them", host:"CTS / Jason Koop", url:"https://trainright.com/trail-running-injuries-and-how-to-avoid-them/"}
  },
  'runners-knee':{
    severity:'low', title:"Runner's Knee (Patellofemoral Pain)",
    symptoms:"Dull, aching pain around or behind the kneecap, often worse going downhill, downstairs, or after sitting for a while with knees bent.",
    body:"Irritation where the kneecap tracks against the thigh bone, commonly linked to weak quads/hips or a sudden increase in training load.",
    action:"Reduce downhill and high-impact volume temporarily. Quad and hip strengthening is the primary evidence-backed fix, not just rest alone.",
    prevention:"Progressive strength training for quads and hips, and gradual increases in downhill-heavy training rather than sudden jumps.",
    source:{title:"6 Common Running Injuries (and What to Do About Them)", host:"UW Medicine", url:"https://rightasrain.uwmedicine.org/body/exercise/6-common-running-injuries"}
  },
  'stress-fracture':{
    severity:'mid', title:'Possible Stress Fracture',
    symptoms:"Localized, pinpoint bone pain that worsens with continued activity and doesn't ease with warming up — unlike most soft-tissue overuse injuries. May be tender to direct touch on the bone.",
    body:"Repeated bone loading beyond what the bone can adapt to, often from rapid mileage increases. Inadequate fueling for training load (relative energy deficiency) is a significant, often-overlooked risk factor.",
    action:"This genuinely needs professional evaluation and imaging, not just home management — running through a real stress fracture risks a full fracture. Stop and get it assessed rather than testing it with more running.",
    prevention:"Progressive mileage increases, and making sure you're eating enough to support your training load — chronic underfueling is a documented driver of bone stress injuries.",
    source:{title:"The Emerging Science of Road and Trail Running Injuries", host:"Outside / Trail Runner", url:"https://run.outsideonline.com/training/trail-running-injuries-science/"}
  },
  'side-stitch':{
    severity:'low', title:'Side Stitch',
    symptoms:"Sharp, cramping pain under the ribcage, usually on one side, brought on by running.",
    body:"Not fully settled in the research, but commonly linked to diaphragm irritation, running soon after eating, or shallow breathing patterns.",
    action:"Slow down, take deeper breaths, and try pressing into the area or bending forward slightly. It usually resolves within a few minutes without stopping entirely.",
    prevention:"Avoid large meals close to start time, and practice deeper diaphragmatic breathing during easy efforts.",
    source:{title:"Trail and Ultra Running Injuries and How to Heal Up!", host:"Run Infinite", url:"https://runinfinite.com/common-trail-and-ultra-running-injuries/"}
  },
  rhabdomyolysis:{
    severity:'high', title:'Possible Rhabdomyolysis',
    symptoms:"Muscle pain far beyond normal soreness, swelling, and weakness in the affected muscles — classically with dark, tea- or cola-colored urine. Can affect any large muscle group, including the back, shoulders, or thighs, not just legs. Symptoms often don't show up until 1–3 days after the effort that caused it, not right away.",
    body:"Rhabdomyolysis is serious muscle-fiber breakdown, most often triggered by unusually intense or unaccustomed effort (a much bigger jump in volume or intensity than your body is used to), heat, or dehydration. Muscle contents leaking into the bloodstream can overwhelm the kidneys — this is not the same thing as ordinary next-day soreness.",
    action:"If you have dark tea/cola-colored urine, are unable to move a limb, can't urinate for several hours, or have severe swelling alongside the pain — seek medical attention now, this needs a blood test to rule out. Don't wait to see if it passes.",
    prevention:"Progress intensity and volume gradually, especially after time off, and take heat and hydration seriously on hard efforts.",
    source:{title:"Signs and Symptoms of Rhabdomyolysis", host:"CDC", url:"https://www.cdc.gov/niosh/rhabdo/signs-symptoms/index.html"}
  },
  doms:{
    severity:'low', title:'Likely Normal Muscle Soreness',
    symptoms:"General soreness and tightness in a muscle you worked hard, usually worst 24–48 hours after, without significant swelling, weakness, or dark urine.",
    body:"Delayed Onset Muscle Soreness (DOMS) is the normal, expected result of muscle fibers adapting to a hard effort. Uncomfortable, but not dangerous — the muscles are rebuilding stronger.",
    action:"Light movement, hydration, and time. It typically peaks around 24–48 hours and fades within a few days. If it's getting worse rather than better, is drastically more severe than past soreness, or you notice dark urine or real swelling, that's no longer just DOMS — treat it as possible rhabdomyolysis instead.",
    source:{title:"Signs and Symptoms of Rhabdomyolysis", host:"CDC", url:"https://www.cdc.gov/niosh/rhabdo/signs-symptoms/index.html"}
  },
  hot_spot_warning:{
    severity:'mid', title:'Possible Early Warning Sign',
    symptoms:"A hot, burning, or aching feeling under the skin — not a surface rub, and no fluid bubble — often before any sharp or specific pain has developed.",
    body:"A hot or burning feeling can be the first sign of a developing overuse injury — a muscle strain, tendon irritation, or early bone stress — before it becomes clearly painful. Catching it at this stage, before it turns into a defined injury, is worth taking seriously rather than pushing through.",
    action:"Ease off that area now rather than continuing to load it. Rest, ice if it helps, and watch it closely over the next day. If it develops into sharp, specific, or worsening pain, come back through and describe what it's turned into.",
    source:{title:"Most Common Running Injuries", host:"Marathon Handbook", url:"https://marathonhandbook.com/most-common-running-injuries/"}
  },
  out_uncertain_pain:{
    severity:'mid', title:"Doesn't clearly match a common pattern",
    body:"Not every ache fits a textbook description, and that's okay — but pain that's new, unexplained, or doesn't match ordinary training soreness is worth getting a second opinion on rather than guessing.",
    action:"Rest the area and watch it for the next day or two. If it's getting worse rather than better, is severe, or you're genuinely unsure, get it looked at by a medical professional rather than continuing to train through it.",
    source:{title:"Exercise-Associated Collapse", host:"StatPearls / NCBI Bookshelf", url:"https://www.ncbi.nlm.nih.gov/books/NBK576425/"}
  },
  out_chest_muscular:{
    severity:'low', title:'Likely a muscular chest strain',
    symptoms:"Sharp, localized pain that gets worse when you press directly on the spot or move/twist your chest — often after a specific movement or a recent change in training.",
    body:"Chest wall muscle strain (including costochondritis, irritation where rib cartilage meets the breastbone) is the most common non-cardiac cause of chest pain during exercise, and it behaves differently from cardiac pain: it's reproducible by pressing on it or moving.",
    action:"Rest from activities that worsen it for a few days, ice the area, and avoid the movement that aggravates it. If you're ever unsure, or it doesn't match this pattern cleanly, get it checked rather than assuming — chest pain is worth being conservative about.",
    source:{title:"What To Know About Chest Pain After Exercise", host:"Cleveland Clinic", url:"https://health.clevelandclinic.org/chest-pain-after-exercise"}
  },
  out_chest_cardiac:{
    severity:'high', title:'This needs medical evaluation',
    symptoms:"Pressure, squeezing, or tightness in the chest that doesn't change when you press on it or move — especially if it worsens the harder you push, or comes with shortness of breath, dizziness, nausea, or pain spreading to your arm, back, jaw, or neck.",
    body:"This pattern — pressure rather than sharp pain, not reproduced by touch or movement, worsening with continued exertion — is what sports cardiologists flag as needing real evaluation. It doesn't mean it's definitely your heart, but this isn't a pattern to self-manage or push through.",
    action:"Stop exercising now. If symptoms are severe, or include shortness of breath, dizziness, or pain spreading to your arm/jaw/back, call emergency services — don't wait to see if it passes. Otherwise, stop and get evaluated by a medical professional promptly.",
    source:{title:"What To Know About Chest Pain After Exercise", host:"Cleveland Clinic", url:"https://health.clevelandclinic.org/chest-pain-after-exercise"}
  }
};

const NODES = {
  loc_root:{
    text:"Where do you feel it?",
    opts:[
      {label:"Head or face", next:'q_generic'},
      {label:"Neck", next:'q_generic'},
      {label:"Chest", next:'q_chest'},
      {label:"Shoulder or arm", next:'q_generic'},
      {label:"Back", next:'q_generic'},
      {label:"Stomach or abdomen", next:'q_generic'},
      {label:"Hip or groin", next:'q_generic'},
      {label:"Thigh", next:'q_generic'},
      {label:"Knee", next:'p_knee'},
      {label:"Shin (front of lower leg)", next:'p_shin'},
      {label:"Calf (back of lower leg)", next:'q_generic'},
      {label:"Ankle", next:'q_ankle'},
      {label:"Foot", next:'p_foot'},
      {label:"More than one place / all over", next:'q_generic'}
    ]
  },
  q_generic:{
    text:"What does it feel like?",
    opts:[
      {label:"Hot, burning, tingling, or rubbing", next:'q_friction'},
      {label:"Deep, severe pain — way more than normal soreness — with swelling, weakness, or dark urine", next:'rhabdomyolysis'},
      {label:"Just sore, tired, or achy — the normal kind after a hard effort", next:'doms'},
      {label:"None of these match, or I'm not sure", next:'out_uncertain_pain'}
    ]
  },
  q_friction:{
    text:"Is there a fluid-filled bubble under the skin? Just red, raw skin with no bubble? Or is it a burning ache under the skin, not on the surface?",
    opts:[
      {label:"A fluid-filled bubble", next:'blisters'},
      {label:"Red, raw skin, no bubble", next:'chafing'},
      {label:"A burning ache under the skin, no bubble, no redness", next:'hot_spot_warning'}
    ]
  },
  q_chest:{
    text:"Is it a sharp pain in one spot that gets worse when you press on it or move/twist your chest? Or more like pressure, squeezing, or tightness that doesn't change when you press or move — especially if it's getting worse the longer you push, or comes with shortness of breath, dizziness, or nausea?",
    opts:[
      {label:"Sharp, one spot, worse with pressing or moving", next:'out_chest_muscular'},
      {label:"Pressure or squeezing, unaffected by pressing or moving, or with shortness of breath/dizziness/nausea", next:'out_chest_cardiac'}
    ]
  },
  q_ankle:{
    text:"Is it right at the back of your ankle, in the tendon — worse in the morning or on hills? Or did you twist or roll it?",
    opts:[
      {label:"Back of ankle, in the tendon, worse mornings/hills", next:'achilles'},
      {label:"Twisted or rolled it", next:'out_uncertain_pain'},
      {label:"Neither of those", next:'q_generic'}
    ]
  },
  p_foot:{
    text:"Is it on the bottom of your foot, or the top/front?",
    opts:[
      {label:"Bottom of the foot", next:'p_foot_bottom'},
      {label:"Top of the foot, or the toes", next:'p_foot_top'}
    ]
  },
  p_foot_bottom:{
    text:"Where on the bottom?",
    opts:[
      {label:"Heel", next:'p_foot_heel'},
      {label:"Arch", next:'plantar-fasciitis'},
      {label:"Ball of the foot (just behind the toes)", next:'p_foot_ball'},
      {label:"All over the bottom, or not sure", next:'q_generic'}
    ]
  },
  p_foot_heel:{
    text:"Is it a deep ache, worst with your first few steps after resting? Or more like a bruise, especially after hard impacts (rocks, roots, hard ground)?",
    opts:[
      {label:"Ache, worst with first steps after resting", next:'plantar-fasciitis'},
      {label:"Bruise-like, especially after hard impacts", next:'bruised-ball-of-foot'},
      {label:"Neither of those", next:'q_generic'}
    ]
  },
  p_foot_ball:{
    text:"Does it feel like a burning or rubbing spot, maybe a fluid-filled bubble? Or a deep, bruise-like ache — like you're stepping on a pebble with every step?",
    opts:[
      {label:"Burning, rubbing, or a fluid-filled bubble", next:'blisters'},
      {label:"Deep, bruise-like ache — like a pebble underfoot", next:'bruised-ball-of-foot'},
      {label:"Neither of those", next:'q_generic'}
    ]
  },
  p_foot_top:{
    text:"Is it your toes, or the top of your foot?",
    opts:[
      {label:"Toes", next:'p_foot_toes'},
      {label:"Top of the foot", next:'q_generic'}
    ]
  },
  p_foot_toes:{
    text:"Does it feel like a burning or rubbing spot, maybe a fluid-filled bubble? Or discoloration/pressure under a toenail?",
    opts:[
      {label:"Burning, rubbing, or a fluid-filled bubble", next:'blisters'},
      {label:"Dark or discolored area under a toenail", next:'black-toenails'},
      {label:"Neither of those", next:'q_generic'}
    ]
  },
  p_shin:{
    text:"Is it a broad ache along the shin bone? Or a specific, pinpoint spot that's getting worse and doesn't ease up as you warm up?",
    opts:[
      {label:"Broad ache along the shin", next:'shin-splints'},
      {label:"Pinpoint spot, worsening, doesn't warm away", next:'stress-fracture'},
      {label:"Neither of those", next:'q_generic'}
    ]
  },
  p_knee:{
    text:"Is it more on the outside of your knee, especially worse downhill? Or more around/behind your kneecap, worse downstairs or after sitting?",
    opts:[
      {label:"Outside of the knee, worse downhill", next:'it-band'},
      {label:"Around/behind the kneecap", next:'runners-knee'},
      {label:"Neither of those", next:'q_generic'}
    ]
  },
  q1:{
    text:"Is this happening right now, while you're still moving — or did it start after you stopped or finished?",
    opts:[
      {label:"It's happening now, mid-effort", next:'q2'},
      {label:"It started after I stopped or finished", next:'q_eac'}
    ]
  },
  q2:{
    text:"Are you (or they) thinking clearly — able to say your name, where you are, what's going on? Is there confusion, slurred speech, or acting strangely? And is there any chest pressure, squeezing, or tightness, even if it seems mild?",
    opts:[
      {label:"Confusion, slurred speech, or acting strangely", next:'out_emergency'},
      {label:"Chest pressure, squeezing, or tightness", next:'out_chest_cardiac'},
      {label:"Thinking clearly, no chest symptoms, just feel bad", next:'q3'}
    ]
  },
  q3:{
    text:"Do you feel hot — flushed, overheated, like you're burning up inside — maybe with heavy sweating? (This can happen during hard effort even when it's not actually that hot outside.)",
    opts:[
      {label:"Yes — I feel hot/flushed, maybe sweating heavily, but thinking clearly", next:'out_heat_exhaustion'},
      {label:"No, that's not really it", next:'q4'}
    ]
  },
  q4:{
    text:"Have you been drinking mostly plain water — more than usual — over several hours, and do you feel bloated, puffy, or notice swelling in your hands or feet?",
    opts:[
      {label:"Yes, that matches", next:'out_hyponatremia'},
      {label:"No, that doesn't match", next:'q5'}
    ]
  },
  q5:{
    text:"Are you shaky, and does this feel connected to not having fueled in a while?",
    opts:[
      {label:"Yes, and I'm behind on fueling", next:'out_hypoglycemia'},
      {label:"No clear connection to fueling", next:'out_uncertain'}
    ]
  },
  q_eac:{
    text:"Now that you've stopped, are you (or they) alert and able to answer normally? Is there any chest pressure, squeezing, or tightness? And does lying down with legs raised start to help within a few minutes?",
    opts:[
      {label:"Chest pressure, squeezing, or tightness", next:'out_chest_cardiac'},
      {label:"Yes — alert, no chest symptoms, and elevating legs helps", next:'out_eac'},
      {label:"No improvement, or not fully alert", next:'out_emergency'}
    ]
  },
  c1:{
    text:"Is this localized to specific muscles (calves, hamstrings, quads), with everything else feeling normal — or is it widespread, or alongside confusion, real nausea, or swelling?",
    opts:[
      {label:"Localized muscle cramping only", next:'out_eamc'},
      {label:"Widespread, or with other symptoms too", next:'c_redirect'}
    ]
  },
  c_redirect:{
    text:"That combination is bigger than simple cramping — it overlaps with heat illness and hyponatremia, which need a proper look rather than being treated as ordinary cramps. Pick whichever matches best:",
    opts:[
      {label:"Also feeling faint, nauseous, or confused", next:'q1'},
      {label:"Mainly severe, widespread muscle pain or swelling", next:'q_generic'}
    ]
  }
};

const DECISION_TREES = [
  { id:'location', title:"Something hurts, or feels off", blurb:"Point to where it is — you don't need to know the name of the injury to get here.", root:'loc_root' },
  { id:'collapse', title:"Feeling faint, dizzy, nauseous, or like you might collapse", blurb:"The most important cluster to get right — several very different causes look similar at first, and the wrong response can make some of them worse.", root:'q1' },
  { id:'cramping', title:"Muscle cramping", blurb:"Usually simple, but worth a quick check to make sure it isn't part of something bigger.", root:'c1' }
];

// Same shared OUTCOMES data, reachable directly by name for anyone who
// already knows what it's called and just wants to jump straight there.
const DIRECT_INDEX = [
  'blisters','chafing','black-toenails','bruised-ball-of-foot','it-band','plantar-fasciitis',
  'shin-splints','achilles','runners-knee','stress-fracture','side-stitch',
  'rhabdomyolysis','doms','hot_spot_warning'
];


DECISION_TREES.forEach(t => { t.category = 'physical'; });

// Ids defined in this file (used by contribute.html to link each item to its home file).
const PHYSICAL_IDS = new Set([...Object.keys(OUTCOMES), ...Object.keys(NODES)]);
