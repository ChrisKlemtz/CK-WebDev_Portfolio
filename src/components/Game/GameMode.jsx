import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/LanguageContext';
import Phaser from 'phaser';
import dogGif from '/assets/gifs/dog_anoying.gif';

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
      transparent: true,
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
          // Add semi-transparent overlay for better text readability
          const overlay = this.add.rectangle(400, 300, 800, 600, 0x2C2C2C, 0.7);

          // Add "Coming Soon" text - large, bold, and green
          this.add.text(400, 300, 'Coming Soon', {
            fontFamily: 'Press Start 2P',
            fontSize: '64px',
            color: '#9BBC0F',
            align: 'center',
            stroke: '#306230',
            strokeThickness: 10
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
            <div
              ref={gameContainerRef}
              className="game-mode__canvas"
              style={{
                backgroundImage: `url(${dogGif})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />

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
