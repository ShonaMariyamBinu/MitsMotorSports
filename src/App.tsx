import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import HomePage from './pages/HomePage';
import AethonPage from './pages/AethonPage';
import EBajaPage from './pages/EBajaPage';
import AlumniPage from './pages/AlumniPage';
import GalleryPage from './pages/ProjectGallery';
import LegacyPage from './pages/LegacyPage';
import AboutPage from './pages/AboutPage';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LogoAnimation from './components/common/LogoAnimation';

function AppContent() {
  const [showAnimation, setShowAnimation] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  // Check if this is the initial load and if we should show animation
  useEffect(() => {
    // Show animation every time user visits the homepage
    if (location.pathname === '/') {
      setShowAnimation(true);
    } else {
      setShowAnimation(false);
    }
    
    setIsInitialLoad(false);
  }, [location.pathname]);

  // Scroll to top on route change
  useEffect(() => {
    // Only scroll to top when animation is not showing
    if (!showAnimation) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, showAnimation]);

  const handleAnimationComplete = () => {
    setShowAnimation(false);
    // Scroll to top after animation completes on homepage
    window.scrollTo(0, 0);
  };

  // Don't render anything during initial load check
  if (isInitialLoad) {
    return <div className="min-h-screen bg-gray-900" />;
  }

  return (
    <div>
      {showAnimation ? (
        <LogoAnimation onAnimationComplete={handleAnimationComplete} />
      ) : (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects/aethon" element={<AethonPage />} />
                <Route path="/projects/ebaja" element={<EBajaPage />} />
                <Route path="/alumni" element={<AlumniPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/legacy" element={<LegacyPage />} />
                <Route path="/about" element={<AboutPage />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}