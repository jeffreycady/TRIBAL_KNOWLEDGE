/* Mental & Psychological content.
   Every outcome cites a source. Keep ids stable when editing.
   To suggest a change, open contribute.html. */

Object.assign(OUTCOMES, {
  out_crisis:{
    severity:'high', band:'Get support now', title:"Please reach out to someone now",
    body:"Thinking about hurting yourself, or not wanting to be alive, is a reason to get support right away. You don't have to be in immediate danger to call or text.",
    action:"Call or text 988 (US). If you're in immediate danger, call 911. Outside the US, use your local emergency number. If you can, tell someone near you what's going on and ask them to stay with you for now.",
    source:{title:"988 Suicide & Crisis Lifeline fact sheet", host:"SAMHSA", url:"https://www.samhsa.gov/sites/default/files/988-factsheet.pdf"}
  },
  out_pre_reappraise:{
    severity:'low', title:"Nerves that can work for you",
    body:"Pre-race nerves are normal arousal, and they can help performance. In one study of 91 competitive swimmers, athletes who expected to reach their goals read their anxiety as more helpful than athletes with negative or uncertain expectations. It's a single study, so treat this as a reframe to try, not a guarantee.",
    action:"Name it plainly, like 'this is my body getting ready.' Pick one process goal for the first hour, such as fueling on schedule or a cue word. Use the routine you practiced in training.",
    source:{title:"Competitive anxiety can be facilitative for performance", host:"Coach Science (SDSU)", url:"https://coachsci.sdsu.edu/csa/vol93/jones.htm"}
  },
  out_pre_persistent:{
    severity:'mid', band:'Get professional support', title:"Pre-race dread is affecting daily life",
    body:"Nerves that start to affect sleep, eating, training, or your willingness to race are more than normal pre-race arousal. Someone trained in this area can help you sort out what's going on.",
    action:"Talk with a therapist or sport psychologist who works with athletes, or ask your doctor for a referral. If it turns into thoughts of hurting yourself, call or text 988 now.",
    source:{title:"988 Suicide & Crisis Lifeline fact sheet", host:"SAMHSA", url:"https://www.samhsa.gov/sites/default/files/988-factsheet.pdf"}
  },
  out_mental_uncertain:{
    severity:'mid', band:'Talk to someone', title:"Not a clear match",
    body:"Feeling stuck mentally doesn't always fit a pattern, and it's okay not to know what it is yet.",
    action:"Talk with a doctor or a sport psychologist about what you're noticing. If things feel unsafe, or you're thinking about hurting yourself, call or text 988 now.",
    source:{title:"988 Suicide & Crisis Lifeline fact sheet", host:"SAMHSA", url:"https://www.samhsa.gov/sites/default/files/988-factsheet.pdf"}
  },
  out_mid_focus:{
    severity:'mid', title:"Shift your focus to something you can control",
    body:"Brick and colleagues (2016) reviewed how attention shapes effort and pacing in endurance events. Focusing on a self-regulation cue, like technique, cadence, or relaxing, can help pacing without raising perceived effort. A heavy focus on bodily sensations can make effort feel harder. Distraction can lower perceived effort, but in a self-paced race it can lead to a slower pace than you'd choose.",
    action:"Pick one cue for the next 10 minutes, such as a cadence count, relaxed shoulders, or a breathing rhythm. Fuel and drink on schedule. Reassess after 10 minutes. If it's getting worse rather than easier, check the physical tree before you push on.",
    source:{title:"Thinking and Action: A Cognitive Perspective on Self-Regulation during Endurance Performance", host:"Frontiers in Physiology (2016)", url:"https://www.frontiersin.org/articles/10.3389/fphys.2016.00159/full"}
  },
  out_mid_check_basics:{
    severity:'mid', title:"The urge to quit may be a pacing, heat, or fueling problem",
    body:"A study of 23,996 runners in the Two Oceans ultramarathon (SAFER XXI, Sewry and colleagues, 2022) linked not finishing to a slower race pace relative to training pace, higher heat on race day, and less training and racing experience. Some of these, like pace and how you manage heat, are things you can change in the moment.",
    action:"Check your pace against your plan, your fueling and fluids over the last hour, and how hot you're getting. Adjust those first. If the symptoms are physical, use the physical tree instead of pushing on.",
    source:{title:"Risk factors for not finishing an ultramarathon: 4-year study in 23,996 race starters (SAFER XXI)", host:"Journal of Sports Medicine and Physical Fitness (2022), University of Pretoria repository", url:"https://repository.up.ac.za/handle/2263/91710"}
  },
  out_dnf_pause:{
    severity:'mid', title:"Pause before you decide to quit",
    body:"Research on how to decide whether to quit mid-race is thin. The SAFER XXI study describes who doesn't finish, not what to do in the moment, so the advice here is a practical rule rather than a proven one.",
    action:"If it's safe to stop moving, take 5 to 10 minutes. Eat, drink, and check your body. Ask: is this a safety problem, or a discomfort problem? If it's a safety problem, stop and get help. If not, pick the next checkpoint and reach it before you decide again.",
    source:{title:"Risk factors for not finishing an ultramarathon: 4-year study in 23,996 race starters (SAFER XXI)", host:"Journal of Sports Medicine and Physical Fitness (2022), University of Pretoria repository", url:"https://repository.up.ac.za/handle/2263/91710"}
  },
  out_motivation_autonomy:{
    severity:'low', title:"Motivation dip: reconnect with why you train",
    body:"Self-determination theory holds that motivation tends to last when it feels self-chosen and when it supports three needs: feeling in control, feeling capable, and feeling connected to others. A slump often means one of those has gone missing, such as training that feels imposed or no one to share it with.",
    action:"This week, choose one session you design yourself with a goal you control. Train with someone, or tell someone your plan. If the dip lasts more than about two weeks, or affects sleep or mood, use the next path on this page.",
    source:{title:"Self-determination theory", host:"Newcastle University Theory Library", url:"https://open.ncl.ac.uk/theories/20/self-determination-theory/"}
  },
  out_persistent_low_mood:{
    severity:'mid', band:'Get professional support', title:"Low mood that lasts needs a clinician",
    body:"Two weeks or more of low mood, losing interest in most things, or feeling hopeless is more than a training slump, and it deserves a proper evaluation. Overtraining, under-fueling, illness, and mood problems can overlap, so a doctor can check for more than one cause.",
    action:"Book an appointment with your doctor or a mental health professional and say how long it's been going on. If you have any thoughts of hurting yourself, call or text 988 now.",
    source:{title:"988 Suicide & Crisis Lifeline fact sheet", host:"SAMHSA", url:"https://www.samhsa.gov/sites/default/files/988-factsheet.pdf"}
  },
  out_overtraining:{
    severity:'mid', title:"Possible overtraining or under-recovery",
    body:"Heavy legs, poor performance, and not recovering can come from training load outpacing recovery. The 2013 ECSS and ACSM consensus describes a spectrum: short performance drops from heavy training often come back with rest, while longer-lasting problems need evaluation. The same consensus says to rule out other causes first, such as low energy intake, illness, and iron or other deficiencies, because they can look similar.",
    action:"Cut hard sessions and reduce volume for a real rest period, and prioritize sleep and food. If you're not steadily improving with rest, see a sports medicine doctor and bring a log of your training, sleep, and mood. If you suspect under-fueling, the physical tree covers stress-fracture warning signs.",
    source:{title:"Prevention, diagnosis, and treatment of the overtraining syndrome: joint consensus statement of ECSS and ACSM", host:"Medicine & Science in Sports & Exercise (2013) / PubMed", url:"https://pubmed.ncbi.nlm.nih.gov/23247672/"}
  },
  out_self_talk:{
    severity:'low', title:"Change the words, change the effort",
    body:"A 2011 meta-analysis of 32 studies found self-talk improved sport performance on average. Instructional self-talk, short cues about what to do, helped most on fine-motor skills, and training in self-talk beat no training.",
    action:"Swap 'I can't' for a short, specific cue like 'easy legs,' 'quick feet,' or 'next aid station.' Practice it in training so it comes easily on race day.",
    source:{title:"Self-Talk and Sports Performance: A Meta-Analysis", host:"University of Thessaly repository (2011 meta-analysis)", url:"https://ir.lib.uth.gr/xmlui/handle/11615/28461"}
  }
});

