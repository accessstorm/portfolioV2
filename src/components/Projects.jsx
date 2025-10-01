import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Navbar from './Navbar';
import CustomCursor from './CustomCursor';
import ParticleNetwork from './ParticleNetwork';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef();
  const headerRef = useRef();

  const projects = [
    {
      id: 1,
      number: "01",
      title: "Dynasty World E-commerce",
      description: "Built a responsive e-commerce platform with interactive product displays, smooth category navigation, and seamless checkout experience. Features include real-time inventory management, dynamic pricing, and integrated payment processing.",
      liveLink: "#",
      codeLink: "#",
      backgroundImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop&q=80"
    },
    {
      id: 2,
      number: "02", 
      title: "Neural Chat Interface",
      description: "Developed an intelligent conversational AI platform with natural language processing capabilities. The system features context-aware responses, multi-language support, and real-time sentiment analysis for enhanced user interactions.",
      liveLink: "#",
      codeLink: "#",
      backgroundImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&h=1080&fit=crop&q=80"
    },
    {
      id: 3,
      number: "03",
      title: "Quantum Portfolio",
      description: "Created an immersive 3D portfolio experience using WebGL and Three.js. Features include particle systems, interactive 3D models, smooth camera transitions, and responsive design optimized for all devices.",
      liveLink: "#",
      codeLink: "#",
      backgroundImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920&h=1080&fit=crop&q=80"
    },
    {
      id: 4,
      number: "04",
      title: "Zenith Task Manager",
      description: "Designed a minimalist productivity application with drag-and-drop functionality, real-time collaboration features, and intelligent task prioritization. Includes time tracking, progress analytics, and seamless team integration.",
      liveLink: "#",
      codeLink: "#",
      backgroundImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1920&h=1080&fit=crop&q=80"
    },
    {
      id: 5,
      number: "05",
      title: "Aurora Data Studio",
      description: "Built a comprehensive data visualization platform with interactive charts, real-time data streaming, and advanced filtering capabilities. Features include custom dashboard creation, export functionality, and collaborative sharing.",
      liveLink: "#",
      codeLink: "#",
      backgroundImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop&q=80"
    },
    {
      id: 6,
      number: "06",
      title: "Nexus Mobile Experience",
      description: "Crafted a premium mobile application with fluid animations, gesture-based navigation, and offline functionality. Includes push notifications, biometric authentication, and seamless cloud synchronization.",
      liveLink: "#",
      codeLink: "#",
      backgroundImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&h=1080&fit=crop&q=80"
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    
    if (!container) return;

    // Animate Projects header
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

    // Animate project sections
    projects.forEach((project, index) => {
      const section = document.querySelector(`.project-section-${project.id}`);
      const background = section?.querySelector('.project-background');
      const content = section?.querySelector('.project-content');
      const title = section?.querySelector('.project-title');
      const description = section?.querySelector('.project-description');
      const links = section?.querySelector('.project-links');

      if (!section || !background || !content) return;

      // Parallax background effect
      gsap.to(background, {
        y: "-50%",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Section fade in/out
      gsap.fromTo(section, 
        {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Title animation with SplitText
      if (title) {
        const splitTitle = new SplitType(title, { types: 'chars' });
        gsap.fromTo(splitTitle.chars, 
          {
            y: 50,
            opacity: 0,
            rotationX: -90
          },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 0.8,
            stagger: 0.02,
            ease: "power2.out",
            scrollTrigger: {
              trigger: title,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Description animation
      if (description) {
        const splitDescription = new SplitType(description, { types: 'lines' });
        gsap.fromTo(splitDescription.lines, 
          {
            y: 30,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
            delay: 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: description,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Links animation
      if (links) {
        gsap.fromTo(links, 
          {
            y: 20,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: links,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    // Custom cursor effects
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    const projectLinks = document.querySelectorAll('.project-link');

    projectLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        gsap.to(cursor, { scale: 0, duration: 0.3 });
        gsap.to(cursorFollower, { 
          scale: 3, 
          borderColor: '#C0A15E',
          duration: 0.3 
        });
      });

      link.addEventListener('mouseleave', () => {
        gsap.to(cursor, { scale: 1, duration: 0.3 });
        gsap.to(cursorFollower, { 
          scale: 1, 
          borderColor: '#F5F5F5',
          duration: 0.3 
        });
      });
    });

  }, [projects]);

  return (
    <div className="projects-page" ref={containerRef}>
      <ParticleNetwork />
      <CustomCursor />
      <div className="projects-navbar-wrapper projects-page-navbar">
        <Navbar />
      </div>
      

      {/* Projects Header */}
      <section className="projects-header">
        <div className="projects-header-content">
          <h1 ref={headerRef} className="projects-main-title">Projects</h1>
          <p className="projects-subtitle">A showcase of my creative and technical work</p>
        </div>
      </section>

      {/* Projects Sections */}
      {projects.map((project) => (
        <section 
          key={project.id} 
          className={`project-section project-section-${project.id}`}
        >
          {/* Background Layer */}
          <div 
            className="project-background"
            style={{ backgroundImage: `url(${project.backgroundImage})` }}
          ></div>
          
          {/* Foreground Layer with Glassmorphism */}
          <div className="project-content">
            <div className="project-glass-container">
              <div className="project-number">{project.number}</div>
              <h1 className="project-title">{project.title}</h1>
            </div>
            
            <div className="project-glass-container project-info-container">
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a href={project.liveLink} className="project-link">VIEW LIVE</a>
                <a href={project.codeLink} className="project-link">VIEW CODE</a>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Projects;
