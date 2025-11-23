import { useTranslation } from '../i18n/LanguageContext';

function Contact() {
  const { t } = useTranslation();

  return (
    <section className="contact">
      <div className="container">
        <h2 className="contact__title">
          <span className="text-accent">&gt;</span> {t('contact.title')}
        </h2>

        <div className="contact__content">
          <div className="retro-box contact__box">
            <h3 className="contact__subtitle">{t('contact.letsConnect')}</h3>
            <p className="contact__text">
              {t('contact.letsConnectText')}
            </p>

            <div className="contact__links">
              <a href="mailto:dev.christophklemtz@outlook.com" className="contact__link retro-btn retro-btn--large">
                {t('contact.emailMe')}
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact__link retro-btn retro-btn--large retro-btn--secondary">
                GitHub
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="contact__link retro-btn retro-btn--large retro-btn--secondary">
                LinkedIn
              </a>
            </div>
          </div>

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
        </div>

        <div className="contact__cta retro-box">
          <p className="blink">{t('contact.pressStart')}</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
