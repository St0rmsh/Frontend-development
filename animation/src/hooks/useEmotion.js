import { useRef, useEffect, useCallback } from 'react';

export const useEmotion = (personalityTraits) => {
  const emotion = useRef("idle");
  const targetEmotionOffset = useRef({ x: 0, z: 0 });
  const memory = useRef({ trustLevel: 0.5, interactions: [] });

  const bark = useCallback(() => {
    // Audio removed per user request
  }, [personalityTraits]);

  const interact = useCallback((type) => {
    memory.current.interactions.push({ type, time: Date.now() });
    
    if (type === 'pet') {
      memory.current.trustLevel = Math.min(1.0, memory.current.trustLevel + 0.15);
      emotion.current = "curious";
      bark();
    } else if (type === 'feed') {
      memory.current.trustLevel = Math.min(1.0, memory.current.trustLevel + 0.1);
      emotion.current = "idle";
      bark();
    } else if (type === 'hit') {
      memory.current.trustLevel = Math.max(0.0, memory.current.trustLevel - 0.3);
      emotion.current = "angry";
      bark();
    }
  }, [bark]);

  // Voice recognition updates emotion
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const rec = new SpeechRecognition();
    rec.continuous = true;
    rec.start();

    rec.onresult = (e) => {
      const text = e.results[e.results.length - 1][0].transcript.toLowerCase();
      if (text.includes("angry")) emotion.current = "angry";
      if (text.includes("calm")) emotion.current = "idle";
      if (text.includes("curious")) emotion.current = "curious";
    };

    return () => rec.stop();
  }, []);

  const updateEmotion = (delta, mousePos) => {
    // Distance of mouse from center triggers curiosity
    const d = Math.abs(mousePos.x) + Math.abs(mousePos.y);
    if (emotion.current !== "angry") {
      if (d < 0.2) emotion.current = "curious";
      else emotion.current = "idle";
    }

    // Emotion offset logic for Behavior
    if (emotion.current === "angry") {
      targetEmotionOffset.current.x = 0.3;
      targetEmotionOffset.current.z = 0;
    } else if (emotion.current === "curious") {
      targetEmotionOffset.current.x = 0;
      targetEmotionOffset.current.z = 0.2 * Math.sin(performance.now() * 0.002);
    } else {
      targetEmotionOffset.current.x = 0;
      targetEmotionOffset.current.z = 0;
    }

    return targetEmotionOffset.current;
  };

  return { emotion, memory, interact, updateEmotion };
};
