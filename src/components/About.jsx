import { useState } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import DownloadModal from './DownloadModal';

function About() {
  const { t } = useTranslation();
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

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

          <div className="retro-box about__box about__downloads-cta">
            <h3 className="about__subtitle">
              <span className="text-accent">📄</span> {t('about.documents')}
            </h3>
            <p>{t('about.documentsText')}</p>
            <button
              onClick={() => setIsDownloadModalOpen(true)}
              className="about__downloads-btn retro-btn retro-btn--large"
            >
              📄 {t('about.openDownloads')}
            </button>
          </div>
        </div>
      </div>

      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </section>
  );
}

export default About;