Object.assign(NODES, {
  mp_root:{
    text:"Which fits better right now?",
    opts:[
      {label:"Butterflies and jittery energy. I can still eat, sleep, and train", next:'out_pre_reappraise'},
      {label:"Dread that's affecting my sleep, eating, training, or my willingness to race", next:'out_pre_persistent'},
      {label:"Something else, or not sure", next:'out_mental_uncertain'}
    ]
  },
  mm_safety:{
    text:"First: are you having thoughts of hurting yourself, or of not wanting to be alive?",
    opts:[
      {label:"Yes, or I'm not sure", next:'out_crisis'},
      {label:"No", next:'mm_physical'}
    ]
  },
  mm_physical:{
    text:"Is there confusion, slurred speech, or chest pressure or tightness right now?",
    opts:[
      {label:"Confusion, slurred speech, or acting strangely", next:'out_emergency'},
      {label:"Chest pressure, squeezing, or tightness", next:'out_chest_cardiac'},
      {label:"Neither", next:'mm_driver'}
    ]
  },
  mm_driver:{
    text:"What's driving the urge to quit most?",
    opts:[
      {label:"Low mood, discomfort, or dark thoughts, but I could keep moving", next:'out_mid_focus'},
      {label:"Pace, heat, or fueling feels off", next:'out_mid_check_basics'},
      {label:"I'm not sure, I just want out", next:'out_dnf_pause'}
    ]
  },
  mv_root:{
    text:"How long has this been going on?",
    opts:[
      {label:"A week or so, around a hard block or a rough patch", next:'out_motivation_autonomy'},
      {label:"More than two weeks, or it's affecting my sleep, mood, or performance", next:'mv_bigger'}
    ]
  },
  mv_bigger:{
    text:"What's the main thing you notice?",
    opts:[
      {label:"Flat mood, losing interest in most things, or feeling hopeless", next:'out_persistent_low_mood'},
      {label:"Heavy legs, poor performance, and not recovering", next:'out_overtraining'},
      {label:"Neither, or not sure", next:'out_mental_uncertain'}
    ]
  },
  mt_root:{
    text:"Which sounds closer?",
    opts:[
      {label:"I tell myself I'm not good enough or that I'll fail", next:'out_self_talk'},
      {label:"I don't have a cue to focus on when things get hard", next:'out_self_talk'}
    ]
  }
});

