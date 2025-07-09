import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


// Pages
import HomePage from './pages/HomePage';
import AethonPage from './pages/AethonPage';
import EBajaPage from './pages/EBajaPage';
import AlumniPage from './pages/AlumniPage';
import GalleryPage from './pages/ProjectGallery';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LogoAnimation from './components/common/LogoAnimation';

function App() {
  const [showAnimation, setShowAnimation] = useState(true);
  const navigate = useNavigate();

  // Redirect to homepage after animation completes
  const handleAnimationComplete = () => {
    setShowAnimation(false);
    navigate('/', { replace: true }); // Redirect to homepage, replace history entry
  };

  // On initial mount, ensure animation shows; redirect happens after animation
  useEffect(() => {
    setShowAnimation(true); // Ensure animation shows on load/refresh
  }, []);

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
                <Route path="gallery" element={<GalleryPage />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

// Wrap App with Router to provide routing context
export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}