/**
 * Personalized 100-Day English Curriculum for Mom
 * Designed specifically for A1-A2 beginner level, Hindi-first learner
 * Focus: Articles, is/am/are, spelling, speaking confidence, real-life scenarios
 */

export const curriculum = [
    // ==================== DAYS 1-5: ABSOLUTE BASICS ====================
    {
        id: 1,
        day: 1,
        title: "Day 1: Understanding 'A' and 'An'",
        type: "lesson",
        content: [
            {
                heading: "Articles क्या होते हैं? (What are Articles?)",
                headingHindi: "Articles - छोटे लेकिन ज़रूरी शब्द",
                text: "In English, we use small words 'a' and 'an' before things. In Hindi, we don't have this, but in English it's very important!",
                textHindi: "अंग्रेजी में, हम चीजों से पहले 'a' और 'an' लगाते हैं। हिंदी में ऐसा नहीं होता, पर अंग्रेजी में यह बहुत ज़रूरी है!"
            },
            {
                heading: "When to use 'A'",
                headingHindi: "कब 'A' लगाएं",
                text: "Use 'A' before words that start with consonant sounds (b, c, d, f, g, etc.).\nThink: A for most normal sounds",
                textHindi: "व्यंजन ध्वनि (b, c, d, f, g, आदि) से शुरू होने वाले शब्दों से पहले 'A' लगाएं।\nयाद रखें: ज़्यादातर सामान्य आवाज़ों के लिए A",
                example: "a table (एक मेज़)\na chair (एक कुर्सी)\na door (एक दरवाज़ा)\na glass (एक गिलास)",
                audio: true
            },
            {
                heading: "When to use 'An'",
                headingHindi: "कब 'An' लगाएं",
                text: "Use 'An' before words that start with vowel sounds (a, e, i, o, u).\nThink: An for vowel sounds like अ, ए, आई, ओ, यू",
                textHindi: "स्वर ध्वनि (a, e, i, o, u) से शुरू होने वाले शब्दों से पहले 'An' लगाएं।\nयाद रखें: अ, ए, आई, ओ, यू जैसी आवाज़ के लिए An",
                example: "an apple (एक सेब)\nan umbrella (एक छाता)\nan orange (एक संतरा)\nan elephant (एक हाथी)",
                audio: true
            },
            {
                heading: "आसान ट्रिक (Easy Trick)",
                headingHindi: "आसान याद रखने का तरीका",
                text: "Say the word out loud. If it sounds smooth with 'an', use 'an'. Otherwise use 'a'.\nExample: 'a table' sounds good ✓\n'an table' sounds wrong ✗",
                textHindi: "शब्द को ज़ोर से बोलें। अगर 'an' के साथ आसानी से बोल सकते हैं, तो 'an' लगाएं। नहीं तो 'a' लगाएं।\nउदाहरण: 'a table' सही लगता है ✓\n'an table' ग़लत लगता है ✗"
            }
        ],
        practice: [
            {
                type: "sentence-builder",
                sentence: "I have a fan",
                promptHindi: "मेरे पास एक पंखा है (fan - f से शुरू, तो 'a')"
            },
            {
                type: "sentence-builder",
                sentence: "She needs an umbrella",
                promptHindi: "उसे एक छाता चाहिए (umbrella - u से शुरू, तो 'an')"
            },
            {
                type: "sentence-builder",
                sentence: "This is a door",
                promptHindi: "यह एक दरवाज़ा है"
            }
        ]
    },
    {
        id: 2,
        day: 2,
        title: "Day 2: Using 'The' - Special Article",
        type: "lesson",
        content: [
            {
                heading: "'The' क्या है? (What is 'The'?)",
                headingHindi: "'The' - खास चीज़ों के लिए",
                text: "'The' is used when we talk about a SPECIFIC thing, something we already know about.",
                textHindi: "'The' का उपयोग तब करते हैं जब हम किसी SPECIFIC (खास) चीज़ के बारे में बात करते हैं, जिसके बारे में हम पहले से जानते हैं।"
            },
            {
                heading: "A/An vs The - फ़र्क समझें (Understand the Difference)",
                headingHindi: "A/An - कोई भी vs The - कोई खास",
                text: "'A/An' = Any one (कोई भी)\n'The' = That specific one (वो वाला)\n\nExample:\n'Give me a pen' = Any pen is okay (कोई भी पेन चलेगा)\n'Give me the pen' = That specific pen (वो वाला पेन)",
                textHindi: "'A/An' = कोई भी एक\n'The' = वो खास वाला\n\nउदाहरण:\n'Give me a pen' = कोई भी पेन दे दो\n'Give me the pen' = वो वाला पेन दो (जिसके बारे में हम बात कर रहे हैं)",
                example: "I saw a cat. (मैंने एक बिल्ली देखी - कोई भी)\nThe cat was black. (वो बिल्ली काली थी - वही वाली)",
                audio: true
            },
            {
                heading: "'The' कब ज़रूर लगता है?",
                headingHindi: "हमेशा 'The' लगाने की जगहें",
                text: "Always use 'The' with:\n1. Sun, moon, sky → the sun, the moon, the sky\n2. Unique things → the Taj Mahal, the market (your regular market)\n3. When there's only one → the door (of your room)",
                textHindi: "'The' हमेशा लगाएं:\n1. सूरज, चाँद, आसमान के साथ → the sun, the moon, the sky\n 2. अनोखी चीज़ों के साथ → the Taj Mahal, the market (आपका रोज़ का बाज़ार)\n3. जब सिर्फ़ एक ही हो → the door (आपके कमरे का दरवाज़ा)",
                example: "The sun is bright. (सूरज चमकीला है)\nI am going to the market. (मैं बाज़ार जा रही हूँ)\nClose the door. (दरवाज़ा बंद करो)",
                audio: true
            }
        ],
        practice: [
            {
                type: "sentence-builder",
                sentence: "The table is brown",
                promptHindi: "मेज़ भूरी है (आपकी मेज़ - specific, तो 'the')"
            },
            {
                type: "sentence-builder",
                sentence: "I need a knife",
                promptHindi: "मुझे एक चाकू चाहिए (कोई भी चाकू)"
            },
            {
                type: "sentence-builder",
                sentence: "The sky is blue",
                promptHindi: "आसमान नीला है (सिर्फ़ एक ही आसमान है, तो 'the')"
            }
        ]
    },
    {
        id: 3,
        day: 3,
        title: "Day 3: Learning 'Is, Am, Are' - सबसे ज़रूरी!",
        type: "lesson",
        content: [
            {
                heading: "Is/Am/Are क्या हैं?",
                headingHindi: "है/हूँ/हो को अंग्रेजी में कैसे बोलें",
                text: "In Hindi we say 'hai', 'hoon', 'ho'. In English, we must use 'is', 'am', or 'are'. This is VERY important!\n\nWRONG: You great ✗\nRIGHT: You ARE great ✓",
                textHindi: "हिंदी में हम 'है', 'हूँ', 'हो' बोलते हैं। अंग्रेजी में, हमें 'is', 'am', या 'are' का उपयोग करना ही पड़ता है। यह बहुत ज़रूरी है!\n\nग़लत: You great ✗\nसही: You ARE great ✓"
            },
            {
                heading: "कौन सा कब? (Which One When?)",
                headingHindi: "आसान नियम - याद रखें!",
                text: "I → AM (मैं हूँ)\nHe/She/It/Name → IS (वह है)\nYou/We/They → ARE (तुम हो, हम हैं, वे हैं)\n\nTRICK: 'I' is special, always 'am'.\n'He/She/It' uses 'is'.\nEverything else uses 'are'.",
                textHindi: "I → AM (मैं हूँ)\nHe/She/It/Name → IS (वह है, नाम है)\nYou/We/They → ARE (तुम हो, हम हैं, वे हैं)\n\nट्रिक: 'I' विशेष है, हमेशा 'am'।\n'He/She/It' के साथ 'is'।\nबाकी सब के साथ 'are'।",
                example: "I am happy. (मैं खुश हूँ)\nShe is beautiful. (वह सुंदर है)\nYou are great. (तुम बढ़िया हो)\nThey are working. (वे काम कर रहे हैं)",
                audio: true
            },
            {
                heading: "Common Mistakes - आम ग़लतियाँ",
                headingHindi: "ये ग़लतियाँ मत करें!",
                text: "WRONG → RIGHT\n'I is happy' ✗ → 'I am happy' ✓\n'You great' ✗ → 'You are great' ✓\n'She beautiful' ✗ → 'She is beautiful' ✓\n'They good' ✗ → 'They are good' ✓",
                textHindi: "हमेशा is/am/are ज़रूर लगाएं! बिना इसके वाक्य अधूरा है।"
            }
        ],
        practice: [
            {
                type: "sentence-builder",
                sentence: "I am tired",
                promptHindi: "मैं थकी हुई हूँ (I के साथ हमेशा AM)"
            },
            {
                type: "sentence-builder",
                sentence: "You are wonderful",
                promptHindi: "तुम अद्भुत हो (You के साथ ARE)"
            },
            {
                type: "sentence-builder",
                sentence: "She is my sister",
                promptHindi: "वह मेरी बहन है (She के साथ IS)"
            },
            {
                type: "sentence-builder",
                sentence: "We are learning English",
                promptHindi: "हम अंग्रेज़ी सीख रहे हैं (We के साथ ARE)"
            }
        ]
    },
    {
        id: 4,
        day: 4,
        title: "Day 4: Spelling - Sahi Tarah Se Likhna Seekhein",
        type: "lesson",
        content: [
            {
                heading: "Common Household Words - घर की चीज़ें",
                headingHindi: "रोज़ इस्तेमाल होने वाली चीज़ें - सही spelling",
                text: "Let's learn the correct spelling of things you use every day. Pay attention to each letter!",
                textHindi: "चलिए सीखते हैं उन चीज़ों की सही spelling जो आप रोज़ इस्तेमाल करते हैं। हर अक्षर पर ध्यान दें!"
            },
            {
                heading: "Table (मेज़) - Not 'tebal'",
                headingHindi: "TABLE - T-A-B-L-E",
                text: "Correct: TABLE (T-A-B-L-E)\nWrong: tebal, tebel\n\nRemember: 'a' comes after 't', then 'b', 'l', 'e'",
                textHindi: "सही: TABLE (टी-ए-बी-एल-ई)\nग़लत: tebal, tebel\n\nयाद रखें: 't' के बाद 'a', फिर 'b', 'l', 'e'",
                example: "The table is big. (मेज़ बड़ी है)\nPut it on the table. (इसे मेज़ पर रखो)",
                audio: true
            },
            {
                heading: "Chair (कुर्सी) - Not 'cheer'",
                headingHindi: "CHAIR - C-H-A-I-R",
                text: "Correct: CHAIR (C-H-A-I-R)\nWrong: cheer, cher\n\nRemember: C-H-A-I-R (not 'cheer' which means खुशी की आवाज़)",
                textHindi: "सही: CHAIR (सी-एच-ए-आई-आर)\nग़लत: cheer, cher\n\nयाद रखें: CHAIR है कुर्सी, CHEER है खुशी",
                example: "Sit on the chair. (कुर्सी पर बैठो)\nThe chair is comfortable. (कुर्सी आरामदायक है)",
                audio: true
            },
            {
                heading: "Knife (चाकू) - Not 'naif'",
                headingHindi: "KNIFE - K-N-I-F-E",
                text: "Correct: KNIFE (K-N-I-F-E)\nWrong: naif, nife\n\nTricky: 'K' is silent! We don't say the 'K' sound.\nPronounced: 'NIFE' but written: KNIFE",
                textHindi: "सही: KNIFE (के-एन-आई-एफ-ई)\nग़लत: naif, nife\n\nमुश्किल: 'K' चुप रहता है! हम 'K' की आवाज़ नहीं करते।\nबोलते हैं: 'नाइफ़' पर लिखते हैं: KNIFE",
                example: "I need a knife. (मुझे एक चाकू चाहिए)\nThe knife is sharp. (चाकू तेज़ है)",
                audio: true
            },
            {
                heading: "More Practice Words",
                headingHindi: "और शब्द - ध्यान से लिखें",
                text: "Glass (गिलास) - G-L-A-S-S\nDoor (दरवाज़ा) - D-O-O-R (two 'O's)\nWindow (खिड़की) - W-I-N-D-O-W\nFan (पंखा) - F-A-N\nBed (बिस्तर) - B-E-D",
                textHindi: "Glass = गिलास\nDoor = दरवाज़ा (दो 'O' हैं)\nWindow = खिड़की\nFan = पंखा\nBed = बिस्तर",
                example: "The glass is on the table. (गिलास मेज़ पर है)\nOpen the door. (दरवाज़ा खोलो)",
                audio: true
            }
        ],
        practice: [
            {
                type: "writing",
                sentence: "The chair is near the table",
                promptHindi: "कुर्सी मेज़ के पास है (chair और table की spelling ध्यान से)"
            },
            {
                type: "writing",
                sentence: "I need a knife and a glass",
                promptHindi: "मुझे एक चाकू और एक गिलास चाहिए"
            },
            {
                type: "writing",
                sentence: "The bed is big",
                promptHindi: "बिस्तर बड़ा है"
            }
        ]
    },
    {
        id: 5,
        day: 5,
        title: "Day 5: Feelings & Emotions - भावनाएँ बताना",
        type: "lesson",
        content: [
            {
                heading: "Why Learn Feelings?",
                headingHindi: "भावनाएँ क्यों सीखें?",
                text: "Every day we feel different emotions. Learning to express them in English helps you communicate better.\n'How are you?' is a common question - you need to answer!",
                textHindi: "हर दिन हम अलग-अलग भावनाएँ महसूस करते हैं। अंग्रेज़ी में इन्हें बताना सीखने से आप बेहतर बात कर सकते हैं।\n'How are you?' एक आम सवाल है - आपको जवाब देना ज़रूरी है!"
            },
            {
                heading: "Basic Feelings - बुनियादी भावनाएँ",
                headingHindi: "रोज़ इस्तेमाल होने वाली भावनाएँ",
                text: "Happy (खुश) - H-A-P-P-Y\nSad (उदास) - S-A-D\nAngry (गुस्सा) - A-N-G-R-Y (not 'angri')\nTired (थका हुआ) - T-I-R-E-D\nExcited (उत्साहित) - E-X-C-I-T-E-D",
                textHindi: "Happy = खुश\nSad = उदास\nAngry = गुस्सा (angri ✗, angry ✓)\nTired = थका हुआ\nExcited = उत्साहित",
                example: "I am happy today. (मैं आज खुश हूँ)\nShe is sad. (वह उदास है)\nHe is angry. (वह गुस्से में है)\nI am tired. (मैं थकी हुई हूँ)",
                audio: true
            },
            {
                heading: "More Feelings",
                headingHindi: "और भावनाएँ",
                text: "Scared/Afraid (डरा हुआ) - S-C-A-R-E-D or A-F-R-A-I-D\nWorried (चिंतित) - W-O-R-R-I-E-D\nBored (ऊबा हुआ) - B-O-R-E-D\nSurprised (हैरान) - S-U-R-P-R-I-S-E-D\nLonely (अकेला) - L-O-N-E-L-Y",
                textHindi: "Scared = डरा हुआ\nWorried = चिंतित\nBored = ऊबा हुआ\nSurprised = हैरान\nLonely = अकेला",
                example: "I am worried about the exam. (मैं परीक्षा को लेकर चिंतित हूँ)\nShe is surprised. (वह हैरान है)",
                audio: true
            },
            {
                heading: "Using Feelings in Sentences - वाक्य में इस्तेमाल",
                headingHindi: "भावनाओं का इस्तेमाल कैसे करें",
                text: "Pattern: Subject + am/is/are + feeling\n\nI am happy.\nYou are sad.\nHe is angry.\nWe are excited.\nThey are tired.",
                textHindi: "पैटर्न: कर्ता + am/is/are + भावना\n\nमैं खुश हूँ। - I am happy.\nतुम उदास हो। - You are sad.\nवह गुस्से में है। - He is angry.",
                example: "How are you feeling?\n→ I am feeling happy.\n→ I am feeling tired.",
                audio: true
            }
        ],
        practice: [
            {
                type: "sentence-builder",
                sentence: "I am happy today",
                promptHindi: "मैं आज खुश हूँ"
            },
            {
                type: "sentence-builder",
                sentence: "She is angry with me",
                promptHindi: "वह मुझसे गुस्सा है (angry की spelling याद रखें)"
            },
            {
                type: "sentence-builder",
                sentence: "We are tired after work",
                promptHindi: "हम काम के बाद थके हुए हैं"
            },
            {
                type: "writing",
                sentence: "I am feeling sad and lonely",
                promptHindi: "मैं उदास और अकेला महसूस कर रहा हूँ"
            }
        ]
    }
];

// Export for use in app
export default curriculum;
