import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { curriculum } from '../data/curriculum.jsx';
import { useProgress } from '../hooks/useProgress';
import { useSpeech } from '../hooks/useSpeech';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
import { useGamification } from '../hooks/useGamification';
import SentenceBuilder from './SentenceBuilder';
import WritingPractice from './WritingPractice';
import '../App.css';

export default function LessonView() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { markComplete, isCompleted } = useProgress();
    const { speak, isSpeaking } = useSpeech();
    const { startListening, isListening, transcript, supported: speechSupported } = useSpeechRecognition();
    const { addPoints } = useGamification();

    const [practiceIndex, setPracticeIndex] = useState(0);
    const [currentListeningIndex, setCurrentListeningIndex] = useState(null);

    const dayId = parseInt(id);
    const lesson = curriculum.find(d => d.id === dayId);
    const completed = isCompleted(dayId);

    if (!lesson) {
        return <div>Lesson not found</div>;
    }

    const handleComplete = () => {
        if (!completed) {
            markComplete(dayId);
            addPoints(100); // 100 points for lesson completion
        }
        navigate('/');
    };

    const handlePracticeComplete = (success = false) => {
        if (success) {
            addPoints(10); // 10 points for correct answer
        }
        if (practiceIndex < (lesson.practice?.length || 0) - 1) {
            setPracticeIndex(prev => prev + 1);
        }
    };

    const handleSpeakCheck = (targetText, index) => {
        if (isListening) return;
        setCurrentListeningIndex(index);
        startListening();
    };

    return (
        <div className="lesson-view">
            <div className="lesson-header">
                <Link to="/" className="back-link">← Back to Dashboard</Link>
                <h1>{lesson.title}</h1>
            </div>

            <div className="lesson-content-card">
                {Array.isArray(lesson.content) ? (
                    lesson.content.map((section, index) => (
                        <div key={index} className="lesson-section">
                            {section.heading && (
                                <div className="section-heading-group">
                                    <h3>{section.heading}</h3>
                                    {section.headingHindi && <span className="hindi-text subheading">{section.headingHindi}</span>}
                                </div>
                            )}

                            <div className="text-content">
                                <p className="lesson-text">
                                    {section.text.split('\n').map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </p>
                                {section.textHindi && <p className="hindi-text body">{section.textHindi}</p>}
                            </div>

                            {section.example && (
                                <div className="lesson-example">
                                    <div className="example-header">
                                        <strong>Example:</strong>
                                        <div className="example-actions">
                                            {section.audio && (
                                                <button
                                                    className="btn-audio"
                                                    onClick={() => speak(section.example)}
                                                    disabled={isSpeaking}
                                                    title="Listen to pronunciation"
                                                >
                                                    🔊 Listen
                                                </button>
                                            )}
                                            {speechSupported && section.audio && (
                                                <button
                                                    className={`btn-speak ${isListening && currentListeningIndex === index ? 'listening' : ''}`}
                                                    onClick={() => handleSpeakCheck(section.example, index)}
                                                    disabled={isListening || isSpeaking}
                                                    title="Practice speaking"
                                                >
                                                    {isListening && currentListeningIndex === index ? '👂 Listening...' : '🎤 Speak'}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                    {section.example.split('\n').map((line, i) => (
                                        <div key={i} className="example-line">{line}</div>
                                    ))}

                                    {/* Feedback Area for this specific example */}
                                    {currentListeningIndex === index && transcript && (
                                        <div className="speech-feedback">
                                            <p><strong>You said:</strong> "{transcript}"</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <p className="lesson-text">{lesson.content}</p>
                )}

                {lesson.practice && lesson.practice.length > 0 && (
                    <div className="practice-section">
                        <h3>Practice (अभ्यास)</h3>
                        {lesson.type === 'writing' ? (
                            <WritingPractice
                                key={practiceIndex}
                                sentence={lesson.practice[practiceIndex].sentence}
                                promptHindi={lesson.practice[practiceIndex].promptHindi}
                                onComplete={handlePracticeComplete}
                            />
                        ) : (
                            <SentenceBuilder
                                key={practiceIndex}
                                sentence={lesson.practice[practiceIndex].sentence}
                                promptHindi={lesson.practice[practiceIndex].promptHindi}
                                onComplete={() => handlePracticeComplete(true)}
                            />
                        )}
                        <div className="practice-progress">
                            Exercise {practiceIndex + 1} of {lesson.practice.length}
                        </div>
                    </div>
                )}

                <div className="lesson-actions">
                    <button
                        className={`btn-primary ${completed ? 'btn-completed' : ''}`}
                        onClick={handleComplete}
                    >
                        {completed ? 'Completed ✓' : 'Complete Lesson'}
                    </button>
                </div>
            </div>
        </div>
    );
}
