import React, { useState } from 'react';
import { GraduationCapIcon, ProjectIcon, RobotIcon, CubesIcon, GlobeIcon } from './GlassmorphismIcons';

const timelineEvents = [
  {
    year: '2019',
    label: 'Started B.E. in AIML',
    icon: <GraduationCapIcon size={64} color="#00aaff" />,
    reveal: 'Joined college and met amazing friends!',
  },
  {
    year: '2020',
    label: 'First Freelance Project',
    icon: <ProjectIcon size={64} color="#a259ff" />,
    reveal: 'Built my first real-world app for a client.',
  },
  {
    year: '2021',
    label: 'ML Model Deployed',
    icon: <RobotIcon size={64} color="#ffb300" />,
    reveal: 'My ML model made its first prediction online!',
  },
  {
    year: '2022',
    label: 'Blender 3D Modeling',
    icon: <CubesIcon size={64} color="#00c896" />,
    reveal: 'Created my first 3D character in Blender.',
  },
  {
    year: '2023',
    label: 'Portfolio Launched',
    icon: <GlobeIcon size={64} color="#ff4c60" />,
    reveal: 'Launched this portfolio to the world!',
  },
];


export default function TimelineSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section className="timeline-section timeline-section-large">
      <h2 className="section-title" style={{ marginBottom: 48, fontSize: '2.8rem', letterSpacing: '0.04em' }}>My Journey Timeline</h2>
      <div className="timeline-large-horizontal" style={{ position: 'relative' }}>
        {timelineEvents.map((event, idx) => (
          <div
            className="timeline-large-event"
            key={event.year}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <div className="timeline-glassmorphism-container">
              <div className="glassmorphism-icon">{event.icon}</div>
              <div className="glassmorphism-year">{event.year}</div>
              <div className="glassmorphism-label">{event.label}</div>
            </div>
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