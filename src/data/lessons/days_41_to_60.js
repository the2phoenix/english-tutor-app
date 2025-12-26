/**
 * DAYS 41-60: PRACTICAL USAGE PHASE
 * Focus: Real-life conversations, Confidence building, Kids' school interactions
 * All practical scenarios mom needs daily
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

export const days41to60 = generateLessons([
    // Shopping & Market scenarios (detailed - her priority)
    {
        title: "Day 41: Shopping - Clothing Store",
        topic: "Buying Clothes",
        topicHindi: "कपड़े खरीदना",
        explanation: "Do you have this in...? Can I try this? How much is it?",
        explanationHindi: "क्या यह... में है?\nक्या मैं इसे ट्राई कर सकती हूँ?\nयह कितने का है?",
        examples: "Do you have this in blue? (क्या यह नीले रंग में है?)\nCan I try this? (क्या मैं इसे ट्राई कर सकती हूँ?)\nHow much is this saree? (यह साड़ी कितने की है?)"
    },
    {
        title: "Day 42: At the Pharmacy",
        topic: "Buying Medicine",
        topicHindi: "दवाई खरीदना",
        explanation: "I need medicine for... Do you have...? How many times a day?",
        explanationHindi: "मुझे... के लिए दवाई चाहिए\nक्या आपके पास... है?\nदिन में कितनी बार?",
        examples: "I need medicine for headache. (मुझे सिरदर्द की दवाई चाहिए)\nHow many times a day? (दिन में कितनी बार लें?)"
    },
    {
        title: "Day 43: Bank Conversations",
        topic: "Banking Basics",
        topicHindi: "बैंक में बात करना",
        explanation: "I want to withdraw/deposit money. Where do I sign?",
        explanationHindi: "मुझे पैसे निकालने/जमा करने हैं\nकहाँ sign करूँ?",
        examples: "I want to withdraw 5000 rupees. (मुझे 5000 रुपये निकालने हैं)\nWhere do I sign? (मैं कहाँ sign करूँ?)"
    },
    {
        title: "Day 44: Kids' School - Parent-Teacher Meeting",
        topic: "Talking to Teachers",
        topicHindi: "टीचर से बात करना",
        explanation: "How is my child doing? Does he/she need help with...?",
        explanationHindi: "मेरा बच्चा कैसा कर रहा है?\nक्या उसे... में मदद चाहिए?",
        examples: "How is my son doing? (मेरा बेटा कैसा कर रहा है?)\nDoes he need help with math? (क्या उसे गणित में मदद चाहिए?)"
    },
    {
        title: "Day 45: Kids' School - Understanding Homework",
        topic: "School Assignments",
        topicHindi: "होमवर्क समझना",
        explanation: "What is the homework? When is it due? Can you explain this?",
        explanationHindi: "होमवर्क क्या है?\nकब तक जमा करना है?\nक्या आप यह समझा सकते हैं?",
        examples: "What is the homework for today? (आज का होमवर्क क्या है?)\nWhen is it due? (कब तक जमा करना है?)"
    },
    {
        title: "Day 46: Restaurant - Ordering Food",
        topic: "Dining Out",
        topicHindi: "रेस्टोरेंट में खाना ऑर्डर करना",
        explanation: "What do you recommend? Can I have...? The bill, please.",
        explanationHindi: "आप क्या recommend करते हैं?\nक्या मुझे... मिल सकता है?\nबिल दीजिए",
        examples: "What do you recommend? (आप क्या recommend करते हैं?)\nCan I have the menu? (क्या मुझे menu मिल सकता है?)\nThe bill, please. (बिल दीजिए)"
    },
    {
        title: "Day 47: Directions - Asking the Way",
        topic: "Finding Places",
        topicHindi: "रास्ता पूछना",
        explanation: "Where is...? How do I get to...? Is it far from here?",
        explanationHindi: "... कहाँ है?\n... तक कैसे जाएँ?\nक्या यह यहाँ से दूर है?",
        examples: "Where is the nearest hospital? (सबसे नज़दीकी अस्पताल कहाँ है?)\nHow do I get to the station? (स्टेशन तक कैसे जाएँ?)\nIs it far from here? (क्या यह यहाँ से दूर है?)"
    },
    {
        title: "Day 48: Directions - Giving Directions",
        topic: "Helping Others Find Places",
        topicHindi: "रास्ता बताना",
        explanation: "Go straight, turn left/right, It's next to..., opposite...",
        explanationHindi: "सीधे जाएँ, बाएँ/दाएँ मुड़ें, यह... के बगल में है, ... के सामने",
        examples: "Go straight and turn left. (सीधे जाएँ और बाएँ मुड़ें)\nIt's next to the bank. (यह बैंक के बगल में है)"
    },
    {
        title: "Day 49: Making Appointments",
        topic: "Doctor, Salon, etc.",
        topicHindi: "अपॉइंटमेंट लेना",
        explanation: "I want to make an appointment for... Is tomorrow available?",
        explanationHindi: "मुझे... के लिए अपॉइंटमेंट चाहिए\nक्या कल available है?",
        examples: "I want to make an appointment for tomorrow. (मुझे कल के लिए अपॉइंटमेंट चाहिए)\nWhat time is available? (कौन सा समय available है?)"
    },
    {
        title: "Day 50: Review Weeks 7-8 + Progress Check",
        topic: "Mid-Course Review",
        topicHindi: "आधे course की समीक्षा",
        explanation: "Review all practical scenarios from Days 41-49.",
        explanationHindi: "दिन 41-49 की सभी practical situations की समीक्षा",
        examples: ""
    },
    // Days 51-60: More confidence building
    {
        title: "Day 51: Complaining Politely",
        topic: "When Things Go Wrong",
        topicHindi: "शिकायत करना (विनम्र तरीके से)",
        explanation: "I'm sorry, but... This is not working. Can you help me?",
        explanationHindi: "माफ़ करें, पर...\nयह काम नहीं कर रहा\nक्या आप मेरी मदद कर सकते हैं?",
        examples: "I'm sorry, but this is not working. (माफ़ करें, पर यह काम नहीं कर रहा)\nCan you fix this? (क्या आप इसे ठीक कर सकते हैं?)"
    },
    {
        title: "Day 52: Emergencies - Asking for Help",
        topic: "Urgent Situations",
        topicHindi: "आपातकालीन मदद माँगना",
        explanation: "Help! Call the police/ambulance. I need help immediately.",
        explanationHindi: "मदद! पुलिस/एम्बुलेंस बुलाओ। मुझे तुरंत मदद चाहिए",
        examples: "Help! (मदद!)\nCall an ambulance. (एम्बुलेंस बुलाओ)\nI need help. (मुझे मदद चाहिए)"
    },
    {
        title: "Day 53: Weather Conversations",
        topic: "Talking About Weather",
        topicHindi: "मौसम के बारे में बात करना",
        explanation: "It's hot/cold/rainy. The weather is nice today.",
        explanationHindi: "गर्मी/ठंड/बारिश है\nआज मौसम अच्छा है",
        examples: "It's very hot today. (आज बहुत गर्मी है)\nIt's raining. (बारिश हो रही है)\nThe weather is nice. (मौसम अच्छा है)"
    },
    {
        title: "Day 54: Invitations - Accepting & Declining",
        topic: "Social Situations",
        topicHindi: "न्योता स्वीकार करना/मना करना",
        explanation: "Would you like to...? Yes, I'd love to. Sorry, I can't.",
        explanationHindi: "क्या आप... चाहेंगे? हाँ, ज़रूर। माफ़ करें, मैं नहीं आ सकती",
        examples: "Would you like to come? (क्या आप आएँगे?)\nYes, I'd love to. (हाँ, ज़रूर आऊँगी)\nSorry, I can't. (माफ़ करें, मैं नहीं आ सकती)"
    },
    {
        title: "Day 55: Congratulations & Condolences",
        topic: "Important Life Events",
        topicHindi: "बधाई और शोक",
        explanation: "Congratulations! I'm sorry for your loss. Best wishes!",
        explanationHindi: "बधाई हो! आपके नुकसान के लिए मुझे दुःख है। शुभकामनाएँ!",
        examples: "Congratulations on your success! (आपकी सफलता पर बधाई!)\nI'm sorry for your loss. (आपके नुकसान के लिए मुझे दुःख है)"
    },
    {
        title: "Day 56: Describing People",
        topic: "Appearance & Personality",
        topicHindi: "लोगों का वर्णन करना",
        explanation: "He/She is tall, short, kind, friendly, helpful.",
        explanationHindi: "वह लंबा/छोटा/दयालु/मित्रवत/मददगार है",
        examples: "She is very kind. (वह बहुत दयालु है)\nHe is tall and friendly. (वह लंबा और मित्रवत है)"
    },
    {
        title: "Day 57: Expressing Opinions",
        topic: "I think... In my opinion...",
        topicHindi: "अपनी राय देना",
        explanation: "I think... I believe... In my opinion... I agree/disagree.",
        explanationHindi: "मुझे लगता है... मेरे विचार में... मैं सहमत/असहमत हूँ",
        examples: "I think it's good. (मुझे लगता है यह अच्छा है)\nIn my opinion, we should wait. (मेरे विचार में, हमें इंतज़ार करना चाहिए)"
    },
    {
        title: "Day 58: Making Suggestions",
        topic: "Let's... Why don't we...? How about...?",
        topicHindi: "सुझाव देना",
        explanation: "Let's go. Why don't we try? How about tomorrow?",
        explanationHindi: "चलिए चलते हैं। क्यों न try करें? कल कैसा रहेगा?",
        examples: "Let's go to the market. (चलिए बाज़ार चलते हैं)\nWhy don't we meet tomorrow? (क्यों न हम कल मिलें?)\nHow about 5 PM? (5 बजे कैसा रहेगा?)"
    },
    {
        title: "Day 59: Talking About Hobbies",
        topic: "I like... I enjoy... My hobby is...",
        topicHindi: "शौक के बारे में बात करना",
        explanation: "What do you like to do? I like reading/cooking/watching TV.",
        explanationHindi: "आपको क्या करना पसंद है? मुझे पढ़ना/खाना बनाना/TV देखना पसंद है",
        examples: "I like cooking. (मुझे खाना बनाना पसंद है)\nMy hobby is watching TV. (मेरा शौक TV देखना है)"
    },
    {
        title: "Day 60: Review Weeks 9-10 + 60-Day Milestone!",
        topic: "Major Progress Review",
        topicHindi: "60 दिन पूरे! बड़ी समीक्षा",
        explanation: "Celebrate 60 days! Review all scenarios and conversations from Days 41-59.",
        explanationHindi: "60 दिन पूरे हो गए! बधाई! अब तक की सभी practical situations की समीक्षा करें",
        examples: "You've learned: Shopping, Doctor, School, Restaurant, Directions, and much more!"
    }
]);

export default days41to60;
