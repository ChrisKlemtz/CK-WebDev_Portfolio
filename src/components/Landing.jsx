import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageContext';

function Landing() {
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();
  const { language, toggleLanguage, t } = useTranslation();

  const handlePortfolioClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      navigate('/home');
    }, 600);
  };

  const handleGameClick = () => {
    navigate('/game');
  };

  return (
    <section className={`landing ${isAnimating ? 'landing--fade-out' : ''}`}>
      <div className="container">
        <div className="landing__content">
          <div className="landing__title-box">
            <h1 className="landing__title">
              <span className="text-accent">&lt;</span>
              {t('landing.title')}
              <span className="text-accent">/&gt;</span>
            </h1>
            <p className="landing__subtitle">{t('landing.subtitle')}</p>
            <div className="landing__pixel-line"></div>
          </div>

          <div className="landing__mode-select">
            <h2 className="landing__prompt">
              <span className="blink">▶</span> {t('landing.selectMode')}
            </h2>

            <div className="landing__buttons">
              <button
                onClick={handlePortfolioClick}
                className="retro-btn retro-btn--large landing__btn"
              >
                <span className="landing__btn-icon">🌐</span>
                {t('landing.portfolioBtn')}
              </button>

              <button
                onClick={handleGameClick}
                className="retro-btn retro-btn--large retro-btn--secondary landing__btn"
              >
                <span className="landing__btn-icon">🎮</span>
                {t('landing.gameBtn')}
              </button>
            </div>

            <p className="landing__hint">
              {t('landing.hint')}
            </p>
          </div>

          <button
            className="landing__lang-toggle"
            onClick={toggleLanguage}
            aria-label="Toggle language"
          >
            {language === 'de' ? 'EN' : 'DE'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Landing;
