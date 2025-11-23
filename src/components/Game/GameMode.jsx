import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/LanguageContext';

function GameMode() {
  const { t } = useTranslation();

  return (
    <section className="game-mode">
      <div className="container">
        <Link to="/" className="game-mode__back-btn retro-btn retro-btn--secondary">
          {t('game.backToSelection')}
        </Link>

        <div className="retro-box game-mode__box">
          <h2 className="game-mode__title">
            <span className="blink">▶</span> {t('game.title')}
          </h2>
          <p className="game-mode__subtitle">{t('game.comingSoon')}</p>

          <div className="game-mode__content">
            <p>
              {t('game.description')}
            </p>

            <div className="game-mode__features">
              <div className="feature-item">
                <span className="text-accent">🎮</span>
                <p>{t('game.topDown')}</p>
              </div>
              <div className="feature-item">
                <span className="text-accent">🗺️</span>
                <p>{t('game.interactive')}</p>
              </div>
              <div className="feature-item">
                <span className="text-accent">⭐</span>
                <p>{t('game.collect')}</p>
              </div>
              <div className="feature-item">
                <span className="text-accent">📚</span>
                <p>{t('game.learn')}</p>
              </div>
            </div>

            <div className="game-mode__info">
              <p>
                <strong>{t('game.controls')}</strong> {t('game.controlsText')}
              </p>
              <p className="mt-sm">
                {t('game.inDevelopment')}
              </p>
            </div>
          </div>

          <button className="retro-btn retro-btn--large" disabled>
            {t('game.gameModeBtn')}
          </button>
        </div>
      </div>
    </section>
  );
}

export default GameMode;
