import { useRef } from 'react';
import * as THREE from 'three';

export const useAttention = () => {
  const targetAttention = useRef({ x: 0, y: 0 });
  const attentionTimer = useRef(0);

  const updateAttention = (delta) => {
    attentionTimer.current -= delta;

    if (attentionTimer.current <= 0) {
      targetAttention.current.x = (Math.random() - 0.5) * 0.6;
      targetAttention.current.y = (Math.random() - 0.5) * 0.4;
      attentionTimer.current = 2 + Math.random() * 3;
    }
    
    return targetAttention.current;
  };

  return { targetAttention, updateAttention };
};
