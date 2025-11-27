import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';

function Header() {
  const { language, toggleLanguage, t } = useTranslation();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        hamburgerRef.current &&
        !menuRef.current.contains(event.target) &&
        !hamburgerRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <Link to="/home" className="header__logo">
            <span className="text-accent">&lt;</span>DEV<span className="text-accent">/&gt;</span>
          </Link>

          <button
            ref={hamburgerRef}
            className={`header__hamburger ${isMenuOpen ? 'header__hamburger--open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="header__hamburger-line"></span>
            <span className="header__hamburger-line"></span>
            <span className="header__hamburger-line"></span>
          </button>

          <div ref={menuRef} className={`header__menu-wrapper ${isMenuOpen ? 'header__menu-wrapper--open' : ''}`}>
            <ul className="header__menu">
              <li><Link to="/home" onClick={closeMenu} className={location.pathname === '/home' ? 'active' : ''}>{t('nav.home')}</Link></li>
              <li><Link to="/about" onClick={closeMenu} className={location.pathname === '/about' ? 'active' : ''}>{t('nav.about')}</Link></li>
              <li><Link to="/projects" onClick={closeMenu} className={location.pathname === '/projects' ? 'active' : ''}>{t('nav.projects')}</Link></li>
              <li><Link to="/tech-stack" onClick={closeMenu} className={location.pathname === '/tech-stack' ? 'active' : ''}>{t('nav.techStack')}</Link></li>
              <li><Link to="/contact" onClick={closeMenu} className={location.pathname === '/contact' ? 'active' : ''}>{t('nav.contact')}</Link></li>
            </ul>

            <div className="header__actions">
              <Link to="/" className="header__back-btn retro-btn retro-btn--secondary" onClick={closeMenu}>
                ← {t('nav.backToMenu')}
              </Link>

              <button
                className="header__lang-toggle"
                onClick={toggleLanguage}
                aria-label="Toggle language"
              >
                <span className="pixel-icon">{language === 'de' ? 'EN' : 'DE'}</span>
              </button>

              <button
                className="header__theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
              >
                <span className="pixel-icon">{isDarkMode ? '☀' : '🌙'}</span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
