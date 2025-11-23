import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageContext';

function Header() {
  const { language, toggleLanguage, t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <Link to="/home" className="header__logo">
            <span className="text-accent">&lt;</span>DEV<span className="text-accent">/&gt;</span>
          </Link>

          <button
            className={`header__hamburger ${isMenuOpen ? 'header__hamburger--open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="header__hamburger-line"></span>
            <span className="header__hamburger-line"></span>
            <span className="header__hamburger-line"></span>
          </button>

          <div className={`header__menu-wrapper ${isMenuOpen ? 'header__menu-wrapper--open' : ''}`}>
            <ul className="header__menu">
              <li><Link to="/home" onClick={closeMenu}>{t('nav.home')}</Link></li>
              <li><Link to="/about" onClick={closeMenu}>{t('nav.about')}</Link></li>
              <li><Link to="/projects" onClick={closeMenu}>{t('nav.projects')}</Link></li>
              <li><Link to="/tech-stack" onClick={closeMenu}>{t('nav.techStack')}</Link></li>
              <li><Link to="/contact" onClick={closeMenu}>{t('nav.contact')}</Link></li>
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

              <button className="header__theme-toggle" aria-label="Toggle dark mode">
                <span className="pixel-icon">☀</span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
