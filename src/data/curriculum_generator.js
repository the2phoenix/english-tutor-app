/**
 * Curriculum Generator - Creates personalized 100-day curriculum
 * Designed for Mom's A1-A2 level with Hindi explanations
 */

import { momProfile } from './mom_profile';
import { days1to20 } from './lessons/days_1_to_20';
import { days21to40 } from './lessons/days_21_to_40';
import { days41to60 } from './lessons/days_41_to_60';
import { days61to80 } from './lessons/days_61_to_80';
import { days81to100 } from './lessons/days_81_to_100';

/**
 * Generates all 100 days of curriculum
 * Content is split into modules for better organization
 */
export function generateCurriculumDays() {
    const allDays = [
        ...days1to20,      // Foundation: Articles, is/am/are, spelling, basics
        ...days21to40,     // Building: Tenses, questions, vocabulary expansion
        ...days41to60,     // Practical: Real-life scenarios, market, doctor, travel
        ...days61to80,     // Confidence: Complex sentences, fluency, school interactions
        ...days81to100     // Mastery: Advanced conversations, all scenarios combined
    ];

    // Add sequential IDs and day numbers
    return allDays.map((lesson, index) => ({
        ...lesson,
        id: index + 1,
        day: index + 1
    }));
}

/**
 * Get lessons for a specific range (used by AI adaptive system)
 */
export function getLessonsByDayRange(startDay, endDay) {
    const all = generateCurriculumDays();
    return all.filter(lesson => lesson.day >= startDay && lesson.day <= endDay);
}

/**
 * AI will use this to adjust difficulty based on mom's performance
 */
export function getAdaptiveLessonDifficulty(dayNumber, performanceScore) {
    // Performance score: 0-100
    // If score < 60, suggest review
    // If score > 85, can skip ahead or add challenge

    const baseLesson = generateCurriculumDays()[dayNumber - 1];

    if (performanceScore < 60) {
        return {
            ...baseLesson,
            needsReview: true,
            suggestedPractice: 'extra',
            aiMessage: 'कोई बात नहीं! चलिए इसे फिर से समझते हैं। (No worries! Let\'s understand this again.)'
        };
    } else if (performanceScore > 85) {
        return {
            ...baseLesson,
            bonusChallenge: true,
            aiMessage: 'बहुत अच्छे! आप बहुत तेज़ी से सीख रही हैं! (Excellent! You\'re learning very fast!)'
        };
    }

    return baseLesson;
}

export default generateCurriculumDays;
