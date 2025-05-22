import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import LogoAnimation from '../components/common/LogoAnimation';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Projects from '../components/home/Projects';
import Team from '../components/home/Team';

const HomePage = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  
  useEffect(() => {
    // Check if the user has already seen the animation
    const hasSeenAnimation = sessionStorage.getItem('hasSeenAnimation');
    
    if (hasSeenAnimation) {
      setShowAnimation(false);
    } else {
      // Set the flag in sessionStorage
      sessionStorage.setItem('hasSeenAnimation', 'true');
    }
  }, []);
  
  const handleAnimationComplete = () => {
    setShowAnimation(false);
  };

  const pageVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      {showAnimation && <LogoAnimation onAnimationComplete={handleAnimationComplete} />}
      
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Hero />
        <About />
        <Projects />
        <Team />
      </motion.div>
    </>
  );
};

export default HomePage;