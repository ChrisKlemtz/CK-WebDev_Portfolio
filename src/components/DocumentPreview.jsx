import { useEffect, useRef } from 'react';
import { useTranslation } from '../i18n/LanguageContext';

function DocumentPreview({ isOpen, onClose, documentUrl, documentName }) {
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
    <div className="document-preview-overlay">
      <div ref={modalRef} className="document-preview retro-box">
        <button className="document-preview__close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <h2 className="document-preview__title">
          <span className="text-accent">📄</span> {documentName}
        </h2>

        <div className="document-preview__viewer">
          <iframe
            src={documentUrl}
            title={documentName}
            className="document-preview__iframe"
          />
        </div>

        <div className="document-preview__actions">
          <a
            href={documentUrl}
            download
            className="document-preview__download-btn retro-btn retro-btn--large"
          >
            <span className="document-preview__icon">⬇</span>
            {t('downloads.download')}
          </a>
        </div>
      </div>
    </div>
  );
}

export default DocumentPreview;
