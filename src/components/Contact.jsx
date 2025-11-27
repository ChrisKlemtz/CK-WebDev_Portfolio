import { useState } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import DownloadModal from './DownloadModal';

function Contact() {
  const { t } = useTranslation();
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  return (
    <section className="contact">
      <div className="container">
        <h2 className="contact__title">
          <span className="text-accent">&gt;</span> {t('contact.title')}
        </h2>

        <div className="contact__content">
          <div className="retro-box contact__info">
            <h3 className="contact__subtitle">{t('contact.quickInfo')}</h3>
            <div className="contact__info-item">
              <span className="text-accent">{t('contact.location')}</span> {t('contact.locationValue')}
            </div>
            <div className="contact__info-item">
              <span className="text-accent">{t('contact.status')}</span> {t('contact.statusValue')}
            </div>
            <div className="contact__info-item">
              <span className="text-accent">{t('contact.responseTime')}</span> {t('contact.responseTimeValue')}
            </div>
          </div>

          <div className="retro-box contact__box">
            <h3 className="contact__subtitle">{t('contact.letsConnect')}</h3>
            <p className="contact__text">
              {t('contact.letsConnectText')}
            </p>

            <div className="contact__links">
              <a href="mailto:dev.christophklemtz@outlook.com" className="contact__link retro-btn retro-btn--large">
                {t('contact.emailMe')}
              </a>
              <a href="https://github.com/ChrisKlemtz" target="_blank" rel="noopener noreferrer" className="contact__link retro-btn retro-btn--large retro-btn--secondary">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/christoph-klemtz-8558b8349/" target="_blank" rel="noopener noreferrer" className="contact__link retro-btn retro-btn--large retro-btn--secondary">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="contact__downloads-cta retro-box">
          <h3 className="contact__subtitle">
            <span className="text-accent">📄</span> {t('contact.documents')}
          </h3>
          <p className="contact__downloads-text">{t('contact.documentsText')}</p>
          <button
            onClick={() => setIsDownloadModalOpen(true)}
            className="contact__downloads-btn retro-btn retro-btn--large"
          >
            📄 {t('contact.openDownloads')}
          </button>
        </div>
      </div>

      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />
    </section>
  );
}

export default Contact;
