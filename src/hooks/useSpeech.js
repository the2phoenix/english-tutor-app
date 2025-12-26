import { useState, useEffect, useCallback } from 'react';

export function useSpeech() {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [supported, setSupported] = useState(false);

    useEffect(() => {
        if ('speechSynthesis' in window) {
            setSupported(true);
        }
    }, []);

    const speak = useCallback((text) => {
        if (!supported) return;

        // Cancel any current speech
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US'; // Default to US English
        utterance.rate = 0.9; // Slightly slower for learning

        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);

        window.speechSynthesis.speak(utterance);
    }, [supported]);

    const cancel = useCallback(() => {
        if (supported) {
            window.speechSynthesis.cancel();
            setIsSpeaking(false);
        }
    }, [supported]);

    return { speak, cancel, isSpeaking, supported };
}
