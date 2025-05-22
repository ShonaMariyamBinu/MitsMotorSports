import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import HomePage from './pages/HomePage';
import AethonPage from './pages/AethonPage';
import EBajaPage from './pages/EBajaPage';
import AlumniPage from './pages/AlumniPage';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects/aethon" element={<AethonPage />} />
              <Route path="/projects/ebaja" element={<EBajaPage />} />
              <Route path="/alumni" element={<AlumniPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;