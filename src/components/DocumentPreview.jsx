import { useEffect, useRef } from 'react';
import { useTranslation } from '../i18n/LanguageContext';

function DocumentPreview({ isOpen, onClose, onCloseAll, documentUrl, documentName, isCertificate, onShowAdditionalCerts, additionalCertificates }) {
  const { t } = useTranslation();
  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onCloseAll();
      }
    };

    // Delay to prevent immediate closing
    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose, onCloseAll]);

  if (!isOpen) return null;

  return (
    <div className="document-preview-overlay">
      <div ref={modalRef} className="document-preview retro-box">
        <button className="document-preview__close" onClick={onCloseAll} aria-label="Close All">
          ✕
        </button>

        <h2 className="document-preview__title">
          {documentName}
        </h2>

        <div className="document-preview__viewer">
          <iframe
            src={documentUrl}
            title={documentName}
            className="document-preview__iframe"
          />
        </div>

        <div className="document-preview__actions">
          <button
            onClick={onClose}
            className="document-preview__back-btn retro-btn retro-btn--secondary"
          >
            ← {t('downloads.backToOverview')}
          </button>
          {isCertificate && additionalCertificates && additionalCertificates.length > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onShowAdditionalCerts();
              }}
              className="document-preview__additional-btn retro-btn retro-btn--secondary"
            >
              {t('downloads.moreСertificates')}
            </button>
          )}
          <a
            href={documentUrl}
            download
            className="document-preview__download-btn retro-btn retro-btn--large"
          >
            {t('downloads.download')}
          </a>
        </div>
      </div>
    </div>
  );
}

export default DocumentPreview;
