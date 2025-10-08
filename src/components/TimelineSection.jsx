import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { GraduationCapIcon, ProjectIcon, RobotIcon, CubesIcon, GlobeIcon } from './GlassmorphismIcons';

gsap.registerPlugin(ScrollTrigger);

const timelineEvents = [
  {
    year: '2019',
    label: 'Started B.E. in AIML',
    icon: <GraduationCapIcon size={72} color="#00aaff" />,
    reveal: 'Joined college and met amazing friends!',
  },
  {
    year: '2020',
    label: 'First Freelance Project',
    icon: <ProjectIcon size={72} color="#a259ff" />,
    reveal: 'Built my first real-world app for a client.',
  },
  {
    year: '2021',
    label: 'ML Model Deployed',
    icon: <RobotIcon size={72} color="#ffb300" />,
    reveal: 'My ML model made its first prediction online!',
  },
  {
    year: '2022',
    label: 'Blender 3D Modeling',
    icon: <CubesIcon size={72} color="#00c896" />,
    reveal: 'Created my first 3D character in Blender.',
  },
  {
    year: '2023',
    label: 'Portfolio Launched',
    icon: <GlobeIcon size={72} color="#ff4c60" />,
    reveal: 'Launched this portfolio to the world!',
  },
];

export default function TimelineSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const containerRef = useRef();
  const headerRef = useRef();
  const eventsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Animate Timeline header
    if (headerRef.current) {
      const split = new SplitType(headerRef.current, { types: 'chars' });
      gsap.from(split.chars, {
        y: '110%',
        opacity: 0,
        stagger: 0.04,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }

    // Simple scroll-based animation
    eventsRef.current.forEach((event, idx) => {
      if (event) {
        // Set initial state - keep opacity at 1 to prevent transparency flicker
        gsap.set(event, {
          opacity: 1,
          y: 100,
          scale: 0.8
        });

        // Animate on scroll
        gsap.to(event, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: event,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="timeline-section" ref={containerRef}>
      <h2 ref={headerRef} className="timeline-main-title">My Journey Timeline</h2>
      <div className="timeline-scroll-container">
        {timelineEvents.map((event, idx) => (
          <div
            ref={el => eventsRef.current[idx] = el}
            className={`timeline-scroll-item ${idx % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}
            key={event.year}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <div className="timeline-card">
              <div className="glassmorphism-icon">{event.icon}</div>
              <div className="glassmorphism-year">{event.year}</div>
              <div className="glassmorphism-label">{event.label}</div>
            </div>
            <div className={`timeline-description ${idx % 2 === 0 ? 'timeline-desc-left' : 'timeline-desc-right'}`}>
              <div className="description-content">
                <h3 className="description-title">{event.label}</h3>
                <p className="description-text">{event.reveal}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}