import React, { useState, useEffect } from 'react';
import '../App.css';

export default function SentenceBuilder({ sentence, promptHindi, onComplete }) {
    const [words, setWords] = useState([]);
    const [selectedWords, setSelectedWords] = useState([]);
    const [isCorrect, setIsCorrect] = useState(null);

    useEffect(() => {
        if (sentence) {
            const shuffled = sentence.split(' ').sort(() => Math.random() - 0.5);
            setWords(shuffled);
            setSelectedWords([]);
            setIsCorrect(null);
        }
    }, [sentence]);

    const handleWordClick = (word, index) => {
        const newWords = [...words];
        newWords.splice(index, 1);
        setWords(newWords);
        setSelectedWords([...selectedWords, word]);
        setIsCorrect(null);
    };

    const handleSelectedClick = (word, index) => {
        const newSelected = [...selectedWords];
        newSelected.splice(index, 1);
        setSelectedWords(newSelected);
        setWords([...words, word]);
        setIsCorrect(null);
    };

    const checkAnswer = () => {
        const currentSentence = selectedWords.join(' ');
        if (currentSentence === sentence) {
            setIsCorrect(true);
            if (onComplete) setTimeout(onComplete, 1500); // Auto advance after success
        } else {
            setIsCorrect(false);
        }
    };

    return (
        <div className="sentence-builder">
            <div className="builder-header">
                <h4>Build the Sentence</h4>
                {promptHindi && <p className="hindi-prompt">Translate: "{promptHindi}"</p>}
            </div>

            <div className={`sentence-area ${isCorrect === true ? 'correct' : ''} ${isCorrect === false ? 'incorrect' : ''}`}>
                {selectedWords.length === 0 && <span className="placeholder">Click words below...</span>}
                {selectedWords.map((word, index) => (
                    <button
                        key={`sel-${index}`}
                        className="word-chip selected"
                        onClick={() => handleSelectedClick(word, index)}
                    >
                        {word}
                    </button>
                ))}
            </div>

            <div className="word-pool">
                {words.map((word, index) => (
                    <button
                        key={`pool-${index}`}
                        className="word-chip"
                        onClick={() => handleWordClick(word, index)}
                    >
                        {word}
                    </button>
                ))}
            </div>

            <div className="builder-actions">
                <button
                    className="btn-check"
                    onClick={checkAnswer}
                    disabled={words.length > 0}
                >
                    Check Answer
                </button>
                {isCorrect === true && <span className="success-msg">Correct! Great job!</span>}
                {isCorrect === false && <span className="error-msg">Try again!</span>}
            </div>
        </div>
    );
}
