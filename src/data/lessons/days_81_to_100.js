/**
 * DAYS 81-100: MASTERY & FLUENCY PHASE
 * Focus: Natural conversations, Complex scenarios, Final confidence boost
 * Celebrating achievement!
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

export const days81to100 = generateLessons([
    {
        title: "Day 81: Storytelling - Telling a Story",
        topic: "Once upon a time...",
        topicHindi: "कहानी सुनाना",
        explanation: "How to tell a complete story with beginning, middle, end.",
        explanationHindi: "शुरुआत, बीच, और अंत के साथ पूरी कहानी कैसे सुनाएं",
        examples: "Once upon a time... Then... Finally... (एक बार की बात है... फिर... आखिर में...)"
    },
    {
        title: "Day 82: Describing an Event",
        topic: "I went to a wedding...",
        topicHindi: "किसी घटना का वर्णन",
        explanation: "How to describe  parties, weddings, festivals in detail.",
        explanationHindi: "पार्टी, शादी, त्योहार का विस्तार से वर्णन",
        examples: "I went to my friend's wedding. It was beautiful. There was great food. (मैं अपने दोस्त की शादी में गई। बहुत सुंदर थी। खाना बहुत अच्छा था)"
    },
    {
        title: "Day 83: Giving Presentations",
        topic: "Speaking in Public",
        topicHindi: "लोगों के सामने बोलना",
        explanation: "Today I will talk about... First... Second... In conclusion...",
        explanationHindi: "आज मैं... के बारे में बात करूँगी। पहले... दूसरा... निष्कर्ष में...",
        examples: "Today I will talk about my family. (आज मैं अपने परिवार के बारे में बात करूँगी)"
    },
    {
        title: "Day 84: Job Interviews",
        topic: "Answering Interview Questions",
        topicHindi: "इंटरव्यू में जवाब देना",
        explanation: "Tell me about yourself. What are your strengths? Why should we hire you?",
        explanationHindi: "अपने बारे में बताएँ। आपकी ताकत क्या है? हम आपको क्यों रखें?",
        examples: "I am hardworking and responsible. (मैं मेहनती और ज़िम्मेदार हूँ)"
    },
    {
        title: "Day 85: Cultural Differences",
        topic: "Understanding Different Customs",
        topicHindi: "अलग-अलग संस्कृतियाँ",
        explanation: "In India we... In other countries they... It's different.",
        explanationHindi: "भारत में हम... दूसरे देशों में वे... यह अलग है",
        examples: "In India, we eat with hands. In other countries, they use forks. (भारत में हम हाथ से खाते हैं। दूसरे देशों में वे कांटे से खाते हैं)"
    },
    {
        title: "Day 86: Idioms & Common Phrases",
        topic: "Piece of cake, It's raining cats and dogs",
        topicHindi: "मुहावरे और आम वाक्यांश",
        explanation: "Common English expressions that don't translate literally.",
        explanationHindi: "आम अंग्रेज़ी expressions जिनका शाब्दिक अनुवाद नहीं होता",
        examples: "It's a piece of cake = It's very easy (बहुत आसान है)\nBreak a leg = Good luck (शुभकामनाएँ)"
    },
    {
        title: "Day 87: Slang & Informal English",
        topic: "Cool, Awesome, Great job!",
        topicHindi: "अनौपचारिक अंग्रेज़ी",
        explanation: "Casual words used in daily conversation.",
        explanationHindi: "रोज़ की बातचीत में इस्तेमाल होने वाले casual शब्द",
        examples: "That's cool! (बढ़िया!)\nAwesome job! (शानदार काम!)\nNo worries! (कोई बात नहीं!)"
    },
    {
        title: "Day 88: Business English Basics",
        topic: "Meetings, Emails, Calls",
        topicHindi: "व्यवसायिक अंग्रेज़ी",
        explanation: "Professional language for work situations.",
        explanationHindi: "काम की परिस्थितियों के लिए professional भाषा",
        examples: "Let's schedule a meeting. (चलिए एक meeting schedule करते हैं)\nI'll send you an email. (मैं आपको email भेजूँगी)"
    },
    {
        title: "Day 89: Legal & Official Documents",
        topic: "Understanding Forms",
        topicHindi: "कागज़ी कार्रवाई समझना",
        explanation: "Basic understanding of official forms and documents.",
        explanationHindi: "Official forms और documents की बुनियादी समझ",
        examples: "Fill in your name and address. (अपना नाम और पता भरें)\nSign here, please. (यहाँ sign करें)"
    },
    {
        title: "Day 90: Review Weeks 15-16 + Final Preparations",
        topic: "90 Days! Final Sprint!",
        topicHindi: "90 दिन पूरे! आखिरी 10 दिन",
        explanation: "Review Days 81-89. Get ready for final mastery!",
        explanationHindi: "दिन 81-89 की समीक्षा। mastery के लिए तैयार हो जाएँ!",
        examples: "You're almost there! 10 more days to fluency!"
    },
    {
        title: "Day 91: Debate & Discussion",
        topic: "Expressing Strong Opinions",
        topicHindi: "बहस और चर्चा",
        explanation: "How to have a proper discussion with different viewpoints.",
        explanationHindi: "अलग-अलग विचारों के साथ कैसे चर्चा करें",
        examples: "I strongly believe... On the other hand... (मेरा दृढ़ विश्वास है... दूसरी ओर...)"
    },
    {
        title: "Day 92: Advanced Conversations",
        topic: "Politics, Economy, Society",
        topicHindi: "गहरी बातचीत",
        explanation: "Discussing complex topics confidently.",
        explanationHindi: "जटिल विषयों पर आत्मविश्वास से चर्चा",
        examples: "What do you think about...? I believe that... (आप क्या सोचते हैं...? मेरा मानना है कि...)"
    },
    {
        title: "Day 93: Humor in English",
        topic: "Jokes & Funny Stories",
        topicHindi: "अंग्रेज़ी में हास्य",
        explanation: "Understanding and telling jokes in English.",
        explanationHindi: "अंग्रेज़ी में चुटकुले समझना और सुनाना",
        examples: "Why did the chicken cross the road? To get to the other side! (मुर्गी ने सड़क क्यों पार की? दूसरी तरफ़ जाने के लिए!)"
    },
    {
        title: "Day 94: Poetry & Literature Basics",
        topic: "Appreciating English Literature",
        topicHindi: "अंग्रेज़ी साहित्य की सराहना",
        explanation: "Understanding simple poems and quotes.",
        explanationHindi: "सरल कविताएँ और quotes समझना",
        examples: "Roses are red, violets are blue..."
    },
    {
        title: "Day 95: Pronunciation Mastery",
        topic: "Difficult Sounds",
        topicHindi: "उच्चारण में महारत",
        explanation: "Mastering tricky English sounds and words.",
        explanationHindi: "मुश्किल अंग्रेज़ी sounds और words में महारत",
        examples: "TH sound: Think, Thank, This, That\nR vs L: Right vs Light, Read vs Lead"
    },
    {
        title: "Day 96: Speed & Fluency Practice",
        topic: "Speaking Naturally Fast",
        topicHindi: "प्राकृतिक गति से बोलना",
        explanation: "Practice speaking at natural conversational speed.",
        explanationHindi: "सामान्य बातचीत की गति से बोलने का अभ्यास",
        examples: "Connected speech, reductions, natural rhythm."
    },
    {
        title: "Day 97: Thinking in English",
        topic: "Stop Translating!",
        topicHindi: "अंग्रेज़ी में सोचना",
        explanation: "How to think directly in English without translating from Hindi.",
        explanationHindi: "हिंदी से अनुवाद किए बिना सीधे अंग्रेज़ी में कैसे सोचें",
        examples: "Practice: Describe your day in English without thinking in Hindi first."
    },
    {
        title: "Day 98: Confidence Boosters",
        topic: "You Can Do It!",
        topicHindi: "आत्मविश्वास बढ़ाना",
        explanation: "Motivational lesson about how far you've come!",
        explanationHindi: "आप कितनी दूर आ गई हैं! प्रेरणादायक पाठ",
        examples: "From zero to fluent in 100 days! You are amazing! (100 दिन में zero से fluent! आप अद्भुत हैं!)"
    },
    {
        title: "Day 99: Final Review - All Topics",
        topic: "Complete 100-Day Review",
        topicHindi: "पूरे 100 दिन की समीक्षा",
        explanation: "Comprehensive review of ALL topics from Day 1 to 98.",
        explanationHindi: "दिन 1 से 98 तक के सभी विषयों की विस्तृत समीक्षा",
        examples: "Articles, Tenses, Conversations, Real-life scenarios - Everything!"
    },
    {
        title: "Day 100: 🎉 CELEBRATION DAY! You Did It!  🎉",
        topic: "100 Days Complete! You Are Fluent!",
        topicHindi: "🎉 100 दिन पूरे! आप fluent हैं! 🎉",
        explanation: "CONGRATULATIONS! You completed 100 days of English learning! You can now:\n✅ Speak confidently\n✅ Understand conversations\n✅ Handle real-life situations\n✅ Think in English\n✅ Read and write\n\nYou are AMAZING! परिवार और दोस्तों को दिखाएँ कि आपने क्या हासिल किया है!",
        explanationHindi: "बधाई हो! आपने 100 दिन की अंग्रेज़ी सीखने की यात्रा पूरी कर ली! अब आप:\n✅ आत्मविश्वास से बोल सकती हैं\n✅ बातचीत समझ सकती हैं\n✅ रोज़मर्रा की परिस्थितियाँ संभाल सकती हैं\n✅ अंग्रेज़ी में सोच सकती हैं\n✅ पढ़ और लिख सकती हैं\n\nआप बहुत बढ़िया हैं! 🌟",
        examples: "Share your success:\n'I completed 100 days of English learning!'\n'I can speak English confidently now!'\n'I am proud of myself!'\n\n(मैंने 100 दिन की अंग्रेज़ी सीख ली!\nमैं अब आत्मविश्वास से अंग्रेज़ी बोल सकती हूँ!\nमुझे खुद पर गर्व है!)"
    }
]);

export default days81to100;
