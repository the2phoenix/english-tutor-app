/**
 * DAYS 21-40: BUILDING BLOCKS PHASE
 * Focus: Tenses mastery, Question formation, Vocabulary expansion, Basic conversations
 */

const generateLessons = (lessons) => lessons.map((lesson, idx) => ({
    title: lesson.title,
    type: lesson.type || "lesson",
    content: [
        {
            heading: lesson.topic,
            headingHindi: lesson.topicHindi,
            text: lesson.explanation,
            textHindi: lesson.explanationHindi,
            example: lesson.examples,
            audio: true
        }
    ],
    practice: lesson.practice || []
}));

export const days21to40 = generateLessons([
    {
        title: "Day 21: Present Simple Tense - Daily Routines",
        topic: "I eat, She eats - रोज़ का काम",
        topicHindi: "वर्तमान काल - रोज़मर्रा की आदतें",
        explanation: "For daily habits: Subject + Verb. With He/She/It, add 's' or 'es'.",
        explanationHindi: "रोज़ के काम के लिए: I/You/We/They + verb, He/She/It + verb+s",
        examples: "I cook every day. (मैं रोज़ खाना बनाती हूँ)\nShe cooks every day. (वह रोज़ खाना बनाती है)\nHe works hard. (वह मेहनत करता है)",
        practice: [
            { type: "sentence-builder", sentence: "She walks to school", promptHindi: "वह स्कूल तक पैदल जाती है (She = walks with 's')" },
            { type: "sentence-builder", sentence: "I drink tea every morning", promptHindi: "मैं हर सुबह चाय पीती हूँ" }
        ]
    },
    {
        title: "Day 22: Past Simple Tense - Yesterday's Actions",
        topic: "I went, She went - कल किया",
        topicHindi: "भूतकाल - बीते हुए काम",
        explanation: "For finished actions: Subject + Verb (2nd form). Go→Went, Eat→Ate, Make→Made.",
        explanationHindi: "खत्म हुए काम के लिए: क्रिया का दूसरा रूप। Go→Went, Eat→Ate, Make→Made",
        examples: "I went to the market yesterday. (मैं कल बाज़ार गई)\nShe ate rice. (उसने चावल खाया)",
        practice: [
            { type: "sentence-builder", sentence: "Yesterday I went to the market", promptHindi: "कल मैं बाज़ार गई (mom's original: 'Yesterday gone to market')" }
        ]
    },
    {
        title: "Day 23: Future Simple Tense - Tomorrow's Plans",
        topic: "I will go - कल करूँगी",
        topicHindi: "भविष्य काल - आने वाले काम",
        explanation: "For future: Subject + will + Verb (1st form).",
        explanationHindi: "आने वाले काम के लिए: will + क्रिया का पहला रूप",
        examples: "I will go tomorrow. (मैं कल जाऊँगी)\nShe will cook dinner. (वह रात का खाना बनाएगी)",
        practice: [
            { type: "sentence-builder", sentence: "Tomorrow I will go to a birthday party", promptHindi: "कल मैं जन्मदिन की पार्टी में जाऊँगी (mom's original: 'Tomorrow going to birthday')" }
        ]
    },
    {
        title: "Day 24: Questions with Do/Does",
        topic: "Do you cook? Does she work?",
        topicHindi: "सवाल पूछना - Do/Does से",
        explanation: "Do + I/You/We/They + verb. Does + He/She/It + verb.",
        explanationHindi: "Do के साथ I/You/We/They, Does के साथ He/She/It",
        examples: "Do you cook? (क्या तुम खाना बनाती हो?)\nDoes she work? (क्या वह काम करती है?)",
        practice: []
    },
    {
        title: "Day 25: Questions with Did (Past)",
        topic: "Did you go? - क्या गए?",
        topicHindi: "भूतकाल में सवाल",
        explanation: "Did + Subject + Verb (1st form, not 2nd!). The verb returns to base form.",
        explanationHindi: "Did के बाद क्रिया पहले रूप में आती है (दूसरे में नहीं)",
        examples: "Did you eat? (क्या तुमने खाया?)\nDid she go? (क्या वह गई?)",
        practice: []
    },
    // Days 26-40: Real-life scenario vocabulary and practice
    {
        title: "Day 26: Market Conversation - Part 1",
        topic: "Buying Vegetables",
        topicHindi: "बाज़ार में सब्ज़ियाँ खरीदना",
        explanation: "How much is this? I want... Do you have...?",
        explanationHindi: "यह कितने का है?\nमुझे... चाहिए\nक्या आपके पास... है?",
        examples: "How much is this? (यह कितने का है?)\nI want tomatoes. (मुझे टमाटर चाहिए)\nDo you have fresh vegetables? (क्या आपके पास ताज़ी सब्ज़ियाँ हैं?)",
        practice: []
    },
    {
        title: "Day 27: Market Conversation - Part 2",
        topic: "Asking for Price & Quantity",
        topicHindi: "कीमत और मात्रा पूछना",
        explanation: "How much is one kilo? Give me... That's too expensive.",
        explanationHindi: "एक किलो कितने का है?\nमुझे... दीजिए\nयह बहुत महँगा है",
        examples: "How much is one kilo? (एक किलो कितने का है?)\nGive me half kilo. (मुझे आधा किलो दीजिए)\nThat's too expensive. (यह बहुत महँगा है)",
        practice: []
    },
    {
        title: "Day 28: Doctor Visit - Part 1",
        topic: "Describing Pain",
        topicHindi: "दर्द बताना",
        explanation: "My... hurts. I have a headache/fever/cold.",
        explanationHindi: "मेरा... दुख रहा है\nमुझे सिरदर्द/बुखार/ज़ुकाम है",
        examples: "My stomach hurts. (मेरा पेट दुख रहा है)\nI have a headache. (मुझे सिरदर्द है)",
        practice: []
    },
    {
        title: "Day 29: Doctor Visit - Part 2",
        topic: "Understanding Doctor's Instructions",
        topicHindi: "डॉक्टर की बात समझना",
        explanation: "Take this medicine. Come back after... Rest for...",
        explanationHindi: "यह दवाई लें\n... के बाद फिर आएँ\n... तक आराम करें",
        examples: "Take this medicine twice a day. (यह दवाई दिन में दो बार लें)\nCome back after 3 days. (3 दिन बाद फिर आएँ)",
        practice: []
    },
    {
        title: "Day 30: Phone Conversations Basics",
        topic: "Answering & Making Calls",
        topicHindi: "फ़ोन पर बात करना",
        explanation: "Hello, this is... May I speak to...? Hold on, please.",
        explanationHindi: "Hello, मैं... बोल रही हूँ\nक्या मैं... से बात कर सकती हूँ?\nएक मिनट रुकिए",
        examples: "Hello, this is Sunita. (Hello, मैं सुनीता बोल रही हूँ)\nMay I speak to Arnesh? (क्या मैं अर्नेश से बात कर सकती हूँ?)",
        practice: []
    },
    // Days 31-40 continue with more scenarios
    {
        title: "Day 31: Linking Words - And, But, Because",
        topic: "Joining Sentences",
        topicHindi: "वाक्यों को जोड़ना",
        explanation: "Use 'and' for adding, 'but' for opposite, 'because' for reason.",
        explanationHindi: "'और' के लिए 'and', 'पर' के लिए 'but', 'क्योंकि' के लिए 'because'",
        examples: "I like tea but I don't like coffee. (मुझे चाय पसंद है पर कॉफ़ी नहीं) [Fixed from mom's error: 'I'm not like']",
        practice: [
            { type: "writing", sentence: "I like tea but I do not like coffee", promptHindi: "मुझे चाय पसंद है पर कॉफ़ी नहीं पसंद (सही तरीका - 'don't like', not 'I'm not like')" }
        ]
    },
    {
        title: "Day 32: Comparative Adjectives",
        topic: "Bigger, Smaller, Better",
        topicHindi: "तुलना करना",
        explanation: "Add 'er' for comparison: big→bigger, small→smaller.",
        explanationHindi: "तुलना के लिए 'er' लगाएँ: big→bigger, small→smaller",
        examples: "This is bigger. (यह बड़ा है)\nThat is smaller. (वह छोटा है)",
        practice: []
    },
    {
        title: "Day 33: Superlatives",
        topic: "The biggest, The best",
        topicHindi: "सबसे ज़्यादा",
        explanation: "Add 'est' for the most: big→biggest, good→best.",
        explanationHindi: "सबसे के लिए 'est': big→biggest, good→best",
        examples: "This is the biggest. (यह सबसे बड़ा है)",
        practice: []
    },
    {
        title: "Day 34: Can/Cannot - Ability",
        topic: "I can swim - मैं तैर सकती हूँ",
        topicHindi: "क्षमता बताना",
        explanation: "Can + verb = able to do. Cannot/Can't = not able.",
        explanationHindi: "Can = सकता/सकती, Cannot = नहीं सकता",
        examples: "I can cook. (मैं खाना बना सकती हूँ)\nI cannot swim. (मैं तैर नहीं सकती)",
        practice: []
    },
    {
        title: "Day 35: Should/Shouldn't - Advice",
        topic: "You should... - आपको चाहिए",
        topicHindi: "सलाह देना",
        explanation: "Should + verb = advice. Shouldn't = advice not to do.",
        explanationHindi: "Should = चाहिए, Shouldn't = नहीं चाहिए",
        examples: "You should rest. (आपको आराम करना चाहिए)\nYou shouldn't eat spicy food. (आपको मसालेदार खाना नहीं खाना चाहिए)",
        practice: []
    },
    {
        title: "Day 36: Would like - Polite Requests",
        topic: "I would like... - मैं चाहूँगी",
        topicHindi: "विनम्र तरीके से माँगना",
        explanation: "Would like = polite way to say 'want'.",
        explanationHindi: "Would like = 'want' का विनम्र रूप",
        examples: "I would like some water. (मुझे पानी चाहिए - विनम्र तरीका)",
        practice: []
    },
    {
        title: "Day 37: Some/Any - Quantity",
        topic: "Some water, Any questions?",
        topicHindi: "कुछ/कोई",
        explanation: "Some for positive sentences, Any for questions/negatives.",
        explanationHindi: "Some सकारात्मक वाक्य में, Any प्रश्न या नकारात्मक में",
        examples: "I have some money. (मेरे पास कुछ पैसे हैं)\nDo you have any money? (क्या तुम्हारे पास कोई पैसे हैं?)",
        practice: []
    },
    {
        title: "Day 38: Much/Many - How much/many?",
        topic: "Counting & Measuring",
        topicHindi: "गिनती और मात्रा",
        explanation: "Many for countable (apples), Much for uncountable (water).",
        explanationHindi: "Many गिनने योग्य के लिए, Much न गिनने योग्य के लिए",
        examples: "How many apples? (कितने सेब?)\nHow much water? (कितना पानी?)",
        practice: []
    },
    {
        title: "Day 39: Travel Vocabulary",
        topic: "Airport, Station, Bus, Train",
        topicHindi: "यात्रा के शब्द",
        explanation: "Common travel words and phrases.",
        explanationHindi: "यात्रा में इस्तेमाल होने वाले शब्द",
        examples: "Where is the bus stop? (बस स्टॉप कहाँ है?)\nOne ticket to Delhi. (दिल्ली का एक टिकट)",
        practice: []
    },
    {
        title: "Day 40: Review Weeks 4-6 + Mid-Course Assessment",
        topic: "Comprehensive Review",
        topicHindi: "संपूर्ण समीक्षा",
        explanation: "Review tenses, questions, scenarios, and vocabulary from Days 21-39.",
        explanationHindi: "दिन 21-39 की समीक्षा",
        examples: "",
        practice: []
    }
]);

export default days21to40;
