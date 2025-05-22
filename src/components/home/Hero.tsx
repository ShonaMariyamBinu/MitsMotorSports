import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-r from-secondary-900 to-secondary-950 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
      </div>
      
      {/* Red accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary-600"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="mb-8 inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.pexels.com/photos/5119838/pexels-photo-5119838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="MITS Motorsports Logo" 
                className="h-24 w-auto animate-fade-in"
              />
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Engineering <span className="text-primary-500">Excellence</span> in Motion
            </motion.h1>
            
            <motion.p 
              className="text-lg text-secondary-300 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              MITS Motorsports is a student-run organization dedicated to designing, building, and racing innovative vehicles. We compete in national and international competitions to showcase our engineering prowess.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link to="/projects/aethon" className="btn btn-primary">
                Explore Projects
              </Link>
              <Link to="/alumni" className="btn btn-secondary">
                Meet Our Team
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img 
              src="https://images.pexels.com/photos/12801/pexels-photo-12801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Racing Car" 
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
      
      <motion.a 
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white opacity-80 hover:opacity-100 transition-opacity"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ChevronDown className="animate-bounce" />
      </motion.a>
    </div>
  );
};

export default Hero;