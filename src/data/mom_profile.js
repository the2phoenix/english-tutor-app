/**
 * Mom's Learning Profile - Based on Questionnaire Assessment
 * Created: December 2025
 * Age: 46 | Mother Tongue: Hindi | Daily Commitment: 1 hour
 */

export const momProfile = {
    // Basic Information
    age: 46,
    motherTongue: 'Hindi',
    dailyTimeCommitment: 60, // minutes

    // Proficiency Assessment (1-5 scale)
    currentLevel: {
        reading: 3, // Can understand simple sentences well
        writing: 1, // Struggles significantly  
        speaking: 1, // Very low confidence
        listening: 2, // Understands a little
        grammar: 1, // Doesn't understand basics
        thinkingInEnglish: 1 // Cannot think in English
    },

    // Learning Preferences
    preferences: {
        explanationLanguage: 'Hindi', // Prefers Hindi explanations
        learningStyle: 'audio-visual', // Comfortable with voice/audio
        pace: 'slow' // Needs gradual progression
    },

    // Vocabulary Assessment
    vocabulary: {
        householdItems: ['sofa', 'bed', 'table', 'fan', 'glass', 'chair', 'knife', 'TV', 'door', 'window'],
        feelings: ['angry'], // Only knew 2/5, wrote "noti, angri"
        actionVerbs: ['walking', 'talking', 'working', 'making', 'learning'],
        needsImprovement: true // Limited vocabulary, needs expansion
    },

    // Common Spelling Errors (for targeted correction)
    spellingErrors: [
        { incorrect: 'tebal', correct: 'table' },
        { incorrect: 'cheer', correct: 'chair' },
        { incorrect: 'naif', correct: 'knife' },
        { incorrect: 'noti', correct: 'naughty' },
        { incorrect: 'angri', correct: 'angry' },
        { incorrect: 'toking', correct: 'talking' },
        { incorrect: 'laring', correct: 'learning' }
    ],

    // Grammar Weaknesses (from assessment)
    grammarWeaknesses: [
        'articles', // No understanding of a/an/the
        'is_am_are', // Doesn't understand these helpers
        'subject_verb_agreement', // "You great" instead of "You are great"
        'verb_forms', // "wlking" instead of "walking"
        'prepositions', // Answered "No" to in/on/at understanding
        'sentence_structure', // Missing subjects/verbs
        'tenses' // No understanding of past/present/future
    ],

    // Sample Sentences (shows current ability)
    sampleSentences: [
        {
            prompt: 'Mere baare me ek sentence likhiye',
            response: 'You great',
            issues: ['missing subject', 'missing verb are', 'incomplete sentence']
        },
        {
            prompt: 'Aap subah kya karti hain?',
            response: 'Wlking',
            issues: ['spelling error', 'incomplete sentence', 'missing subject']
        },
        {
            prompt: 'Yesterday sentence',
            response: 'Yesterday gone to market',
            issues: ['missing subject I', 'missing verb went']
        },
        {
            prompt: 'Tomorrow sentence',
            response: 'Tomorrow going to birthday',
            issues: ['missing subject', 'missing will', 'incomplete']
        },
        {
            prompt: 'Join two ideas',
            response: 'I like tha tea but I\'m not like the coffee',
            issues: ['article error tha->the', 'verb form I\'m not like->I don\'t like']
        }
    ],

    // Learning Goals & Real-Life Applications
    goals: {
        primary: ['confidence', 'daily_life'],
        secondary: ['travel', 'kids_school', 'work'],
        realLifeScenarios: [
            'Market/Shopping',
            'Doctor/Hospital',
            'Travel',
            'Relatives communication',
            'Kids school interactions',
            'Mobile/YouTube understanding',
            'General confidence'
        ],
        day100Target: [
            'Fluency in daily conversations',
            'Confidence in speaking',
            'Grammar understanding',
            'Sentence making ability',
            'Reading and understanding',
            'Basic writing skills'
        ]
    },

    // Strengths (to build upon)
    strengths: [
        'Good reading comprehension (understood all 5 test sentences)',
        'Highly motivated (1 hour daily commitment)',
        'Comfortable with audio/voice learning',
        'Can form basic sentences with I/She/They/We',
        'Good translation skills (Hindi to English understanding)'
    ],

    // Priority Focus Areas (for curriculum design)
    priorityFocusAreas: [
        {
            area: 'Articles (a/an/the)',
            urgency: 'critical',
            reason: 'No understanding, appears in almost every sentence'
        },
        {
            area: 'is/am/are usage',
            urgency: 'critical',
            reason: 'Doesn\'t know when to use, writes "You great" instead of "You are great"'
        },
        {
            area: 'Spelling',
            urgency: 'high',
            reason: 'Phonetic errors affecting communication (tebal, naif, cheer)'
        },
        {
            area: 'Basic verb forms',
            urgency: 'high',
            reason: 'Confusion with -ing forms and tenses'
        },
        {
            area: 'Speaking confidence',
            urgency: 'high',
            reason: 'Main goal, needs daily practice'
        },
        {
            area: 'Sentence structure',
            urgency: 'medium',
            reason: 'Often misses subjects or verbs'
        },
        {
            area: 'Vocabulary expansion',
            urgency: 'medium',
            reason: 'Limited word knowledge (only 2 feelings words)'
        }
    ]
};

export default momProfile;
