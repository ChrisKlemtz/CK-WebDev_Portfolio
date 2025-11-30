import { useEffect, useRef } from 'react';
import { useTranslation } from '../i18n/LanguageContext';

function ContactModal({ isOpen, onClose }) {
  const { t } = useTranslation();
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      if (!isOpen) {
        document.body.style.overflow = 'unset';
      }
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const whatsappText = 'Hallo Christoph. Ich bin, über dein Portfolio, auf dich aufmekrsam geworden. Hier ist mein Anliegen:';
  const whatsappUrl = `https://wa.me/4915225297392?text=${encodeURIComponent(whatsappText)}`;

  return (
    <div className="contact-modal-overlay">
      <div ref={modalRef} className="contact-modal retro-box">
        <button className="contact-modal__close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <h2 className="contact-modal__title">
          {t('contactModal.title')}
        </h2>

        <p className="contact-modal__description">
          {t('contactModal.description')}
        </p>

        <div className="contact-modal__buttons">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-modal__btn retro-btn retro-btn--large"
          >
            <span className="contact-modal__label">{t('contactModal.whatsapp')}</span>
          </a>

          <a
            href="mailto:dev.christophklemtz@outlook.com"
            className="contact-modal__btn retro-btn retro-btn--large retro-btn--secondary"
          >
            <span className="contact-modal__label">{t('contactModal.email')}</span>
          </a>

          <a
            href="tel:+4915225297392"
            className="contact-modal__btn contact-modal__btn--call retro-btn retro-btn--secondary"
          >
            <span className="contact-modal__label">{t('contactModal.call')}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
