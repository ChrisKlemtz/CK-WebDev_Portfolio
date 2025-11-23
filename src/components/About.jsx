import { useTranslation } from '../i18n/LanguageContext';

function About() {
  const { t } = useTranslation();

  return (
    <section className="about">
      <div className="container">
        <h2 className="about__title">
          <span className="text-accent">&gt;</span> {t('about.title')}
        </h2>

        <div className="about__content">
          <div className="retro-box about__box">
            <h3 className="about__subtitle">{t('about.whoIAm')}</h3>
            <p>
              {t('about.whoIAmText')}
            </p>
          </div>

          <div className="retro-box about__box">
            <h3 className="about__subtitle">{t('about.myApproach')}</h3>
            <p>
              {t('about.myApproachText')}
            </p>
          </div>

          <div className="retro-box about__box">
            <h3 className="about__subtitle">{t('about.whatDrivesMe')}</h3>
            <p>
              {t('about.whatDrivesMeText')}
            </p>
          </div>

          <div className="retro-box about__box about__box--highlight">
            <h3 className="about__subtitle">{t('about.beyondCode')}</h3>
            <p>
              {t('about.beyondCodeText')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
