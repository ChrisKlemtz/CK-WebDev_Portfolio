import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Landing from './components/Landing';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import GameMode from './components/Game/GameMode';
import './styles/main.scss';

function AppContent() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Show Header/Footer only when NOT on landing page or game mode
  const showLayout = location.pathname !== '/' && location.pathname !== '/game';

  return (
    <div className="App">
      {showLayout && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/game" element={<GameMode />} />
        </Routes>
      </main>
      {showLayout && <Footer />}
      {showLayout && <BackToTop />}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <AppContent />
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
