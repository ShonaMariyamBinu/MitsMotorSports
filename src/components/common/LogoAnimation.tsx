import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LogoAnimationProps {
  onAnimationComplete?: () => void;
}

const LogoAnimation = ({ onAnimationComplete }: LogoAnimationProps) => {
  const [isAnimationDone, setIsAnimationDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationDone(true);
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    }, 2500); // Animation duration + slight delay

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <motion.img
          src="https://images.pexels.com/photos/5119838/pexels-photo-5119838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="MITS Motorsports Logo"
          className="w-32 h-32 md:w-48 md:h-48 object-contain"
          animate={{ 
            opacity: [0, 1, 1, 0],
            y: [20, 0, 0, -20],
          }}
          transition={{ 
            duration: 2.5,
            times: [0, 0.2, 0.8, 1],
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-center"
        >
          <motion.h1
            className="text-2xl md:text-4xl font-bold text-primary-600"
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ 
              duration: 2.5,
              times: [0, 0.3, 0.8, 1],
            }}
          >
            MITS Motorsports
          </motion.h1>
          <motion.p
            className="text-sm md:text-base text-secondary-600 mt-2"
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ 
              duration: 2.5,
              times: [0, 0.4, 0.8, 1],
            }}
          >
            Engineering Excellence in Motion
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LogoAnimation;