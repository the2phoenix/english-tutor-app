import React, { useState } from 'react';
import '../App.css';

export default function WritingPractice({ sentence, promptHindi, onComplete }) {
    const [input, setInput] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);
    const [showCorrection, setShowCorrection] = useState(false);

    const checkAnswer = () => {
        const normalize = (str) => str.toLowerCase().replace(/[.,\/#!$%\^\&\*;:{}=\-_`~()]/g, "").trim();
        const userText = normalize(input);
        const targetText = normalize(sentence);

        if (userText === targetText) {
            setIsCorrect(true);
            setShowCorrection(false);
            setTimeout(() => {
                onComplete(true);
                setInput('');
                setIsCorrect(null);
            }, 1500);
        } else {
            setIsCorrect(false);
            setShowCorrection(true);
        }
    };

    return (
        <div className="writing-practice">
            <div className="builder-header">
                <h3>Write this sentence in English:</h3>
                <p className="hindi-prompt">{promptHindi}</p>
            </div>

            <textarea
                className="writing-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your answer in English..."
                disabled={isCorrect}
            />

            <div className="builder-actions">
                <button
                    className="btn-check"
                    onClick={checkAnswer}
                    disabled={!input.trim() || isCorrect}
                >
                    Check Answer
                </button>

                {isCorrect && <span className="success-msg">Correct! +10 Points 🎉</span>}
            </div>

            {showCorrection && (
                <div className="correction-box">
                    <span className="correction-title">Not quite. The correct answer is:</span>
                    <div className="correct-answer">{sentence}</div>
                    <button
                        className="btn-primary"
                        style={{ marginTop: '10px' }}
                        onClick={() => {
                            setInput(sentence);
                            setShowCorrection(false);
                            setIsCorrect(null);
                        }}
                    >
                        Try Again
                    </button>
                </div>
            )}
        </div>
    );
}
