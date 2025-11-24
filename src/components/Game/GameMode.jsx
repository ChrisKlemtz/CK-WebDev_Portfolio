import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/LanguageContext';
import Phaser from 'phaser';

function GameMode() {
  const { t } = useTranslation();
  const gameContainerRef = useRef(null);
  const gameInstanceRef = useRef(null);

  useEffect(() => {
    // Phaser Game Configuration
    const config = {
      type: Phaser.AUTO,
      parent: gameContainerRef.current,
      width: 800,
      height: 600,
      backgroundColor: '#2C2C2C',
      pixelArt: true,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 },
          debug: false
        }
      },
      scene: {
        create: function() {
          // Add placeholder text
          this.add.text(400, 300, 'Phaser.js Game Coming Soon!', {
            fontFamily: 'Press Start 2P',
            fontSize: '20px',
            color: '#9BBC0F',
            align: 'center'
          }).setOrigin(0.5);

          this.add.text(400, 350, 'Use Arrow Keys to Explore', {
            fontFamily: 'Press Start 2P',
            fontSize: '12px',
            color: '#E0E0E0',
            align: 'center'
          }).setOrigin(0.5);
        }
      }
    };

    // Create game instance
    if (gameContainerRef.current && !gameInstanceRef.current) {
      gameInstanceRef.current = new Phaser.Game(config);
    }

    // Cleanup on unmount
    return () => {
      if (gameInstanceRef.current) {
        gameInstanceRef.current.destroy(true);
        gameInstanceRef.current = null;
      }
    };
  }, []);

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

            {/* Phaser Game Container */}
            <div ref={gameContainerRef} className="game-mode__canvas" />

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
        </div>
      </div>
    </section>
  );
}

export default GameMode;
