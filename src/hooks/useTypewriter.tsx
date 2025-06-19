'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useHydration } from './useHydration';

export interface TypewriterOptions {
  speed?: number;
  delay?: number;
  loop?: boolean;
  deleteSpeed?: number;
  pauseTime?: number;
}

export const useTypewriter = (texts: string | string[], options: TypewriterOptions = {}) => {
  const { speed = 100, delay = 1000, loop = false, deleteSpeed = 50, pauseTime = 2000 } = options;

  const isHydrated = useHydration();
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const textArray = useMemo(() => Array.isArray(texts) ? texts : [texts], [texts]);
  const currentText = textArray[currentIndex];

  // Return first text immediately during SSR to prevent hydration mismatch
  const staticText = textArray[0] || '';

  // Don't start animations until after hydration
  const shouldAnimate = isHydrated && isStarted;

  useEffect(() => {
    if (!shouldAnimate) {
      return;
    }

    const typeCharacter = () => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
          timeoutRef.current = setTimeout(typeCharacter, speed);
        } else {
          // Finished typing current text
          if (loop && textArray.length > 1) {
            // Start deleting after pause
            timeoutRef.current = setTimeout(() => {
              setIsDeleting(true);
              typeCharacter();
            }, pauseTime);
          }
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
          timeoutRef.current = setTimeout(typeCharacter, deleteSpeed);
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % textArray.length);
          timeoutRef.current = setTimeout(typeCharacter, speed);
        }
      }
    };

    timeoutRef.current = setTimeout(typeCharacter, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [
    displayText,
    currentText,
    isDeleting,
    currentIndex,
    speed,
    delay,
    deleteSpeed,
    pauseTime,
    loop,
    textArray,
    shouldAnimate,
  ]);

  const start = () => {
    setIsStarted(true);
  };

  const stop = () => {
    setIsStarted(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const reset = () => {
    stop();
    setDisplayText('');
    setCurrentIndex(0);
    setIsDeleting(false);
  };

  return {
    displayText: isHydrated ? displayText : staticText,
    start,
    stop,
    reset,
    isStarted,
    isHydrated,
  };
};

// Hook for typewriter effect that starts when element comes into view
export const useTypewriterOnScroll = (
  texts: string | string[],
  options: TypewriterOptions & { threshold?: number } = {}
) => {
  const { threshold = 0.5, ...typewriterOptions } = options;
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLElement>(null);
  const typewriter = useTypewriter(texts, typewriterOptions);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasStarted) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          typewriter.start();
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [hasStarted, threshold, typewriter]);

  return {
    ...typewriter,
    elementRef,
  };
};

export default useTypewriter;
