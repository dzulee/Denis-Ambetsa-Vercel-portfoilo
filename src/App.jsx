import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Your current main page content
import AboutMe from './pages/AboutUs';
import {Footer} from './components/Footer';
import LearnMorePage from './pages/LearnMorePage';
import NotFound from './pages/NoteFound';
import PowerBi from './components/PowerBiDashboards';
import Blog from './pages/Blog'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import backgroundVideo from './assets/background_video.mp4';
import ScrollToTop from './components/ScrollTop';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation length in milliseconds
      once: false,     // Whether animation should happen only once - set to false to animate every time you scroll up/down
      mirror: true,    // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div className="app-shell">
      <div className="app-video-layer">
        <video className="app-video-background" autoPlay loop muted playsInline>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="app-video-overlay" />
      </div>

      <div className="app-content">
        <Router>
        <ScrollToTop />
          <Routes>
            {/* This is your main landing page */}
            <Route path="/" element={<Home />} />
            <Route path="/learn-more/:id" element={<LearnMorePage />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/powerbi/:id" element={<PowerBi />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;