/**
 * DAYS 61-80: CONFIDENCE BUILDING PHASE
 * Focus: Complex sentences, Fluency practice, Advanced conversations
 */

const generateLessons = (lessons) => lessons.map(lesson => ({
    title: lesson.title,
    type: lesson.type || "lesson",
    content: [{
        heading: lesson.topic,
        headingHindi: lesson.topicHindi,
        text: lesson.explanation,
        textHindi: lesson.explanationHindi,
        example: lesson.examples,
        audio: true
    }],
    practice: lesson.practice || []
}));

export const days61to80 = generateLessons([
    {
        title: "Day 61: Present Perfect Tense - I have done",
        topic: "Experience & Recent Actions",
        topicHindi: "अनुभव और हाल के काम",
        explanation: "I have + Past Participle. For life experiences and recent actions.",
        explanationHindi: "जीवन के अनुभव और हाल में किए गए काम के लिए",
        examples: "I have been to Delhi. (मैं दिल्ली गई हूँ - कभी न कभी)\nI have finished my work. (मैंने अपना काम पूरा कर लिया है - अभी)"
    },
    {
        title: "Day 62: Present Perfect vs Past Simple",
        topic: "Understanding the Difference",
        topicHindi: "फ़र्क समझें",
        explanation: "Have done = anytime in life. Did = specific time in past.",
        explanationHindi: "Have done = ज़िंदगी में कभी। Did = भूतकाल में खास समय पर",
        examples: "I have eaten pizza. (मैंने ज़िंदगी में pizza खाया है)\nI ate pizza yesterday. (मैंने कल pizza खाया)"
    },
    {
        title: "Day 63: Passive Voice Basics",
        topic: "Food is cooked by me",
        topicHindi: "निष्क्रिय वाक्य",
        explanation: "Subject + is/are/was/were + Past Participle",
        explanationHindi: "जब action करने वाला मुख्य नहीं है",
        examples: "Food is cooked by me. (खाना मेरे द्वारा बनाया जाता है)\nThe door was opened. (दरवाज़ा खोला गया)"
    },
    {
        title: "Day 64: Reported Speech - He said that...",
        topic: "Telling What Others Said",
        topicHindi: "किसी की बात दोहराना",
        explanation: "Direct: He said, 'I am happy.' Indirect: He said that he was happy.",
        explanationHindi: "Direct speech को Indirect में बदलना",
        examples: "She said, 'I am tired.' → She said that she was tired."
    },
    {
        title: "Day 65: Conditionals - If... then...",
        topic: "If it rains, I will stay home",
        topicHindi: "शर्त वाले वाक्य",
        explanation: "If + present, will + verb. For future possibilities.",
        explanationHindi: "अगर... तो... भविष्य की संभावनाओं के लिए",
        examples: "If it rains, I will stay home. (अगर बारिश हुई, तो मैं घर रहूँगी)\nIf you study, you will pass. (अगर पढ़ोगे, तो pass हो जाओगे)"
    },
    {
        title: "Day 66: Email Writing Basics",
        topic: "Formal & Informal Emails",
        topicHindi: "Email लिखना",
        explanation: "Subject, Greeting, Body, Closing. Dear Sir/Madam vs Hi/Hello.",
        explanationHindi: "विषय, अभिवादन, मुख्य बात, समापन",
        examples: "Dear Sir/Madam, → Formal\nHi Arnesh, → Informal"
    },
    {
        title: "Day 67: Job Applications - Basic English",
        topic: "Resume & Cover Letter Basics",
        topicHindi: "नौकरी के लिए आवेदन",
        explanation: "I am writing to apply for... I have experience in...",
        explanationHindi: "मैं... के लिए आवेदन कर रही हूँ। मुझे... में अनुभव है",
        examples: "I am writing to apply for the position. (मैं इस पद के लिए आवेदन कर रही हूँ)"
    },
    {
        title: "Day 68: Numbers & Money - Advanced",
        topic: "Lakhs, Thousands, Discounts",
        topicHindi: "बड़ी संख्याएँ और छूट",
        explanation: "10,000 = Ten thousand. 1,00,000 = One lakh. 20% off = 20 percent discount.",
        explanationHindi: "बड़ी संख्याएँ और discount कैसे कहें",
        examples: "It costs fifty thousand rupees. (इसकी कीमत 50,000 रुपये है)\nThere's 20% off. (20% की छूट है)"
    },
    {
        title: "Day 69: Measurements - Kilo, Liter, Meter",
        topic: "Shopping & Cooking Measurements",
        topicHindi: "माप और तौल",
        explanation: "One kilo, Half liter, Two meters, A dozen.",
        explanationHindi: "Kilo, Liter, Meter, Dozen कैसे use करें",
        examples: "Give me one kilo rice. (मुझे एक किलो चावल दीजिए)\nI need half liter milk. (मुझे आधा लीटर दूध चाहिए)"
    },
    {
        title: "Day 70: Review Weeks 11-12",
        topic: "Mid-Phase Review",
        topicHindi: "समीक्षा",
        explanation: "Review Days 61-69",
        explanationHindi: "दिन 61-69 की समीक्षा",
        examples: ""
    },
    {
        title: "Day 71: Understanding News Headlines",
        topic: "Reading Newspaper Basics",
        topicHindi: "समाचार समझना",
        explanation: "Understanding short forms and news language.",
        explanationHindi: "समाचार पत्र की भाषा समझना",
        examples: "PM to visit Delhi = Prime Minister will visit Delhi"
    },
    {
        title: "Day 72: Mobile & Internet Vocabulary",
        topic: "Digital Life",
        topicHindi: "मोबाइल और इंटरनेट",
        explanation: "Wi-Fi, Download, Upload, Message, Call, App.",
        explanationHindi: "डिजिटल दुनिया के ज़रूरी शब्द",
        examples: "I need Wi-Fi. (मुझे Wi-Fi चाहिए)\nDownload this app. (यह app download करो)"
    },
    {
        title: "Day 73: YouTube & Social Media",
        topic: "Understanding Online Content",
        topicHindi: "YouTube और Social Media",
        explanation: "Subscribe, Like, Share, Comment, Follow.",
        explanationHindi: "Online content के लिए ज़रूरी शब्द",
        examples: "Please subscribe. (Subscribe करें)\nLike and share. (Like और share करें)"
    },
    {
        title: "Day 74: Understanding Instructions",
        topic: "Following Directions",
        topicHindi: "निर्देश समझना",
        explanation: "First, Then, Next, Finally, Before, After.",
        explanationHindi: "कदम-दर-कदम निर्देश",
        examples: "First, wash hands. Then, cut vegetables. (पहले हाथ धोएँ। फिर सब्ज़ियाँ काटें)"
    },
    {
        title: "Day 75: Travel - Airport Conversations",
        topic: "Check-in, Security, Boarding",
        topicHindi: "हवाई अड्डे पर बातचीत",
        explanation: "Where is gate number...? Boarding pass, please. Baggage claim.",
        explanationHindi: "गेट नंबर कहाँ है? Boarding pass दिखाएँ। सामान लेना",
        examples: "Where is gate B5? (गेट B5 कहाँ है?)\nMay I see your boarding pass? (आपका boarding pass दिखाएँ?)"
    },
    {
        title: "Day 76: Travel - Hotel Check-in",
        topic: "Hotel Reservations",
        topicHindi: "होटल में check-in",
        explanation: "I have a reservation. Check-out time? Room service.",
        explanationHindi: "मेरा reservation है। Check-out का समय? Room service",
        examples: "I have a reservation under Sharma. (शर्मा के नाम पर मेरा reservation है)\nWhat time is check-out? (Check-out का समय क्या है?)"
    },
    {
        title: "Day 77: Dealing with Problems",
        topic: "Technical Issues, Complaints",
        topicHindi: "समस्याओं से निपटना",
        explanation: "It's not working. Can you fix it? I need help with...",
        explanationHindi: "यह काम नहीं कर रहा। क्या ठीक कर सकते हैं? मुझे... में मदद चाहिए",
        examples: "My phone is not working. (मेरा फ़ोन काम नहीं कर रहा)\nCan you fix it? (क्या आप इसे ठीक कर सकते हैं?)"
    },
    {
        title: "Day 78: Negotiations - Bargaining",
        topic: "Getting a Better Price",
        topicHindi: "दाम कम करवाना",
        explanation: "Can you give a discount? What's your best price? That's too much.",
        explanationHindi: "क्या आप discount दे सकते हैं? आपकी last price? यह बहुत ज़्यादा है",
        examples: "Can you give a discount? (क्या आप discount दे सकते हैं?)\nWhat's your best price? (आपकी last price क्या है?)"
    },
    {
        title: "Day 79: Festivals & Celebrations",
        topic: "Happy Diwali! Merry Christmas!",
        topicHindi: "त्योहार और जश्न",
        explanation: "Festival greetings and celebration vocabulary.",
        explanationHindi: "त्योहारों की शुभकामनाएँ",
        examples: "Happy Diwali! (दीवाली की शुभकामनाएँ!)\nHappy New Year! (नए साल की शुभकामनाएँ!)"
    },
    {
        title: "Day 80: Review Weeks 13-14 + 80-Day Achievement!",
        topic: "Major Milestone!",
        topicHindi: "80 दिन पूरे! बहुत बढ़िया!",
        explanation: "Celebrate 80 days! You're almost fluent! Review Days 61-79.",
        explanationHindi: "बधाई! 80 दिन पूरे हो गए! आप लगभग fluent हैं!",
        examples: "Amazing progress! Only 20 days to go!"
    }
]);

export default days61to80;
