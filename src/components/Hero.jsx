import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <div className="hero__pixel-frame">
            <div className="hero__avatar">
              <div className="pixel-art-placeholder">
                <span>DEV</span>
              </div>
            </div>
          </div>

          <div className="hero__text">
            <h1 className="hero__greeting">
              <span className="text-accent">Hi,</span> I'm Christoph
            </h1>
            <h2 className="hero__title">Full-Stack Web Developer</h2>
            <p className="hero__description">
              Building modern web applications with React, Node.js, and creative solutions with passion.
            </p>

            <div className="hero__actions">
              <Link to="/projects" className="retro-btn retro-btn--large">
                Portfolio erkunden
              </Link>
              <Link to="/game" className="retro-btn retro-btn--large retro-btn--secondary">
                Spiel starten
              </Link>
            </div>
          </div>
        </div>

        <div className="hero__scroll-indicator">
          <span className="blink">▼</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
