import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../i18n/LanguageContext';

function AdditionalCertificates({ isOpen, onClose, onCloseAll, certificates }) {
  const { t } = useTranslation();
  const modalRef = useRef(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onCloseAll();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      if (!isOpen) {
        document.body.style.overflow = 'unset';
      }
    };
  }, [isOpen, onCloseAll]);

  // Click outside handler with delay
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Delay to prevent immediate closing when opening
    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // If a certificate is selected, show full view
  if (selectedCertificate) {
    return (
      <div className="additional-certs-overlay">
        <div ref={modalRef} className="additional-certs-viewer retro-box">
          <button
            className="additional-certs-viewer__close"
            onClick={onCloseAll}
            aria-label="Close All"
          >
            ✕
          </button>

          <h2 className="additional-certs-viewer__title">
            {selectedCertificate.name}
          </h2>

          <div className="additional-certs-viewer__iframe-container">
            <iframe
              src={selectedCertificate.url}
              title={selectedCertificate.name}
              className="additional-certs-viewer__iframe"
            />
          </div>

          <div className="additional-certs-viewer__actions">
            <button
              onClick={() => setSelectedCertificate(null)}
              className="additional-certs-viewer__back-btn retro-btn retro-btn--secondary"
            >
              ← {t('downloads.backToOverview')}
            </button>
            <a
              href={selectedCertificate.url}
              download
              className="additional-certs-viewer__download-btn retro-btn retro-btn--large"
            >
              {t('downloads.download')}
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Show overview of all certificates
  return (
    <div className="additional-certs-overlay">
      <div ref={modalRef} className="additional-certs-overview retro-box">
        <button className="additional-certs-overview__close" onClick={onCloseAll} aria-label="Close All">
          ✕
        </button>

        <h2 className="additional-certs-overview__title">
          {t('downloads.additionalCertificates')}
        </h2>

        <p className="additional-certs-overview__description">
          {t('downloads.additionalCertificatesDesc')}
        </p>

        <div className="additional-certs-overview__grid">
          {certificates.map((cert, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedCertificate(cert);
              }}
              className="additional-cert-card retro-box"
            >
              <div className="additional-cert-card__icon">📜</div>
              <div className="additional-cert-card__name">{cert.name}</div>
            </button>
          ))}
        </div>

        <div className="additional-certs-overview__actions">
          <button
            onClick={onClose}
            className="additional-certs-overview__back-btn retro-btn retro-btn--secondary"
          >
            ← {t('downloads.backToOverview')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdditionalCertificates;
