import React, { useState } from 'react';
import './CertificatesShowcase.css';

const stock1 = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=400&h=400&q=80';
const stock2 = 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=400&h=400&q=80';
const stock3 = 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=500&h=500&q=80';

export default function CertificatesShowcase() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="cert-preview-section">
      <h2 className="cert-preview-title">Certificates</h2>
      <div
        className={`cert-preview-stack${hovered ? ' hovered' : ''}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src={stock1} alt="Certificate 1" className="cert-img cert-img-left" />
        <img src={stock2} alt="Certificate 2" className="cert-img cert-img-right" />
        <img src={stock3} alt="Certificate 3" className="cert-img cert-img-top" />
        <a
          href="/certificates"
          className={`cert-view-all${hovered ? ' show' : ''}`}
        >
          View All
        </a>
      </div>
    </section>
  );
} 