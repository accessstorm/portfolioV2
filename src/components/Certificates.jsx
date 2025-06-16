import React, { useState } from 'react';
import Navbar from './Navbar';
import ParticleNetwork from './ParticleNetwork';
import CustomCursor from './CustomCursor';
import './Certificates.css';

const Certificates = () => {
  const [expandedContainer, setExpandedContainer] = useState(null);
  const [currentCertificateIndex, setCurrentCertificateIndex] = useState(0);

  // Example data structure - you can modify this according to your certificates
  const certificateData = {
    'Machine Learning': [
      {
        title: 'ML Certificate 1',
        issuer: 'Issuing Organization',
        date: '2023',
        image: '/path-to-certificate-image-1.jpg',
        description: 'Description of the certificate'
      },
      {
        title: 'ML Certificate 2',
        issuer: 'Issuing Organization',
        date: '2023',
        image: '/path-to-certificate-image-2.jpg',
        description: 'Description of the certificate'
      },
      {
        title: 'ML Certificate 3',
        issuer: 'Issuing Organization',
        date: '2023',
        image: '/path-to-certificate-image-3.jpg',
        description: 'Description of the certificate'
      }
    ],
    'Artificial Intelligence': [
      {
        title: 'AI Certificate 1',
        issuer: 'Issuing Organization',
        date: '2023',
        image: '/path-to-certificate-image-4.jpg',
        description: 'Description of the certificate'
      }
    ]
  };

  const handleContainerClick = (domain) => {
    setExpandedContainer(domain);
    setCurrentCertificateIndex(0);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const handleCloseModal = () => {
    setExpandedContainer(null);
    document.body.style.overflow = '';
  };

  const handlePrevCertificate = (e) => {
    e.stopPropagation();
    setCurrentCertificateIndex((prev) => 
      prev === 0 ? certificateData[expandedContainer].length - 1 : prev - 1
    );
  };

  const handleNextCertificate = (e) => {
    e.stopPropagation();
    setCurrentCertificateIndex((prev) => 
      prev === certificateData[expandedContainer].length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="app">
      <CustomCursor />
      <ParticleNetwork />
      <Navbar />
      <div className="certificates-container">
        <h1 className="certificates-title">Certificates</h1>
        <div className="certificates-grid">
          {Object.entries(certificateData).map(([domain]) => (
            <div
              key={domain}
              className="certificate-domain"
              onClick={() => handleContainerClick(domain)}
            >
              <h2 className="domain-title">{domain}</h2>
              <span className="expand-hint">click to expand</span>
            </div>
          ))}
        </div>
      </div>
      {expandedContainer && (
        <div className="certificate-modal-overlay" onClick={handleCloseModal}>
          <div className="certificate-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleCloseModal}>&times;</button>
            <h2 className="domain-title">{expandedContainer}</h2>
            <div className="certificate-details">
              <button 
                className="nav-button prev"
                onClick={handlePrevCertificate}
              >
                ←
              </button>
              <div className="certificate-content">
                <h3>{certificateData[expandedContainer][currentCertificateIndex].title}</h3>
                <p>Issued by: {certificateData[expandedContainer][currentCertificateIndex].issuer}</p>
                <p>Date: {certificateData[expandedContainer][currentCertificateIndex].date}</p>
                <p>{certificateData[expandedContainer][currentCertificateIndex].description}</p>
                <img 
                  src={certificateData[expandedContainer][currentCertificateIndex].image} 
                  alt={certificateData[expandedContainer][currentCertificateIndex].title}
                  className="certificate-image"
                />
              </div>
              <button 
                className="nav-button next"
                onClick={handleNextCertificate}
              >
                →
              </button>
              <div className="certificate-counter">
                {currentCertificateIndex + 1} / {certificateData[expandedContainer].length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates; 