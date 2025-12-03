import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import DocumentPreview from './DocumentPreview';
import AdditionalCertificates from './AdditionalCertificates';

function DownloadModal({ isOpen, onClose }) {
  const { t } = useTranslation();
  const modalRef = useRef(null);
  const [previewDocument, setPreviewDocument] = useState(null);
  const [showAdditionalCerts, setShowAdditionalCerts] = useState(false);
  const [additionalCertificates, setAdditionalCertificates] = useState([]);

  // Load certificates from JSON file
  useEffect(() => {
    fetch('/assets/documents/additional/certificates.json')
      .then(response => response.json())
      .then(data => {
        const certs = data.map(cert => ({
          name: cert.name,
          url: `/assets/documents/additional/${cert.filename}`
        }));
        setAdditionalCertificates(certs);
      })
      .catch(error => {
        console.error('Error loading certificates:', error);
        setAdditionalCertificates([]);
      });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Don't handle clicks if other modals are open
      if (previewDocument || showAdditionalCerts) return;

      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        if (showAdditionalCerts) {
          setShowAdditionalCerts(false);
        } else if (previewDocument) {
          setPreviewDocument(null);
        } else {
          onClose();
        }
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
      if (!isOpen && !previewDocument && !showAdditionalCerts) {
        document.body.style.overflow = 'unset';
      }
    };
  }, [isOpen, onClose, previewDocument, showAdditionalCerts]);

  const handlePreview = (url, name, isCertificate = false) => {
    setPreviewDocument({ url, name, isCertificate });
  };

  const closePreview = () => {
    setPreviewDocument(null);
  };

  const handleShowAdditionalCerts = () => {
    setShowAdditionalCerts(true);
  };

  const closeAdditionalCerts = () => {
    setShowAdditionalCerts(false);
  };

  const closeAllModals = () => {
    setPreviewDocument(null);
    setShowAdditionalCerts(false);
    onClose();
  };

  // Reset to main menu when modal is closed
  useEffect(() => {
    if (!isOpen) {
      setPreviewDocument(null);
      setShowAdditionalCerts(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {!previewDocument && !showAdditionalCerts && (
        <div className="download-modal-overlay">
          <div ref={modalRef} className="download-modal retro-box">
            <button className="download-modal__close" onClick={onClose} aria-label="Close">
              ✕
            </button>

            <h2 className="download-modal__title">
              {t('downloads.title')}
            </h2>

            <p className="download-modal__description">
              {t('downloads.description')}
            </p>

            <div className="download-modal__buttons">
              <button
                onClick={() => handlePreview('/assets/documents/CK_Resume.pdf', t('downloads.cv'), false)}
                className="download-modal__btn retro-btn retro-btn--large"
              >
                <span className="download-modal__icon">📄</span>
                <span className="download-modal__label">{t('downloads.cv')}</span>
              </button>

              <button
                onClick={() => handlePreview('/assets/documents/Zertifikat_Klemtz, Christoph_FbW WD 24-D04 A-2.pdf', t('downloads.certificates'), true)}
                className="download-modal__btn retro-btn retro-btn--large retro-btn--secondary"
              >
                <span className="download-modal__icon">🏆</span>
                <span className="download-modal__label">{t('downloads.certificates')}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <DocumentPreview
        isOpen={!!previewDocument && !showAdditionalCerts}
        onClose={closePreview}
        onCloseAll={closeAllModals}
        documentUrl={previewDocument?.url}
        documentName={previewDocument?.name}
        isCertificate={previewDocument?.isCertificate}
        onShowAdditionalCerts={handleShowAdditionalCerts}
        additionalCertificates={additionalCertificates}
      />

      <AdditionalCertificates
        isOpen={showAdditionalCerts}
        onClose={closeAdditionalCerts}
        onCloseAll={closeAllModals}
        certificates={additionalCertificates}
      />
    </>
  );
}

export default DownloadModal;
