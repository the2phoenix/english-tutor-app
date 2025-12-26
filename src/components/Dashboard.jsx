import React from 'react';
import { Link } from 'react-router-dom';
import { curriculum } from '../data/curriculum.jsx';
import { useProgress } from '../hooks/useProgress';
import { useGamification } from '../hooks/useGamification';
import '../App.css';

export default function Dashboard() {
    const { isCompleted, getProgressPercentage, completedDays } = useProgress();
    const { points, streak, unlockedAchievements, achievementsList } = useGamification();
    const progress = getProgressPercentage();

    // Find the first incomplete day to suggest starting there
    const nextDayId = curriculum.find(d => !isCompleted(d.id))?.id || 1;

    return (
        <div className="dashboard">
            <div className="hero-section">
                <h1 className="hero-title">Welcome Back, Mom!</h1>
                <p className="hero-subtitle">Your journey to English fluency continues.</p>

                <div className="stats-container">
                    <div className="stat-card">
                        <span className="stat-icon">🔥</span>
                        <div className="stat-info">
                            <span className="stat-value">{streak}</span>
                            <span className="stat-label">Day Streak</span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <span className="stat-icon">⭐</span>
                        <div className="stat-info">
                            <span className="stat-value">{points}</span>
                            <span className="stat-label">Total Points</span>
                        </div>
                    </div>
                    <div className="stat-card">
                        <span className="stat-icon">🏆</span>
                        <div className="stat-info">
                            <span className="stat-value">{unlockedAchievements.length}/{achievementsList.length}</span>
                            <span className="stat-label">Achievements</span>
                        </div>
                    </div>
                </div>

                <Link to={`/day/${nextDayId}`} className="btn-cta">
                    {nextDayId === 1 && progress === 0 ? "Start Learning" : "Continue Learning"}
                </Link>
            </div>

            <div className="progress-section">
                <h2>Your Progress</h2>
                <div className="progress-bar-container">
                    <div
                        className="progress-bar-fill"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <p>{progress}% to Fluency ({completedDays.length} / 100 Days)</p>
            </div>

            <div className="days-grid">
                {curriculum.map((day) => {
                    const completed = isCompleted(day.id);
                    const isNext = day.id === nextDayId;
                    const isLocked = !completed && !isNext;

                    let statusClass = '';
                    if (completed) statusClass = 'completed';
                    else if (isNext) statusClass = 'active';
                    else statusClass = 'locked';

                    return (
                        <Link
                            to={isLocked ? '#' : `/day/${day.id}`}
                            key={day.id}
                            className={`day-card ${statusClass}`}
                            style={{ animationDelay: `${day.id * 0.05}s` }}
                            onClick={(e) => isLocked && e.preventDefault()}
                        >
                            <div className="day-number">{day.day}</div>
                            <div className="day-status">
                                {completed && (
                                    <div className="stars-container">
                                        <span>⭐</span><span>⭐</span><span>⭐</span>
                                    </div>
                                )}
                                {isNext && <span className="status-icon">▶️</span>}
                                {isLocked && <span className="status-icon">🔒</span>}
                            </div>
                        </Link>
                    );
                })}
            </div>

            {unlockedAchievements.length > 0 && (
                <div className="achievements-section">
                    <h2>Your Trophies</h2>
                    <div className="achievements-grid">
                        {achievementsList.filter(a => unlockedAchievements.includes(a.id)).map(ach => (
                            <div key={ach.id} className="achievement-card">
                                <span className="achievement-icon">{ach.icon}</span>
                                <span className="achievement-title">{ach.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
