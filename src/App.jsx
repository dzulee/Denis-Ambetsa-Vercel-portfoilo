import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Home from './pages/Home'; // Your current main page content
import AboutMe from './pages/AboutUs';
import {Footer} from './components/Footer';
import LearnMorePage from './pages/LearnMorePage';
import NotFound from './pages/NoteFound';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* This is your main landing page */}
        <Route path="/" element={<Home />} />
          <Route path="/learn-more/:id" element={<LearnMorePage />} />
        <Route path="/about" element={<AboutMe />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;