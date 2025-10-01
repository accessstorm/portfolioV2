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

    // Set initial positions (squiggly arrangement)
    const initialPositions = [
      { x: -200, y: 100, rotation: -15 }, // 2019 - bottom left
      { x: -100, y: -50, rotation: 10 },  // 2020 - top left
      { x: 0, y: 150, rotation: -20 },    // 2021 - bottom center
      { x: 100, y: -80, rotation: 15 },   // 2022 - top right
      { x: 200, y: 80, rotation: -10 }    // 2023 - bottom right
    ];

    // Set initial positions
    eventsRef.current.forEach((event, idx) => {
      if (event && initialPositions[idx]) {
        gsap.set(event, {
          x: initialPositions[idx].x,
          y: initialPositions[idx].y,
          rotation: initialPositions[idx].rotation,
          opacity: 0.7
        });
      }
    });

    // Animate to original positions on scroll
    eventsRef.current.forEach((event, idx) => {
      if (event) {
        gsap.to(event, {
          x: 0,
          y: 0,
          rotation: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: idx * 0.1,
          scrollTrigger: {
            trigger: container,
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
    <section className="timeline-section timeline-section-large" ref={containerRef}>
      <h2 ref={headerRef} className="timeline-main-title" style={{ marginBottom: 48 }}>My Journey Timeline</h2>
      <div className="timeline-large-horizontal" style={{ position: 'relative' }}>
        {timelineEvents.map((event, idx) => (
          <div
            ref={el => eventsRef.current[idx] = el}
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