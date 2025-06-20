import React, { useState } from 'react';
import { FaGraduationCap, FaProjectDiagram, FaRobot, FaCubes, FaGlobe } from 'react-icons/fa';

const timelineEvents = [
  {
    year: '2019',
    label: 'Started B.E. in AIML',
    icon: <FaGraduationCap size={64} color="#00aaff" />,
    reveal: 'Joined college and met amazing friends!',
  },
  {
    year: '2020',
    label: 'First Freelance Project',
    icon: <FaProjectDiagram size={64} color="#a259ff" />,
    reveal: 'Built my first real-world app for a client.',
  },
  {
    year: '2021',
    label: 'ML Model Deployed',
    icon: <FaRobot size={64} color="#ffb300" />,
    reveal: 'My ML model made its first prediction online!',
  },
  {
    year: '2022',
    label: 'Blender 3D Modeling',
    icon: <FaCubes size={64} color="#00c896" />,
    reveal: 'Created my first 3D character in Blender.',
  },
  {
    year: '2023',
    label: 'Portfolio Launched',
    icon: <FaGlobe size={64} color="#ff4c60" />,
    reveal: 'Launched this portfolio to the world!',
  },
];

function TimelineRibbon() {
  // SVG path for a swiggly ribbon, responsive for 5 events
  return (
    <svg className="timeline-ribbon-svg" viewBox="0 0 1000 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path
        d="M 40 60 Q 140 10, 240 60 T 440 60 T 640 60 T 840 60"
        stroke="url(#ribbon-gradient)" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <defs>
        <linearGradient id="ribbon-gradient" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00aaff"/>
          <stop offset="0.5" stopColor="#a259ff"/>
          <stop offset="1" stopColor="#ff4c60"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function TimelineSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section className="timeline-section timeline-section-large">
      <h2 className="section-title" style={{ marginBottom: 48, fontSize: '2.8rem', letterSpacing: '0.04em' }}>My Journey Timeline</h2>
      <div className="timeline-large-horizontal" style={{ position: 'relative' }}>
        <TimelineRibbon />
        {timelineEvents.map((event, idx) => (
          <div
            className="timeline-large-event"
            key={event.year}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <div className="timeline-large-icon">{event.icon}</div>
            <div className="timeline-large-year">{event.year}</div>
            <div className="timeline-large-label">{event.label}</div>
            <div className={`timeline-large-reveal${hoveredIdx === idx ? ' reveal-active' : ''}`}>
              {event.reveal}
            </div>
            <div className="timeline-large-magnifier" />
          </div>
        ))}
      </div>
    </section>
  );
} 