/* Training content.
   Every outcome cites a source. Keep ids stable when editing.
   To suggest a change, open contribute.html. */

const TRAIN_IDS = new Set(['out_plateau_vary','out_taper','out_taper_feelings','out_sleep','out_reds_suspected','out_reds_urgent','tp_root','tt_root','tr_root']);

Object.assign(OUTCOMES, {
  out_plateau_vary:{
    severity:'low', title:"Plateau: change one thing at a time",
    body:"Improvement can't keep the same rate forever. The ACSM position stand on resistance-training progression says the way past a plateau is to vary training variables systematically, rather than just adding more. It also says volume increases should be moderate, because large jumps raise the risk of overtraining. That stand covers resistance training, so applying it to running is an extrapolation.",
    action:"Change one thing for three to four weeks: how often you train, one harder session a week, or the type of session. Keep volume increases about the size you can recover from. Track one simple measure, such as pace at a set effort, to see whether it's working.",
    source:{title:"ACSM Position Stand: Progression models in resistance training for healthy adults", host:"American College of Sports Medicine (2009)", url:"https://sfu.ca/~ryand/kin343/ACSMresistance.pdf"}
  },
  out_taper:{
    prerace:true,
    severity:'low', title:"Taper: cut volume, not the whole plan",
    body:"A meta-analysis of tapering in competitive athletes (Bosquet and colleagues, 2007) found that a taper of about two weeks gave the best gains. The largest benefit came from cutting training volume substantially, by roughly 41 to 60%, with the cut getting steeper toward the end. Tapers that kept intensity or frequency unchanged gave smaller benefits.",
    action:"Start reducing training volume about two weeks before the race, with the biggest cut in the final week. Don't add new hard sessions during the taper.",
    source:{title:"Effects of tapering on performance: a meta-analysis", host:"Medicine & Science in Sports & Exercise (2007) / PubMed", url:"https://pubmed.ncbi.nlm.nih.gov/17762369/"}
  },
  out_sleep:{
    severity:'low', title:"Sleep is part of training",
    body:"A review in Frontiers in Physiology (Taylor and colleagues, 2016) notes that inadequate sleep has been linked to reduced physical performance, and that sleep is widely considered important for reducing illness and injury. The article doesn't establish how large the performance effect is, so treat sleep as a priority rather than a precise lever. It's an opinion piece, so weigh it accordingly.",
    action:"Keep a regular bedtime and wake time for the next two weeks. Protect sleep before hard sessions. If sleep stays poor for more than two weeks, or you notice low mood, see a clinician. The Mental & Psychological section covers that path.",
    source:{title:"Sleep Medication and Athletic Performance: The Evidence for Practitioners and Future Research Directions", host:"Frontiers in Physiology (2016)", url:"https://www.frontiersin.org/journals/physiology/articles/10.3389/fphys.2016.00083/full"}
  }
});