DECISION_TREES.push(
  { id:'mental-pre', category:'mental', title:"Nerves before a race or big effort", blurb:"Pre-race nerves are normal. This helps you tell the useful kind from the kind that needs support.", root:'mp_root' },
  { id:'mental-mid', category:'mental', title:"Want to quit or feel low mid-race", blurb:"Start with safety. Then work out whether this is a discomfort problem, a pacing or fueling problem, or something that needs more help.", root:'mm_safety' },
  { id:'mental-motivation', category:'mental', title:"Lost motivation or dreading training", blurb:"A slump is common. Low mood that lasts, or heavy fatigue that won't lift, needs a different response.", root:'mv_root' },
  { id:'mental-selftalk', category:'mental', title:"Harsh self-talk or no focus cue", blurb:"What you tell yourself during a hard effort changes how hard it feels.", root:'mt_root' }
);

const MENTAL_DIRECT = ['out_pre_reappraise','out_mid_focus','out_dnf_pause','out_self_talk','out_overtraining','out_persistent_low_mood','out_crisis'];

const MENTAL_IDS = new Set(['mm_driver', 'mm_physical', 'mm_safety', 'mp_root', 'mt_root', 'mv_bigger', 'mv_root', 'out_crisis', 'out_dnf_pause', 'out_mental_uncertain', 'out_mid_check_basics', 'out_mid_focus', 'out_motivation_autonomy', 'out_overtraining', 'out_persistent_low_mood', 'out_pre_persistent', 'out_pre_reappraise', 'out_self_talk']);
