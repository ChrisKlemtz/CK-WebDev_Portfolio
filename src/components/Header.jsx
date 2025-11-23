import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageContext';

function Header() {
  const { language, toggleLanguage, t } = useTranslation();

  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <Link to="/home" className="header__logo">
            <span className="text-accent">&lt;</span>DEV<span className="text-accent">/&gt;</span>
          </Link>

          <ul className="header__menu">
            <li><Link to="/home">{t('nav.home')}</Link></li>
            <li><Link to="/about">{t('nav.about')}</Link></li>
            <li><Link to="/projects">{t('nav.projects')}</Link></li>
            <li><Link to="/tech-stack">{t('nav.techStack')}</Link></li>
            <li><Link to="/contact">{t('nav.contact')}</Link></li>
          </ul>

          <Link to="/" className="header__back-btn retro-btn retro-btn--secondary">
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
        </nav>
      </div>
    </header>
  );
}

export default Header;
