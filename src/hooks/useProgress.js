import { useState, useEffect } from 'react';

export function useProgress() {
    const [completedDays, setCompletedDays] = useState(() => {
        const saved = localStorage.getItem('english-app-progress');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('english-app-progress', JSON.stringify(completedDays));
    }, [completedDays]);

    const markComplete = (dayId) => {
        setCompletedDays(prev => {
            if (prev.includes(dayId)) return prev;
            return [...prev, dayId];
        });
    };

    const isCompleted = (dayId) => completedDays.includes(dayId);

    const getProgressPercentage = () => {
        return Math.round((completedDays.length / 100) * 100);
    };

    return { completedDays, markComplete, isCompleted, getProgressPercentage };
}
