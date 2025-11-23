import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n/LanguageContext';

function Home() {
  const { t } = useTranslation();

  return (
    <section className="home">
      <div className="container">
        <div className="home__content">
          <div className="home__pixel-frame">
            <div className="home__avatar">
              <div className="pixel-art-placeholder">
                <span>CK</span>
              </div>
            </div>
          </div>

          <div className="home__text">
            <h1 className="home__greeting">
              {t('home.greeting')} <span className="text-accent">{t('home.greetingAccent')}</span>
            </h1>
            <h2 className="home__title">{t('home.title')}</h2>

            <div className="home__description">
              <p>
                {t('home.description1')}
              </p>
              <p className="mt-sm">
                {t('home.description2')}
              </p>
            </div>

            <div className="home__quick-links">
              <Link to="/projects" className="retro-btn">
                {t('home.viewProjects')}
              </Link>
              <Link to="/tech-stack" className="retro-btn retro-btn--secondary">
                {t('home.mySkills')}
              </Link>
              <Link to="/contact" className="retro-btn retro-btn--secondary">
                {t('home.getInTouch')}
              </Link>
            </div>
          </div>
        </div>

        <div className="home__features">
          <div className="retro-box home__feature">
            <h3>💡 {t('home.problemSolver')}</h3>
            <p>{t('home.problemSolverDesc')}</p>
          </div>
          <div className="retro-box home__feature">
            <h3>🚀 {t('home.fastLearner')}</h3>
            <p>{t('home.fastLearnerDesc')}</p>
          </div>
          <div className="retro-box home__feature">
            <h3>🎨 {t('home.detailOriented')}</h3>
            <p>{t('home.detailOrientedDesc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
