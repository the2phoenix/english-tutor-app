import { useState, useEffect } from 'react';

const ACHIEVEMENTS = [
    { id: 'first_step', title: 'First Step', description: 'Complete Day 1', icon: '🌱' },
    { id: 'on_fire', title: 'On Fire', description: '3 Day Streak', icon: '🔥' },
    { id: 'grammar_guru', title: 'Grammar Guru', description: 'Score 1000 Points', icon: '🎓' },
    { id: 'scholar', title: 'Scholar', description: 'Complete 10 Lessons', icon: '📜' }
];

export function useGamification() {
    const [points, setPoints] = useState(() => parseInt(localStorage.getItem('english_app_points') || '0'));
    const [streak, setStreak] = useState(() => parseInt(localStorage.getItem('english_app_streak') || '0'));
    const [unlockedAchievements, setUnlockedAchievements] = useState(() =>
        JSON.parse(localStorage.getItem('english_app_achievements') || '[]')
    );
    const [lastLogin, setLastLogin] = useState(() => localStorage.getItem('english_app_last_login'));

    useEffect(() => {
        localStorage.setItem('english_app_points', points);
        localStorage.setItem('english_app_streak', streak);
        localStorage.setItem('english_app_achievements', JSON.stringify(unlockedAchievements));
        if (lastLogin) localStorage.setItem('english_app_last_login', lastLogin);
    }, [points, streak, unlockedAchievements, lastLogin]);

    // Check streak on mount
    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        if (lastLogin !== today) {
            if (lastLogin) {
                const last = new Date(lastLogin);
                const now = new Date(today);
                const diffTime = Math.abs(now - last);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                if (diffDays === 1) {
                    // Consecutive day
                    setStreak(prev => prev + 1);
                } else if (diffDays > 1) {
                    // Broken streak
                    setStreak(1);
                } else {
                    // Same day (shouldn't happen due to outer if)
                }
            } else {
                // First time
                setStreak(1);
            }
            setLastLogin(today);
        }
    }, []);

    const addPoints = (amount) => {
        setPoints(prev => {
            const newPoints = prev + amount;
            checkScoreAchievements(newPoints);
            return newPoints;
        });
    };

    const unlockAchievement = (id) => {
        if (!unlockedAchievements.includes(id)) {
            setUnlockedAchievements(prev => [...prev, id]);
            // Could trigger a toast/notification here
            alert(`🏆 Achievement Unlocked: ${ACHIEVEMENTS.find(a => a.id === id)?.title}`);
        }
    };

    const checkScoreAchievements = (currentPoints) => {
        if (currentPoints >= 1000) unlockAchievement('grammar_guru');
    };

    return {
        points,
        streak,
        unlockedAchievements,
        achievementsList: ACHIEVEMENTS,
        addPoints,
        unlockAchievement
    };
}
