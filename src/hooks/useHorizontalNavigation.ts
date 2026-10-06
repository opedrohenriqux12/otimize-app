import { useState, useEffect, useCallback } from 'react';

export function useHorizontalNavigation(totalScenes: number) {
  const [currentScene, setCurrentScene] = useState<number>(1);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  // Read initial hash from URL if present
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash;
      const match = hash.match(/#cena-(\d+)/);
      if (match) {
        const sceneNum = parseInt(match[1], 10);
        if (sceneNum >= 1 && sceneNum <= totalScenes) {
          setCurrentScene(sceneNum);
        }
      }
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMotionChange);

    return () => {
      window.removeEventListener('hashchange', parseHash);
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, [totalScenes]);

  const goToScene = useCallback(
    (target: number) => {
      if (target < 1 || target > totalScenes || target === currentScene) return;
      setDirection(target > currentScene ? 'next' : 'prev');
      setCurrentScene(target);
      window.location.hash = `#cena-${target}`;
      if (!hasInteracted) setHasInteracted(true);
    },
    [currentScene, totalScenes, hasInteracted]
  );

  const nextScene = useCallback(() => {
    if (currentScene < totalScenes) {
      goToScene(currentScene + 1);
    }
  }, [currentScene, totalScenes, goToScene]);

  const prevScene = useCallback(() => {
    if (currentScene > 1) {
      goToScene(currentScene - 1);
    }
  }, [currentScene, goToScene]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept typing in input or textarea elements
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextScene();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevScene();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToScene(1);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToScene(totalScenes);
      } else if (/^[1-9]$/.test(e.key)) {
        const num = parseInt(e.key, 10);
        if (num <= totalScenes) {
          goToScene(num);
        }
      } else if (e.key === '0') {
        if (10 <= totalScenes) {
          goToScene(10);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextScene, prevScene, goToScene, totalScenes]);

  // Touch Swipe Navigation
  useEffect(() => {
    let startX = 0;
    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!startX || !startY) return;
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;

      const diffX = startX - endX;
      const diffY = startY - endY;

      // Ensure horizontal swipe is dominant
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
        if (diffX > 0) {
          nextScene();
        } else {
          prevScene();
        }
      }

      startX = 0;
      startY = 0;
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [nextScene, prevScene]);

  return {
    currentScene,
    direction,
    goToScene,
    nextScene,
    prevScene,
    hasInteracted,
    reducedMotion,
  };
}
