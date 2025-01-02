import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Services from './pages/Services';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from './pages/Gallery'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect,useState } from 'react';
import './App.css';
import Terms from './pages/Terms';
import Disclaimer from './pages/Disclaimer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import 'bootstrap/dist/css/bootstrap.min.css';
import Announcements from './pages/Announcements';
import TempleRules from './pages/TempleRules';
import News from './pages/News';
import Deities from './pages/Deities';
import TempleTiming from './pages/TempleTiming';
import ParipalanaSamithy from './pages/ParipalanaSamithy';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
    <Router>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/templeRules" element={<TempleRules />} />
        <Route path="/news" element={<News />} />
        <Route path="/deities" element={<Deities />} />
        <Route path="/templeTiming" element={<TempleTiming />} />
        <Route path="/paripalanaSamithy" element={<ParipalanaSamithy />} />
      </Routes>
      <Footer />
    </Router>
  </div>
  );
}

export default App;