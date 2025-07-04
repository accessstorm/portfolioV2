import React, { useState } from 'react';

const ResumeButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`resume-semicircle${hovered ? ' hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
      aria-label="View my Resume"
    >
      {!hovered && (
        <span className="resume-semicircle-text">View my<br />Resume</span>
      )}
      {hovered && (
        <div className="resume-semicircle-hover-content">
          <span className="resume-emoji" role="img" aria-label="page">📄</span>
          <span className="resume-hover-label">resume</span>
        </div>
      )}
    </div>
  );
};

export default ResumeButton; 