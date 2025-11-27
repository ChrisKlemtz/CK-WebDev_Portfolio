import { useEffect, useRef } from 'react';
import { useTranslation } from '../i18n/LanguageContext';

function DownloadModal({ isOpen, onClose }) {
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
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="download-modal-overlay">
      <div ref={modalRef} className="download-modal retro-box">
        <button className="download-modal__close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <h2 className="download-modal__title">
          <span className="text-accent">📄</span> {t('downloads.title')}
        </h2>

        <p className="download-modal__description">
          {t('downloads.description')}
        </p>

        <div className="download-modal__buttons">
          <a
            href="/assets/documents/lebenslauf.pdf"
            download
            className="download-modal__btn retro-btn retro-btn--large"
          >
            <span className="download-modal__icon">📄</span>
            <span className="download-modal__label">{t('downloads.cv')}</span>
          </a>

          <a
            href="/assets/documents/zertifikate.pdf"
            download
            className="download-modal__btn retro-btn retro-btn--large retro-btn--secondary"
          >
            <span className="download-modal__icon">🏆</span>
            <span className="download-modal__label">{t('downloads.certificates')}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default DownloadModal;
