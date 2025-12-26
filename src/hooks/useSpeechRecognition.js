import { useState, useEffect, useCallback } from 'react';

export function useSpeechRecognition() {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [supported, setSupported] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            setSupported(true);
        }
    }, []);

    const startListening = useCallback(() => {
        if (!supported) return;

        setError(null);
        setTranscript('');
        setIsListening(true);

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onresult = (event) => {
            const last = event.results.length - 1;
            const text = event.results[last][0].transcript;
            setTranscript(text);
            setIsListening(false);
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error', event.error);
            setError(event.error);
            setIsListening(false);
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        try {
            recognition.start();
        } catch (e) {
            console.error(e);
            setIsListening(false);
        }
    }, [supported]);

    return { startListening, isListening, transcript, supported, error };
}
