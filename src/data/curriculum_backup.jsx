export const curriculum = Array.from({ length: 100 }, (_, i) => {
    const day = i + 1;
    let title = `Day ${day}: Concept`;
    let content = [];
    let type = "lesson";
    let practice = [];

    if (day <= 5) {
        const detailedLessons = [
            {
                title: "The Three Times (Tenses)",
                sections: [
                    {
                        heading: "Concept: Time in English",
                        headingHindi: "संकल्पना: अंग्रेजी में समय (Tenses)",
                        text: "In English, verbs change depending on WHEN the action happens. There are three main times:",
                        textHindi: "अंग्रेजी में, क्रिया (verb) इस आधार पर बदलती है कि काम कब हुआ। तीन मुख्य समय होते हैं:"
                    },
                    {
                        heading: "1. Past (Tha/The/Thi)",
                        headingHindi: "1. भूतकाल (था/थे/थी)",
                        text: "Action finished yesterday or before. We often use the 2nd form of the verb (e.g., Eat -> Ate).",
                        textHindi: "काम कल या उससे पहले खत्म हो गया। हम अक्सर क्रिया के दूसरे रूप का उपयोग करते हैं (जैसे, Eat -> Ate)।",
                        example: "I ate an apple. (मैंने एक सेब खाया)\nI was sad. (मैं दुखी था)",
                        audio: true
                    },
                    {
                        heading: "2. Present (Hai/Hoon)",
                        headingHindi: "2. वर्तमान काल (है/हूँ)",
                        text: "Action happening now or happens everyday. We use the 1st form (e.g., Eat).",
                        textHindi: "काम अभी हो रहा है या रोज होता है। हम पहले रूप का उपयोग करते हैं (जैसे, Eat)।",
                        example: "I eat breakfast. (मैं नाश्ता करता हूँ)\nI am happy. (मैं खुश हूँ)",
                        audio: true
                    },
                    {
                        heading: "3. Future (Gaa/Ge/Gi)",
                        headingHindi: "3. भविष्य काल (गा/गे/गी)",
                        text: "Action will happen tomorrow or later. We add 'Will' before the verb.",
                        textHindi: "काम कल या बाद में होगा। हम क्रिया से पहले 'Will' जोड़ते हैं।",
                        example: "I will eat dinner. (मैं रात का खाना खाऊंगा)\nI will be ready. (मैं तैयार रहूंगा)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "I drank water yesterday",
                        promptHindi: "मैंने कल पानी पिया (Past: Drink -> Drank)"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "I will go to the market",
                        promptHindi: "मैं बाजार जाऊंगा (Future)"
                    }
                ]
            },
            {
                title: "Present Tense: Daily Habits",
                sections: [
                    {
                        heading: "Simple Present Tense",
                        headingHindi: "सामान्य वर्तमान काल (Daily Habits)",
                        text: "We use this for things we do every day. In Hindi, sentences ending with 'ta hai', 'ti hai'.",
                        textHindi: "हम इसका उपयोग उन चीजों के लिए करते हैं जो हम रोज करते हैं। हिंदी में, वाक्य 'ता है', 'ती है' के साथ समाप्त होते हैं।"
                    },
                    {
                        heading: "Structure",
                        headingHindi: "बनावट",
                        text: "Subject + Verb (First Form). No 'is/am/are' here!",
                        textHindi: "कर्ता + क्रिया (पहला रूप)। यहाँ 'is/am/are' नहीं लगता!",
                        example: "I drink tea. (मैं चाय पीता हूँ)\nYou play cricket. (तुम क्रिकेट खेलते हो)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "I read books everyday",
                        promptHindi: "मैं रोज किताबें पढ़ता हूँ"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "We cook food in the morning",
                        promptHindi: "हम सुबह खाना बनाते हैं"
                    }
                ]
            },
            {
                title: "Past Tense: Yesterday",
                sections: [
                    {
                        heading: "Simple Past Tense",
                        headingHindi: "सामान्य भूतकाल (Yesterday)",
                        text: "Used for actions that are finished. Hindi: 'ya', 'yi', 'ye', 'tha'.",
                        textHindi: "उन कार्यों के लिए उपयोग किया जाता है जो समाप्त हो गए हैं। हिंदी: 'या', 'यी', 'ये', 'था'।"
                    },
                    {
                        heading: "Verb Forms (2nd Form)",
                        headingHindi: "क्रिया के रूप (दूसरा रूप)",
                        text: "Verbs change in the past. You must remember these:\nGo -> Went\nEat -> Ate\nDrink -> Drank\nSleep -> Slept",
                        textHindi: "भूतकाल में क्रिया बदल जाती है। आपको इन्हें याद रखना होगा:\nGo -> Went\nEat -> Ate\nDrink -> Drank\nSleep -> Slept",
                        example: "I went to the park. (मैं पार्क गया)\nI slept early. (मैं जल्दी सो गया)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "I ate lunch at 2 PM",
                        promptHindi: "मैंने दोपहर 2 बजे खाना खाया (Eat -> Ate)"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "She came to my house",
                        promptHindi: "वह मेरे घर आई (Come -> Came)"
                    }
                ]
            },
            {
                title: "Future Tense: Tomorrow",
                sections: [
                    {
                        heading: "Simple Future Tense",
                        headingHindi: "सामान्य भविष्य काल (Tomorrow)",
                        text: "Used for actions that will happen. Hindi: 'ga', 'ge', 'gi'.",
                        textHindi: "उन कार्यों के लिए उपयोग किया जाता है जो होंगे। हिंदी: 'गा', 'गे', 'गी'।"
                    },
                    {
                        heading: "The Helper: Will",
                        headingHindi: "सहायक: Will",
                        text: "Just add 'will' before the verb. The verb stays in 1st form (Go, Eat, Sleep).",
                        textHindi: "बस क्रिया से पहले 'will' जोड़ें। क्रिया पहले रूप में रहती है (Go, Eat, Sleep)।",
                        example: "I will go home. (मैं घर जाऊंगा)\nShe will help you. (वह तुम्हारी मदद करेगी)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "I will call you tomorrow",
                        promptHindi: "मैं तुम्हें कल फोन करूँगा"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "We will watch a movie",
                        promptHindi: "हम एक फिल्म देखेंगे"
                    }
                ]
            },
            {
                title: "Word Choice & Adjectives",
                sections: [
                    {
                        heading: "Confusing Words: Look vs See vs Watch",
                        headingHindi: "भ्रमित करने वाले शब्द: Look vs See vs Watch",
                        text: "See: Just happens naturally (dikha). Look: Focus your eyes (dekho). Watch: Moving things (TV/Movie/Games).",
                        textHindi: "See: बस स्वाभाविक रूप से दिखाई देना। Look: अपनी आँखों को केंद्रित करना (देखो)। Watch: चलती हुई चीजों को देखना (TV/Movie/Games)।",
                        example: "I see a tree. (मुझे एक पेड़ दिख रहा है)\nLook at the board. (बोर्ड को देखो)\nI watch cricket. (मैं क्रिकेट देखता हूँ)",
                        audio: true
                    },
                    {
                        heading: "Adjectives (Review)",
                        headingHindi: "विशेषण (पुनरावृत्ति)",
                        text: "Words that describe things (Good, Bad, Hot, Cold).",
                        textHindi: "शब्द जो चीजों का वर्णन करते हैं (अच्छा, बुरा, गर्म, ठंडा)।",
                        example: "Hot tea (गर्म चाय), Cold water (ठंडा पानी)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "I watch football on Sunday",
                        promptHindi: "मैं रविवार को फुटबॉल देखता हूँ (Watch)"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "Look at the blue sky",
                        promptHindi: "नीले आसमान को देखो (Look)"
                    }
                ]
            }
        ];

        const lesson = detailedLessons[day - 1];
        title = `Day ${day}: ${lesson.title}`;
        content = lesson.sections;
        practice = lesson.practice || [];

    } else if (day <= 10) {
        const detailedLessons = [
            {
                title: "Present Continuous (Happening Now)",
                sections: [
                    {
                        heading: "Concept: Happening Now",
                        headingHindi: "संकल्पना: अभी हो रहा है",
                        text: "Used for actions happening RIGHT NOW. Hindi: 'raha hai', 'rahi hai'.",
                        textHindi: "उन कार्यों के लिए जो अभी हो रहे हैं। हिंदी: 'रहा है', 'रही है'।"
                    },
                    {
                        heading: "Formula",
                        headingHindi: "सूत्र",
                        text: "Subject + is/am/are + Verb-ing\nI -> am\nHe/She -> is\nYou/We/They -> are",
                        textHindi: "कर्ता + is/am/are + क्रिया-ing\nI -> am\nHe/She -> is\nYou/We/They -> are",
                        example: "I am eating. (मैं खा रहा हूँ)\nShe is sleeping. (वह सो रही है)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "I am walking in the park",
                        promptHindi: "मैं पार्क में चल रहा हूँ"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "They are playing football",
                        promptHindi: "वे फुटबॉल खेल रहे हैं"
                    }
                ]
            },
            {
                title: "Past Continuous (Was Happening)",
                sections: [
                    {
                        heading: "Concept: Was Happening",
                        headingHindi: "संकल्पना: हो रहा था",
                        text: "Action was going on in the past. Hindi: 'raha tha', 'rahi thi'.",
                        textHindi: "काम भूतकाल में चल रहा था। हिंदी: 'रहा था', 'रही थी'।"
                    },
                    {
                        heading: "Formula",
                        headingHindi: "सूत्र",
                        text: "Subject + was/were + Verb-ing\nI/He/She -> was\nYou/We/They -> were",
                        textHindi: "कर्ता + was/were + क्रिया-ing\nI/He/She -> was\nYou/We/They -> were",
                        example: "I was sleeping. (मैं सो रहा था)\nThey were playing. (वे खेल रहे थे)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "He was reading a book",
                        promptHindi: "वह एक किताब पढ़ रहा था"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "We were cooking lunch",
                        promptHindi: "हम दोपहर का खाना बना रहे थे"
                    }
                ]
            },
            {
                title: "Future Continuous (Will be Happening)",
                sections: [
                    {
                        heading: "Concept: Will be Happening",
                        headingHindi: "संकल्पना: हो रहा होगा",
                        text: "Action will be going on in future. Hindi: 'raha hoga'.",
                        textHindi: "काम भविष्य में चल रहा होगा। हिंदी: 'रहा होगा'।"
                    },
                    {
                        heading: "Formula",
                        headingHindi: "सूत्र",
                        text: "Subject + will be + Verb-ing",
                        textHindi: "कर्ता + will be + क्रिया-ing",
                        example: "I will be sleeping. (मैं सो रहा हूंगा)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "She will be waiting at the station",
                        promptHindi: "वह स्टेशन पर इंतजार कर रही होगी"
                    }
                ]
            },
            {
                title: "Prepositions: In, On, At",
                sections: [
                    {
                        heading: "Concept: Position",
                        headingHindi: "संकल्पना: स्थान (Prepositions)",
                        text: "Small words that tell us WHERE something is.",
                        textHindi: "छोटे शब्द जो हमें बताते हैं कि कोई चीज कहाँ है।"
                    },
                    {
                        heading: "In (Mein) vs On (Par)",
                        headingHindi: "In (में) vs On (पर)",
                        text: "In: Inside (Box, Room). On: Surface (Table, Wall).",
                        textHindi: "In: अंदर (डिब्बा, कमरा)। On: सतह (मेज़, दीवार)।",
                        example: "In the box. (डिब्बे में)\nOn the table. (मेज़ पर)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "The clothes are in the cupboard",
                        promptHindi: "कपड़े अलमारी में हैं"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "The phone is on the bed",
                        promptHindi: "फोन बिस्तर पर है"
                    }
                ]
            },
            {
                title: "Review & Quiz (Days 1-9)",
                sections: [
                    {
                        heading: "Review Time!",
                        headingHindi: "समीक्षा का समय!",
                        text: "Let's test what you learned. Remember: Tenses change the verb form.",
                        textHindi: "आइए देखें कि आपने क्या सीखा है। याद रखें: काल क्रिया के रूप को बदलते हैं।"
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "I drank tea yesterday",
                        promptHindi: "मैंने कल चाय पी (Past)"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "She is walking in the garden",
                        promptHindi: "वह बगीचे में चल रही है (Present Continuous)"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "The keys are on the table",
                        promptHindi: "चाबियाँ मेज़ पर हैं (On)"
                    }
                ]
            }
        ];

        const lesson = detailedLessons[day - 6];
        title = `Day ${day}: ${lesson.title}`;
        content = lesson.sections;
        practice = lesson.practice || [];

    } else if (day <= 20) {
        const detailedLessons = [
            {
                title: "Questions: Do/Does",
                sections: [
                    {
                        heading: "Asking Questions (Present)",
                        headingHindi: "प्रश्न पूछना (वर्तमान)",
                        text: "To ask 'Yes/No' questions in Present Tense, start with Do or Does.",
                        textHindi: "वर्तमान काल में 'हाँ/नहीं' प्रश्न पूछने के लिए, Do या Does से शुरू करें।"
                    },
                    {
                        heading: "Rule",
                        headingHindi: "नियम",
                        text: "I, You, We, They -> Do\nHe, She, It, Name -> Does",
                        textHindi: "I, You, We, They -> Do\nHe, She, It, Name -> Does",
                        example: "Do you eat? (क्या तुम खाते हो?)\nDoes she cook? (क्या वह खाना बनाती है?)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "Do you sleep early",
                        promptHindi: "क्या तुम जल्दी सोते हो?"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "Does he work here",
                        promptHindi: "क्या वह यहाँ काम करता है?"
                    }
                ]
            },
            {
                title: "Questions: Did (Past)",
                sections: [
                    {
                        heading: "Asking Questions (Past)",
                        headingHindi: "प्रश्न पूछना (भूतकाल)",
                        text: "For Past Tense, always use 'Did'. Important: The verb goes back to First Form!",
                        textHindi: "भूतकाल के लिए, हमेशा 'Did' का प्रयोग करें। महत्वपूर्ण: क्रिया पहले रूप (First Form) में वापस आ जाती है!"
                    },
                    {
                        heading: "Rule",
                        headingHindi: "नियम",
                        text: "Did + Subject + Verb (1st Form). NOT 'Did you ate', but 'Did you eat'.",
                        textHindi: "Did + कर्ता + क्रिया (पहला रूप)। 'Did you ate' नहीं, बल्कि 'Did you eat'।",
                        example: "Did you eat? (क्या तुमने खाया?)\nDid she go? (क्या वह गई?)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "Did you watch the movie",
                        promptHindi: "क्या तुमने फिल्म देखी?"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "Did she call you",
                        promptHindi: "क्या उसने तुम्हें फोन किया?"
                    }
                ]
            },
            {
                title: "Questions: Will (Future)",
                sections: [
                    {
                        heading: "Asking Questions (Future)",
                        headingHindi: "प्रश्न पूछना (भविष्य)",
                        text: "For Future Tense, start with 'Will'.",
                        textHindi: "भविष्य काल के लिए, 'Will' से शुरू करें।"
                    },
                    {
                        heading: "Rule",
                        headingHindi: "नियम",
                        text: "Will + Subject + Verb",
                        textHindi: "Will + कर्ता + क्रिया",
                        example: "Will you come? (क्या तुम आओगे?)\nWill it rain? (क्या बारिश होगी?)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "Will you cook dinner",
                        promptHindi: "क्या तुम रात का खाना बनाओगे?"
                    }
                ]
            },
            {
                title: "WH Questions (What, Where)",
                sections: [
                    {
                        heading: "Information Questions",
                        headingHindi: "जानकारी वाले प्रश्न",
                        text: "Use these words to ask for details, not just Yes/No.",
                        textHindi: "विवरण पूछने के लिए इन शब्दों का प्रयोग करें, केवल हाँ/नहीं के लिए नहीं।"
                    },
                    {
                        heading: "Words",
                        headingHindi: "शब्द",
                        text: "What (Kya) - Thing\nWhere (Kahan) - Place\nWhen (Kab) - Time",
                        textHindi: "What (क्या) - वस्तु\nWhere (कहाँ) - स्थान\nWhen (कब) - समय",
                        example: "What is this? (यह क्या है?)\nWhere are you? (तुम कहाँ हो?)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "Where is your house",
                        promptHindi: "तुम्हारा घर कहाँ है?"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "When will you come",
                        promptHindi: "तुम कब आओगे?"
                    }
                ]
            },
            {
                title: "How Questions",
                sections: [
                    {
                        heading: "How (Kaise)",
                        headingHindi: "How (कैसे)",
                        text: "Asking about manner or quantity.",
                        textHindi: "तरीका या मात्रा पूछना।"
                    },
                    {
                        heading: "How much vs How many",
                        headingHindi: "How much vs How many",
                        text: "How many: Countable (Apples, Pens). How much: Uncountable (Water, Sugar).",
                        textHindi: "How many: गिनने योग्य (सेब, पेन)। How much: न गिनने योग्य (पानी, चीनी)।",
                        example: "How are you? (तुम कैसे हो?)\nHow many apples? (कितने सेब?)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "How much water do you want",
                        promptHindi: "तुम्हें कितना पानी चाहिए?"
                    }
                ]
            },
            {
                title: "Modals: Can (Ability)",
                sections: [
                    {
                        heading: "Can (Sakta hai)",
                        headingHindi: "Can (सकता है)",
                        text: "Shows ability or power to do something.",
                        textHindi: "कुछ करने की क्षमता या शक्ति को दर्शाता है।"
                    },
                    {
                        heading: "Rule",
                        headingHindi: "नियम",
                        text: "Subject + Can + Verb (1st Form)",
                        textHindi: "कर्ता + Can + क्रिया (पहला रूप)",
                        example: "I can swim. (मैं तैर सकता हूँ)\nShe can speak English. (वह अंग्रेजी बोल सकती है)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "I can run very fast",
                        promptHindi: "मैं बहुत तेज दौड़ सकता हूँ"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "Can you drive a car",
                        promptHindi: "क्या तुम कार चला सकते हो?"
                    }
                ]
            },
            {
                title: "Modals: Should (Advice)",
                sections: [
                    {
                        heading: "Should (Chahiye)",
                        headingHindi: "Should (चाहिए)",
                        text: "Used to give advice or say what is right.",
                        textHindi: "सलाह देने या क्या सही है यह कहने के लिए उपयोग किया जाता है।"
                    },
                    {
                        heading: "Rule",
                        headingHindi: "नियम",
                        text: "Subject + Should + Verb",
                        textHindi: "कर्ता + Should + क्रिया",
                        example: "You should sleep. (तुम्हें सोना चाहिए)\nWe should go. (हमें जाना चाहिए)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "You should eat fruits",
                        promptHindi: "तुम्हें फल खाने चाहिए"
                    }
                ]
            },
            {
                title: "Modals: Must (Necessity)",
                sections: [
                    {
                        heading: "Must (Jarur Chahiye)",
                        headingHindi: "Must (जरूर चाहिए)",
                        text: "Stronger than should. It is necessary.",
                        textHindi: "Should से ज्यादा मजबूत। यह जरूरी है।"
                    },
                    {
                        heading: "Example",
                        headingHindi: "उदाहरण",
                        text: "You must stop. (तुम्हें जरूर रुकना चाहिए)",
                        textHindi: "You must stop. (तुम्हें जरूर रुकना चाहिए)",
                        example: "You must wear a mask. (तुम्हें मास्क जरूर पहनना चाहिए)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "We must save water",
                        promptHindi: "हमें पानी जरूर बचाना चाहिए"
                    }
                ]
            },
            {
                title: "Modals: May/Might (Possibility)",
                sections: [
                    {
                        heading: "May/Might (Shayad)",
                        headingHindi: "May/Might (शायद)",
                        text: "Used when we are not sure. 50-50 chance.",
                        textHindi: "जब हम सुनिश्चित नहीं होते हैं तब उपयोग किया जाता है। 50-50 संभावना।",
                        example: "It may rain. (बारिश हो सकती है)\nHe might come. (वह शायद आएगा)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "She may come tomorrow",
                        promptHindi: "वह शायद कल आएगी"
                    }
                ]
            },
            {
                title: "Review & Quiz (Days 11-19)",
                sections: [
                    {
                        heading: "Mid-Month Review",
                        headingHindi: "मध्य महीने की समीक्षा",
                        text: "Reviewing Questions and Modals.",
                        textHindi: "प्रश्नों और Modals की समीक्षा।"
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "Can you cook dinner",
                        promptHindi: "क्या तुम रात का खाना बना सकते हो? (Can)"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "Did you see the bird",
                        promptHindi: "क्या तुमने पक्षी को देखा? (Did)"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "You should walk everyday",
                        promptHindi: "तुम्हें रोज चलना चाहिए (Should)"
                    }
                ]
            }
        ];

        const lesson = detailedLessons[day - 11];
        title = `Day ${day}: ${lesson.title}`;
        content = lesson.sections;
        practice = lesson.practice || [];

    } else if (day <= 30) {
        type = "writing"; // Enable writing mode for these days
        const detailedLessons = [
            {
                title: "Conversation: Introduction",
                sections: [
                    {
                        heading: "Meeting New People",
                        headingHindi: "नए लोगों से मिलना",
                        text: "How to introduce yourself and ask about others.",
                        textHindi: "अपना परिचय कैसे दें और दूसरों के बारे में कैसे पूछें।",
                        example: "Hello, my name is Arnesh.\nNice to meet you.",
                        audio: true
                    }
                ],
                practice: [
                    {
                        sentence: "I am from India",
                        promptHindi: "मैं भारत से हूँ"
                    },
                    {
                        sentence: "What is your name",
                        promptHindi: "तुम्हारा नाम क्या है?"
                    }
                ]
            },
            {
                title: "Conversation: Family",
                sections: [
                    {
                        heading: "Talking about Family",
                        headingHindi: "परिवार के बारे में बात करना",
                        text: "Words for family members.",
                        textHindi: "परिवार के सदस्यों के लिए शब्द।",
                        example: "This is my mother.\nI have two brothers.",
                        audio: true
                    }
                ],
                practice: [
                    {
                        sentence: "My father is a doctor",
                        promptHindi: "मेरे पिता एक डॉक्टर हैं"
                    },
                    {
                        sentence: "I live with my family",
                        promptHindi: "मैं अपने परिवार के साथ रहता हूँ"
                    }
                ]
            },
            {
                title: "Conversation: Shopping",
                sections: [
                    {
                        heading: "At the Market",
                        headingHindi: "बाजार में",
                        text: "Buying things and asking price.",
                        textHindi: "चीजें खरीदना और कीमत पूछना।",
                        example: "How much is this?\nI want to buy vegetables.",
                        audio: true
                    }
                ],
                practice: [
                    {
                        sentence: "Do you have fresh apples",
                        promptHindi: "क्या आपके पास ताजे सेब हैं?"
                    },
                    {
                        sentence: "This is too expensive",
                        promptHindi: "यह बहुत महंगा है"
                    }
                ]
            },
            {
                title: "Conversation: Directions",
                sections: [
                    {
                        heading: "Asking for Way",
                        headingHindi: "रास्ता पूछना",
                        text: "How to ask where a place is.",
                        textHindi: "कैसे पूछें कि कोई जगह कहाँ है।",
                        example: "Where is the bank?\nGo straight and turn left.",
                        audio: true
                    }
                ],
                practice: [
                    {
                        sentence: "Is the park near here",
                        promptHindi: "क्या पार्क यहाँ पास में है?"
                    },
                    {
                        sentence: "Go straight then turn right",
                        promptHindi: "सीधे जाओ फिर दाएं मुड़ो"
                    }
                ]
            },
            {
                title: "Conversation: Health",
                sections: [
                    {
                        heading: "Feeling Sick",
                        headingHindi: "बीमार महसूस करना",
                        text: "Telling a doctor how you feel.",
                        textHindi: "डॉक्टर को बताना कि आप कैसा महसूस कर रहे हैं।",
                        example: "I have a headache.\nI need medicine.",
                        audio: true
                    }
                ],
                practice: [
                    {
                        sentence: "My stomach hurts",
                        promptHindi: "मेरा पेट दुख रहा है"
                    },
                    {
                        sentence: "I want to see a doctor",
                        promptHindi: "मैं डॉक्टर को दिखाना चाहता हूँ"
                    }
                ]
            },
            {
                title: "Writing: Daily Routine",
                sections: [
                    {
                        heading: "My Day",
                        headingHindi: "मेरा दिन",
                        text: "Describing what you do all day.",
                        textHindi: "दिन भर आप क्या करते हैं, इसका वर्णन करना।",
                        example: "I wake up at 6 AM.\nI cook breakfast.",
                        audio: true
                    }
                ],
                practice: [
                    {
                        sentence: "I go to sleep at 10 PM",
                        promptHindi: "मैं रात 10 बजे सो जाता हूँ"
                    },
                    {
                        sentence: "I watch TV in the evening",
                        promptHindi: "मैं शाम को टीवी देखता हूँ"
                    }
                ]
            },
            {
                title: "Writing: Past Events",
                sections: [
                    {
                        heading: "What happened?",
                        headingHindi: "क्या हुआ?",
                        text: "Writing about yesterday.",
                        textHindi: "कल के बारे में लिखना।",
                        example: "I went to the park.\nI met my friend.",
                        audio: true
                    }
                ],
                practice: [
                    {
                        sentence: "I cooked a delicious meal",
                        promptHindi: "मैंने एक स्वादिष्ट खाना बनाया"
                    }
                ]
            },
            {
                title: "Writing: Future Plans",
                sections: [
                    {
                        heading: "What will you do?",
                        headingHindi: "आप क्या करेंगे?",
                        text: "Writing about tomorrow.",
                        textHindi: "कल के बारे में लिखना।",
                        example: "I will go to Delhi.\nI will buy a new saree.",
                        audio: true
                    }
                ],
                practice: [
                    {
                        sentence: "We will go for a picnic",
                        promptHindi: "हम पिकनिक पर जाएंगे"
                    }
                ]
            },
            {
                title: "Writing: Likes & Dislikes",
                sections: [
                    {
                        heading: "Favorites",
                        headingHindi: "पसंदीदा",
                        text: "Talking about what you love and hate.",
                        textHindi: "आप क्या पसंद करते हैं और क्या नापसंद, इस बारे में बात करना।",
                        example: "I like tea.\nI do not like coffee.",
                        audio: true
                    }
                ],
                practice: [
                    {
                        sentence: "I love indian food",
                        promptHindi: "मुझे भारतीय खाना पसंद है"
                    },
                    {
                        sentence: "I do not like loud noise",
                        promptHindi: "मुझे तेज शोर पसंद नहीं है"
                    }
                ]
            },
            {
                title: "Review: Conversations",
                sections: [
                    {
                        heading: "Monthly Review",
                        headingHindi: "मासिक समीक्षा",
                        text: "Practice everything from this month.",
                        textHindi: "इस महीने की हर चीज का अभ्यास करें।"
                    }
                ],
                practice: [
                    {
                        sentence: "How much for this dress",
                        promptHindi: "यह ड्रेस कितने की है?"
                    },
                    {
                        sentence: "I am not feeling well",
                        promptHindi: "मेरी तबीयत ठीक नहीं है"
                    },
                    {
                        sentence: "Can you help me please",
                        promptHindi: "क्या आप कृपया मेरी मदद कर सकते हैं?"
                    }
                ]
            }
        ];

        const lesson = detailedLessons[day - 21];
        title = `Day ${day}: ${lesson.title}`;
        content = lesson.sections;
        practice = lesson.practice || [];

    } else if (day <= 40) {
        const detailedLessons = [
            {
                title: "Adverbs (How?)",
                sections: [
                    {
                        heading: "Adverbs of Manner",
                        headingHindi: "क्रिया विशेषण (तरीका)",
                        text: "Words that tell us HOW an action is done. Often end in 'ly'.",
                        textHindi: "शब्द जो हमें बताते हैं कि कोई काम कैसे किया जाता है। अक्सर 'ly' पर समाप्त होते हैं।",
                        example: "He runs quickly. (वह तेज दौड़ता है)\nShe speaks softly. (वह धीरे बोलती है)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "The turtle walks slowly",
                        promptHindi: "कछुआ धीरे चलता है"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "Please speak loudly",
                        promptHindi: "कृपया जोर से बोलें"
                    }
                ]
            },
            {
                title: "Comparisons (Better/Faster)",
                sections: [
                    {
                        heading: "Comparing Two Things",
                        headingHindi: "दो चीजों की तुलना",
                        text: "When we compare 2 things, we add 'er' to the word + 'than'.",
                        textHindi: "जब हम 2 चीजों की तुलना करते हैं, तो हम शब्द में 'er' + 'than' जोड़ते हैं।",
                        example: "I am taller than you. (मैं तुमसे लंबा हूँ)\nThis car is faster. (यह कार तेज है)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "My house is bigger than yours",
                        promptHindi: "मेरा घर तुम्हारे घर से बड़ा है"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "She is older than me",
                        promptHindi: "वह मुझसे बड़ी है"
                    }
                ]
            },
            {
                title: "Superlatives (Best/Fastest)",
                sections: [
                    {
                        heading: "The Most/Best",
                        headingHindi: "सबसे ज्यादा/सबसे अच्छा",
                        text: "When comparing 3 or more things. We use 'The' + word ending in 'est'.",
                        textHindi: "जब 3 या उससे अधिक चीजों की तुलना करते हैं। हम 'The' + 'est' वाला शब्द उपयोग करते हैं।",
                        example: "He is the tallest boy. (वह सबसे लंबा लड़का है)\nThis is the best food. (यह सबसे अच्छा खाना है)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "Mount Everest is the highest mountain",
                        promptHindi: "माउंट एवरेस्ट सबसे ऊंचा पहाड़ है"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "She is the smartest student",
                        promptHindi: "वह सबसे होशियार छात्रा है"
                    }
                ]
            },
            {
                title: "Connecting Words",
                sections: [
                    {
                        heading: "And, But, Because",
                        headingHindi: "और, लेकिन, क्योंकि",
                        text: "And: Add info. But: Opposite info. Because: Reason.",
                        textHindi: "And: जानकारी जोड़ें। But: विपरीत जानकारी। Because: कारण।",
                        example: "I like tea and coffee.\nI ran but I was late.\nI am happy because I won.",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "I want tea but no sugar",
                        promptHindi: "मुझे चाय चाहिए लेकिन चीनी नहीं"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "He is crying because he fell",
                        promptHindi: "वह रो रहा है क्योंकि वह गिर गया"
                    }
                ]
            },
            {
                title: "Time: At, On, In",
                sections: [
                    {
                        heading: "Prepositions of Time",
                        headingHindi: "समय के पूर्वसर्ग",
                        text: "At: Exact time (At 5 PM). On: Days (On Sunday). In: Months/Years (In 2024).",
                        textHindi: "At: सटीक समय (5 बजे)। On: दिन (रविवार को)। In: महीने/साल (2024 में)।",
                        example: "I wake up at 6 AM.\nWe meet on Monday.\nMy birthday is in June.",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "The party is on Friday",
                        promptHindi: "पार्टी शुक्रवार को है"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "I sleep at 10 PM",
                        promptHindi: "मैं रात 10 बजे सोता हूँ"
                    }
                ]
            },
            {
                title: "Possessives (Mine/Yours)",
                sections: [
                    {
                        heading: "Ownership",
                        headingHindi: "स्वामित्व",
                        text: "Showing who something belongs to. Mine, Yours, His, Hers, Ours, Theirs.",
                        textHindi: "यह दिखाना कि कोई चीज किसकी है। मेरा, तुम्हारा, उसका, हमारा, उनका।",
                        example: "This book is mine. (यह किताब मेरी है)\nIs this pen yours? (क्या यह पेन तुम्हारा है?)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "That car is ours",
                        promptHindi: "वह कार हमारी है"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "The blue bag is his",
                        promptHindi: "नीला बैग उसका है"
                    }
                ]
            },
            {
                title: "This, That, These, Those",
                sections: [
                    {
                        heading: "Demonstratives",
                        headingHindi: "संकेतवाचक",
                        text: "This/These: Near. That/Those: Far.\nThis/That: Single. These/Those: Many.",
                        textHindi: "This/These: पास। That/Those: दूर।\nThis/That: एक। These/Those: अनेक।",
                        example: "This is my apple. (यह मेरा सेब है)\nThose are birds. (वे पक्षी हैं)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "These flowers are beautiful",
                        promptHindi: "ये फूल सुंदर हैं"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "Give me that book",
                        promptHindi: "मुझे वह किताब दो"
                    }
                ]
            },
            {
                title: "There is / There are",
                sections: [
                    {
                        heading: "Existence",
                        headingHindi: "अस्तित्व",
                        text: "To say something exists. 'There is' for one, 'There are' for many.",
                        textHindi: "यह कहने के लिए कि कुछ मौजूद है। एक के लिए 'There is', अनेक के लिए 'There are'।"
                    },
                    {
                        heading: "Example",
                        headingHindi: "उदाहरण",
                        text: "There is a cat. (एक बिल्ली है)\nThere are two dogs. (दो कुत्ते हैं)",
                        textHindi: "There is a cat. (एक बिल्ली है)\nThere are two dogs. (दो कुत्ते हैं)",
                        example: "There is water in the glass.\nThere are stars in the sky.",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "There is a spider on the wall",
                        promptHindi: "दीवार पर एक मकड़ी है"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "There are many people here",
                        promptHindi: "यहाँ बहुत सारे लोग हैं"
                    }
                ]
            },
            {
                title: "Giving Orders (Imperatives)",
                sections: [
                    {
                        heading: "Orders & Requests",
                        headingHindi: "आदेश और अनुरोध",
                        text: "Start directly with the verb. Use 'Don't' for negative.",
                        textHindi: "सीधे क्रिया से शुरू करें। नकारात्मक के लिए 'Don't' का प्रयोग करें।",
                        example: "Come here. (यहाँ आओ)\nDon't touch that. (उसे मत छुओ)\nPlease sit down. (कृपया बैठ जाइए)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "Open the door please",
                        promptHindi: "कृपया दरवाजा खोलो"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "Do not run in the house",
                        promptHindi: "घर में मत दौड़ो"
                    }
                ]
            },
            {
                title: "Review (Days 31-39)",
                sections: [
                    {
                        heading: "Check Your Progress",
                        headingHindi: "अपनी प्रगति की जाँच करें",
                        text: "Let's practice Adverbs, Comparisons, and Prepositions.",
                        textHindi: "आइए क्रिया विशेषण, तुलना और पूर्वसर्गों का अभ्यास करें।"
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "She runs faster than him",
                        promptHindi: "वह उससे तेज दौड़ती है (Comparison)"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "The meeting is at 4 PM",
                        promptHindi: "बैठक शाम 4 बजे है (At)"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "Please drive slowly",
                        promptHindi: "कृपया धीरे चलाएं (Adverb)"
                    }
                ]
            }
        ];

        const lesson = detailedLessons[day - 31];
        title = `Day ${day}: ${lesson.title}`;
        content = lesson.sections;
        practice = lesson.practice || [];

    } else if (day <= 50) {
        const detailedLessons = [
            {
                title: "Future Plans (Going to)",
                sections: [
                    {
                        heading: "Going to (Wala hoon)",
                        headingHindi: "Going to (वाला हूँ)",
                        text: "Used for plans we have already made. 'I am going to buy a car'.",
                        textHindi: "उन योजनाओं के लिए जो हमने पहले ही बना ली हैं। 'मैं एक कार खरीदने वाला हूँ'।"
                    },
                    {
                        heading: "Structure",
                        headingHindi: "बनावट",
                        text: "Subject + is/am/are + going to + Verb (1st form).",
                        textHindi: "कर्ता + is/am/are + going to + क्रिया (पहला रूप)।",
                        example: "I am going to sleep. (मैं सोने वाला हूँ)\nShe is going to cook. (वह खाना बनाने वाली है)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "I am going to play cricket",
                        promptHindi: "मैं क्रिकेट खेलने वाला हूँ"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "We are going to watch a movie",
                        promptHindi: "हम एक फिल्म देखने वाले हैं"
                    }
                ]
            },
            {
                title: "Obligation (Have to)",
                sections: [
                    {
                        heading: "Have to / Has to",
                        headingHindi: "Have to / Has to (पड़ता है)",
                        text: "Something necessary. 'I have to go'. Hindi: 'Padta hai' or 'Hoga'.",
                        textHindi: "कुछ जरूरी। 'मुझे जाना है'। हिंदी: 'पड़ता है' या 'होगा'।"
                    },
                    {
                        heading: "Rule",
                        headingHindi: "नियम",
                        text: "I/You/We/They -> Have to. He/She/It -> Has to.",
                        textHindi: "I/You/We/They -> Have to. He/She/It -> Has to.",
                        example: "I have to work. (मुझे काम करना है)\nShe has to study. (उसे पढ़ाई करनी है)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "You have to drink water",
                        promptHindi: "तुम्हें पानी पीना होगा"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "He has to go home",
                        promptHindi: "उसे घर जाना है"
                    }
                ]
            },
            {
                title: "Past Habits (Used to)",
                sections: [
                    {
                        heading: "Used to (Kiya karta tha)",
                        headingHindi: "Used to (किया करता था)",
                        text: "Something you did in the past but don't do now.",
                        textHindi: "कुछ ऐसा जो आप अतीत में करते थे लेकिन अब नहीं करते।"
                    },
                    {
                        heading: "Example",
                        headingHindi: "उदाहरण",
                        text: "I used to play football. (Now I don't).",
                        textHindi: "मैं फुटबॉल खेला करता था। (अब मैं नहीं खेलता)।",
                        example: "I used to live in Delhi. (मैं दिल्ली में रहता था)\nShe used to like tea. (उसे चाय पसंद हुआ करती थी)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "I used to wake up early",
                        promptHindi: "मैं जल्दी उठा करता था"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "We used to be friends",
                        promptHindi: "हम दोस्त हुआ करते थे"
                    }
                ]
            },
            {
                title: "Too vs Enough",
                sections: [
                    {
                        heading: "Too (Bahut jyada)",
                        headingHindi: "Too (बहुत ज्यादा)",
                        text: "More than needed. Usually negative. 'Too hot'.",
                        textHindi: "जरूरत से ज्यादा। आमतौर पर नकारात्मक। 'बहुत गर्म'।"
                    },
                    {
                        heading: "Enough (Kaafi)",
                        headingHindi: "Enough (काफी)",
                        text: "As much as needed. 'Good enough'.",
                        textHindi: "जितना चाहिए उतना। 'काफी अच्छा'。",
                        example: "This tea is too hot. (यह चाय बहुत गर्म है)\nI have enough money. (मेरे पास काफी पैसे हैं)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "This box is too heavy",
                        promptHindi: "यह डिब्बा बहुत भारी है"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "Is it big enough",
                        promptHindi: "क्या यह काफी बड़ा है?"
                    }
                ]
            },
            {
                title: "Some vs Any",
                sections: [
                    {
                        heading: "Some (Kuch)",
                        headingHindi: "Some (कुछ)",
                        text: "Used in positive sentences. 'I have some water'.",
                        textHindi: "सकारात्मक वाक्यों में उपयोग किया जाता है। 'मेरे पास कुछ पानी है'।"
                    },
                    {
                        heading: "Any (Koi/Kuch)",
                        headingHindi: "Any (कोई/कुछ)",
                        text: "Used in questions or negative sentences. 'Do you have any water?'.",
                        textHindi: "प्रश्नों या नकारात्मक वाक्यों में उपयोग किया जाता है। 'क्या आपके पास कोई पानी है?'",
                        example: "I want some apples. (मुझे कुछ सेब चाहिए)\nI don't have any money. (मेरे पास कोई पैसे नहीं हैं)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "Give me some milk",
                        promptHindi: "मुझे थोड़ा दूध दो"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "Do you have any questions",
                        promptHindi: "क्या आपका कोई सवाल है?"
                    }
                ]
            },
            {
                title: "Something, Anything, Nothing",
                sections: [
                    {
                        heading: "Indefinite Pronouns",
                        headingHindi: "अनिश्चित सर्वनाम",
                        text: "Something (Positive), Anything (Question/Negative), Nothing (No thing).",
                        textHindi: "Something (सकारात्मक), Anything (प्रश्न/नकारात्मक), Nothing (कुछ नहीं)।",
                        example: "I have something for you. (मेरे पास तुम्हारे लिए कुछ है)\nThere is nothing here. (यहाँ कुछ नहीं है)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "I want to eat something",
                        promptHindi: "मैं कुछ खाना चाहता हूँ"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "I did not see anything",
                        promptHindi: "मैंने कुछ नहीं देखा"
                    }
                ]
            },
            {
                title: "Everybody, Somebody, Nobody",
                sections: [
                    {
                        heading: "People Pronouns",
                        headingHindi: "लोगों के लिए सर्वनाम",
                        text: "Everybody (All), Somebody (One person), Nobody (No one).",
                        textHindi: "Everybody (सब), Somebody (कोई एक), Nobody (कोई नहीं)।",
                        example: "Everybody is happy. (सब खुश हैं)\nNobody is home. (घर पर कोई नहीं है)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "Somebody is at the door",
                        promptHindi: "दरवाजे पर कोई है"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "Nobody likes exams",
                        promptHindi: "परीक्षा किसी को पसंद नहीं है"
                    }
                ]
            },
            {
                title: "Prepositions of Place",
                sections: [
                    {
                        heading: "Where is it?",
                        headingHindi: "यह कहाँ है?",
                        text: "Behind (Peeche), In front of (Samne), Between (Beech mein).",
                        textHindi: "Behind (पीछे), In front of (सामने), Between (बीच में)।",
                        example: "The car is behind the bus. (कार बस के पीछे है)\nI am in front of you. (मैं तुम्हारे सामने हूँ)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "The cat is under the table",
                        promptHindi: "बिल्ली मेज़ के नीचे है"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "Sit between us",
                        promptHindi: "हमारे बीच बैठो"
                    }
                ]
            },
            {
                title: "Conjunctions 2 (So, Or, If)",
                sections: [
                    {
                        heading: "Connecting Ideas",
                        headingHindi: "विचारों को जोड़ना",
                        text: "So (Result), Or (Choice), If (Condition).",
                        textHindi: "So (परिणाम), Or (विकल्प), If (शर्त)।",
                        example: "I was tired so I slept. (मैं थक गया था इसलिए सो गया)\nTea or Coffee? (चाय या कॉफी?)\nIf it rains, I will stay. (अगर बारिश हुई, तो मैं रुकूंगा)",
                        audio: true
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "Do you want tea or coffee",
                        promptHindi: "क्या तुम्हें चाय चाहिए या कॉफी?"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "I am hungry so I will eat",
                        promptHindi: "मुझे भूख लगी है इसलिए मैं खाऊंगा"
                    }
                ]
            },
            {
                title: "Review (Days 41-49)",
                sections: [
                    {
                        heading: "Mid-Course Review",
                        headingHindi: "मध्य-पाठ्यक्रम समीक्षा",
                        text: "Let's practice Future Plans, Obligations, and Quantities.",
                        textHindi: "आइए भविष्य की योजनाओं, दायित्वों और मात्राओं का अभ्यास करें।"
                    }
                ],
                practice: [
                    {
                        type: "sentence-builder",
                        sentence: "I am going to visit my mother",
                        promptHindi: "मैं अपनी माँ से मिलने वाला हूँ (Going to)"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "You have to finish this",
                        promptHindi: "तुम्हें इसे खत्म करना होगा (Have to)"
                    },
                    {
                        type: "sentence-builder",
                        sentence: "There is too much sugar",
                        promptHindi: "बहुत ज्यादा चीनी है (Too)"
                    }
                ]
            }
        ];

        const lesson = detailedLessons[day - 41];
        title = `Day ${day}: ${lesson.title}`;
        content = lesson.sections;
        practice = lesson.practice || [];
    }
    return {
        id: day,
        day,
        title,
        content,
        type,
        practice
    };
});
