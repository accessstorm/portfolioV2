import React, { useState } from 'react';
import resumePDF from './Jayavrata Sengupta-1up.pdf';
import { DownloadIcon } from './GlassmorphismIcons';

const ResumeButton = () => {
  const [hovered, setHovered] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Jayavrata Sengupta Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`resume-semicircle${hovered ? ' hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleDownload}
      tabIndex={0}
      aria-label="Download my Resume"
      role="button"
      style={{ cursor: 'pointer' }}
    >
      {!hovered && (
        <span className="resume-semicircle-text">Download my<br />Resume</span>
      )}
      {hovered && (
        <div className="resume-semicircle-hover-content">
          <DownloadIcon size={32} color="currentColor" />
          <span className="resume-hover-label">download</span>
        </div>
      )}
    </div>
  );
};

export default ResumeButton; 