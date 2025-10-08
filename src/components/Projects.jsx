import React, { useRef, useEffect, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Navbar from './Navbar';
import ParticleNetwork from './ParticleNetwork';
import ClickSparks from './ClickSparks';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef();
  const headerRef = useRef();
  const [hoveredFolderId, setHoveredFolderId] = useState(null);
  const [activeFolderId, setActiveFolderId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef();

  const folderData = [
    {
      id: 'blender',
      label: 'BLENDER',
      hoverText: 'CLICK ME',
      pagePath: '/blender-showcase',
      color: '#00c896',
      bgGradient: 'linear-gradient(135deg, #0a2e1a 0%, #1a4d2e 50%, #2d5a3d 100%)'
    },
    {
      id: 'aiml',
      label: 'AIML',
      hoverText: 'CLICK ME',
      pagePath: '/aiml-showcase',
      color: '#a259ff',
      bgGradient: 'linear-gradient(135deg, #2a1a4d 0%, #3d2a5a 50%, #4d3a6a 100%)'
    },
    {
      id: 'data',
      label: 'DATA',
      hoverText: 'CLICK ME',
      pagePath: '/data-showcase',
      color: '#ffb300',
      bgGradient: 'linear-gradient(135deg, #4d3a0a 0%, #5a4d2a 50%, #6a5d3a 100%)'
    }
  ];

  const projects = useMemo(() => [
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
  ], []);

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

  }, [projects]);

  const handleFolderClick = (folderId, pagePath) => {
    setActiveFolderId(folderId);
    setShowPopup(true);
    
    // Animate popup in
    setTimeout(() => {
      if (popupRef.current) {
        popupRef.current.classList.add('active');
      }
    }, 100);
  };

  const handleClosePopup = () => {
    if (popupRef.current) {
      popupRef.current.classList.remove('active');
      setTimeout(() => {
        setShowPopup(false);
        setActiveFolderId(null);
      }, 500);
    }
  };

  const handleGoToPage = () => {
    const activeFolder = folderData.find(folder => folder.id === activeFolderId);
    if (activeFolder) {
      window.location.href = activeFolder.pagePath;
    }
  };

  return (
    <div className="projects-page" ref={containerRef}>
      <ParticleNetwork />
      <ClickSparks />
      <div className="projects-navbar-wrapper projects-page-navbar">
        <Navbar />
      </div>
      
      {/* Folder Stack */}
      <div className="blender-folders-wrapper">
        {folderData.map((folder, index) => (
          <div
            key={folder.id}
            className={`blender-folder-item ${hoveredFolderId === folder.id ? 'hovered' : ''}`}
            style={{
              '--folder-color': folder.color,
              '--folder-bg': folder.bgGradient,
              '--folder-index': index,
              background: folder.bgGradient,
              zIndex: folderData.length - index
            }}
            onMouseEnter={() => setHoveredFolderId(folder.id)}
            onMouseLeave={() => setHoveredFolderId(null)}
            onClick={() => handleFolderClick(folder.id, folder.pagePath)}
          >
            <div className="folder-content">
              <div className="folder-text alternating-text">
                <span className="text-1">{folder.label}</span>
                <span className="text-2">{folder.hoverText}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Blender Popup */}
      {showPopup && (
        <>
          <div className="blender-popup-overlay active" onClick={handleClosePopup} />
          <div ref={popupRef} className="blender-popup">
            <div className="blender-popup-content">
              <h2>
                {activeFolderId === 'blender' && 'Blender 3D Showcase'}
                {activeFolderId === 'aiml' && 'AI/ML Projects'}
                {activeFolderId === 'data' && 'Data Science Portfolio'}
              </h2>
              <p>
                {activeFolderId === 'blender' && 'Explore my collection of 3D models, animations, and artwork created with Blender. From character modeling to architectural visualization, discover the creative possibilities of 3D art.'}
                {activeFolderId === 'aiml' && 'Discover my artificial intelligence and machine learning projects. From neural networks to computer vision, explore the cutting-edge applications of AI technology.'}
                {activeFolderId === 'data' && 'Browse through my data science projects and analytics work. From statistical modeling to data visualization, see how I turn data into actionable insights.'}
              </p>
              <div className="blender-popup-buttons">
                <button className="blender-popup-button" onClick={handleGoToPage}>
                  Go to Page
                </button>
                <button className="blender-popup-button secondary" onClick={handleClosePopup}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Projects Header */}
      <section className="projects-header">
        <div className="projects-header-content">
          <h1 ref={headerRef} className="projects-main-title">Projects</h1>
          <p className="projects-subtitle">A showcase of my creative and technical work</p>
        </div>
        <div className="scroll-down-indicator">
          <div className="scroll-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
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
