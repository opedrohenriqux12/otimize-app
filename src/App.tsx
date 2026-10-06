import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SCENES } from './data/presentationData';
import { useHorizontalNavigation } from './hooks/useHorizontalNavigation';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { NavigationHeader } from './components/NavigationHeader';
import { NavigationControls } from './components/NavigationControls';

// Scenes
import { Scene1Hero } from './components/scenes/Scene1Hero';
import { Scene2Problems } from './components/scenes/Scene2Problems';
import { Scene3Solution } from './components/scenes/Scene3Solution';
import { Scene4Rewards } from './components/scenes/Scene4Rewards';
import { Scene5SophiaIA } from './components/scenes/Scene5SophiaIA';
import { Scene6MecCourses } from './components/scenes/Scene6MecCourses';
import { Scene7Podcasts } from './components/scenes/Scene7Podcasts';
import { Scene8InteractiveMockups } from './components/scenes/Scene8InteractiveMockups';
import { Scene9OpenSource } from './components/scenes/Scene9OpenSource';
import { Scene10Closing } from './components/scenes/Scene10Closing';

export function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const {
    currentScene,
    direction,
    goToScene,
    nextScene,
    prevScene,
    hasInteracted,
    reducedMotion,
  } = useHorizontalNavigation(SCENES.length);

  // Sync theme class on html element
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  // Slide transition variants matching horizontal navigation direction
  const slideVariants = {
    enter: (dir: 'next' | 'prev') => ({
      x: dir === 'next' ? '100%' : '-100%',
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: 'next' | 'prev') => ({
      x: dir === 'next' ? '-100%' : '100%',
      opacity: 0,
      scale: 0.98,
    }),
  };

  const renderScene = () => {
    switch (currentScene) {
      case 1:
        return <Scene1Hero onNext={nextScene} onGoToMockups={() => goToScene(8)} />;
      case 2:
        return <Scene2Problems />;
      case 3:
        return <Scene3Solution />;
      case 4:
        return <Scene4Rewards />;
      case 5:
        return <Scene5SophiaIA />;
      case 6:
        return <Scene6MecCourses />;
      case 7:
        return <Scene7Podcasts />;
      case 8:
        return <Scene8InteractiveMockups />;
      case 9:
        return <Scene9OpenSource />;
      case 10:
        return <Scene10Closing onRestart={() => goToScene(1)} />;
      default:
        return <Scene1Hero onNext={nextScene} onGoToMockups={() => goToScene(8)} />;
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden select-none font-sans">
      {/* Dynamic Background Canvas */}
      <BackgroundCanvas currentScene={currentScene} isDarkMode={isDarkMode} />

      {/* Persistent Navigation Header */}
      <NavigationHeader
        currentScene={currentScene}
        onSelectScene={goToScene}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        hasInteracted={hasInteracted}
      />

      {/* Main Scene Container */}
      <main
        className="relative z-10 w-full h-full pt-16 pb-16 flex items-center justify-center overflow-hidden"
        aria-live="polite"
        aria-atomic="true"
      >
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentScene}
            custom={direction}
            variants={reducedMotion ? undefined : slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.35 },
            }}
            className="w-full h-full flex items-center justify-center"
          >
            {renderScene()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Controls (Side Arrows + Bottom Progress) */}
      <NavigationControls
        currentScene={currentScene}
        totalScenes={SCENES.length}
        onPrev={prevScene}
        onNext={nextScene}
        onSelectScene={goToScene}
      />
    </div>
  );
}

export default App;