Object.assign(OUTCOMES, {
  out_taper_feelings:{
    severity:'low', band:'Common in the last weeks', title:"Taper tantrums: restless, grumpy, or feeling a bit off",
    body:"Many athletes get irritable, restless, or anxious in the last weeks before a race, and some feel flat or like they're coming down with something. The research on this is limited. A 2023 scoping review of tapering psychology (Stone and colleagues) found that taper is studied as a stressor and that mood and fatigue are key themes, but it concluded the evidence base is small. Why it happens isn't established.",
    action:"Keep the routine: regular sleep, normal meals, and the short easy runs in your plan. Don't add extra workouts to burn off restlessness. If you have a fever, a productive cough, chest tightness, or symptoms that last more than a week, see a clinician before race day, and don't do hard training while you have a fever.",
    source:{title:"The Psychology of Athletic Tapering in Sport: A Scoping Review", host:"Sports Medicine (2023)", url:"https://doi.org/10.1007/s40279-022-01798-6"}
  },
  out_reds_suspected:{
    severity:'mid', band:'Talk to a clinician soon', title:"Possible REDs: not eating enough for the training you do",
    body:"REDs (Relative Energy Deficiency in Sport) happens when energy intake doesn't cover what training uses. The IOC consensus (Mountjoy and colleagues, 2018) links it to effects on metabolism, menstrual function, bone health, immunity, the gut, and mental health. Warning signs include missed periods, bone or stress-injury pain, frequent illness, and unexplained weight loss. Men are affected too.",
    action:"Don't add training volume until someone has assessed you. Eat more, especially around hard sessions. See a sports doctor or sports dietitian soon, and tell them what you've described. If you're restricting food or feel stuck in that pattern, a clinician can help, and the Mental & Psychological section covers that path. If you have thoughts of harming yourself, call or text 988 (US) now.",
    source:{title:"IOC consensus statement on relative energy deficiency in sport (RED-S): 2018 update", host:"British Journal of Sports Medicine (2018)", url:"https://bjsm.bmj.com/content/52/11/687"}
  },
  out_reds_urgent:{
    severity:'high', band:'Seek medical care now', title:"Fainting, chest pain, or a very slow pulse with low energy",
    body:"Severe low energy availability can cause dangerously low heart rate and blood pressure, dizziness on standing, and electrolyte imbalance. The IOC consensus says severe cases may need inpatient care.",
    action:"Stop training. Don't drive yourself. If you've fainted, have chest pain, are confused, or are struggling to breathe, call emergency services now. Otherwise go to the nearest emergency department today and say you think you're not eating enough for your training.",
    source:{title:"IOC consensus statement on relative energy deficiency in sport (RED-S): 2018 update", host:"British Journal of Sports Medicine (2018)", url:"https://bjsm.bmj.com/content/52/11/687"}
  }
});

Object.assign(NODES, {
  tp_root:{
    text:"How long have you been stuck?",
    opts:[
      {label:"A few weeks, same workouts, same results", next:'out_plateau_vary'},
      {label:"Months, and I'm also more tired than usual", next:'out_overtraining'}
    ]
  },
  tt_root:{
    text:"Which applies?",
    opts:[
      {label:"I'm in the last weeks before a race and not sure how much to cut", next:'out_taper'},
      {label:"I'm close to a race and my legs feel flat or heavy", next:'out_overtraining'}
    ]
  },
  tr_root:{
    text:"What's wearing you down most?",
    opts:[
      {label:"Poor sleep for a couple of weeks", next:'out_sleep'},
      {label:"Heavy legs and performance dropping off", next:'out_overtraining'}
    ]
  }
});

// Taper-period feelings branches
NODES.tt_root.opts.push({label:"Irritable, restless, or anxious about the race", next:'out_taper_feelings'});
NODES.tt_root.opts.push({label:"Feeling flat, or like I'm coming down with a cold", next:'out_taper_feelings'});

// REDs branches on the training trees
NODES.tr_root.opts.unshift({label:"Fainting, dizziness when standing, chest pain, or a very slow pulse", next:'out_reds_urgent'});
NODES.tr_root.opts.push({label:"Missed periods, bone or stress-injury pain, frequent illness, or unexplained weight loss", next:'out_reds_suspected'});
NODES.tp_root.opts.push({label:"Months of tiredness with missed periods, bone pain, or frequent illness", next:'out_reds_suspected'});

DECISION_TREES.push(
  { id:'training-plateau', category:'training', title:"Stuck, not improving", blurb:"A plateau usually means the training needs a change, not more of the same.", root:'tp_root' },
  { id:'training-taper', category:'training', title:"Race coming up: tapering", blurb:"How much to cut in the final weeks is one of the most useful decisions you'll make.", root:'tt_root' },
  { id:'training-recovery', category:'training', title:"Run-down, tired, or sleeping badly", blurb:"Tiredness is information. Work out whether it's sleep or training load.", root:'tr_root' }
);

const TRAIN_DIRECT = ['out_taper','out_taper_feelings','out_plateau_vary','out_sleep','out_reds_suspected','out_reds_urgent'];
