import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Navbar from './Navbar';
import CustomCursor from './CustomCursor';
import ParticleNetwork from './ParticleNetwork';
import './BlenderShowcase.css';

gsap.registerPlugin(ScrollTrigger);

const BlenderShowcase = () => {
  const containerRef = useRef();
  const headerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    
    if (!container) return;

    // Animate Blender Showcase header
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="blender-showcase-page" ref={containerRef}>
      <ParticleNetwork />
      <CustomCursor />
      <div className="blender-navbar-wrapper">
        <Navbar />
      </div>

      {/* Blender Showcase Header */}
      <section className="blender-header">
        <div className="blender-header-content">
          <h1 ref={headerRef} className="blender-main-title">Blender Showcase</h1>
          <p className="blender-subtitle">3D Art and Animation Portfolio</p>
        </div>
      </section>

      {/* Content Placeholder */}
      <section className="blender-content">
        <div className="content-placeholder">
          <h2>Coming Soon</h2>
          <p>This page will showcase my Blender 3D projects, animations, and artwork.</p>
        </div>
      </section>
    </div>
  );
};

export default BlenderShowcase;
