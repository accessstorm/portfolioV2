import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, ProjectsIcon, ContactIcon, MenuIcon, CloseIcon } from './GlassmorphismIcons';
import './Navbar.css';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [activeTooltip, setActiveTooltip] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e) => {
      if (activeTooltip) {
        setTooltipPosition({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastScrollY, activeTooltip]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar navbar-glass-glare ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
        <div className="navbar-brand">
          <a href="https://github.com/accessstorm" target="_blank" className="alternating-text">
            <span className="text-1">ACCESSSTORM</span>
            <span className="text-2">VIEW GITHUB</span>
          </a>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>
        <ul className="navbar-links desktop-nav">
          <li>
            <Link 
              to="/" 
              className="home-link nav-icon-link"
              onMouseEnter={() => setActiveTooltip('home')}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              <HomeIcon size={34} />
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className="nav-icon-link"
              onMouseEnter={() => setActiveTooltip('projects')}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              <ProjectsIcon size={34} />
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="nav-icon-link"
              onMouseEnter={() => setActiveTooltip('contact')}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              <ContactIcon size={34} />
            </Link>
          </li>
        </ul>
      </nav>

      {/* Floating Tooltip */}
      {activeTooltip && (
        <div 
          className="floating-tooltip"
          style={{
            position: 'fixed',
            left: tooltipPosition.x,
            top: tooltipPosition.y,
            transform: 'translate(-50%, -100%)',
            zIndex: 10000,
            pointerEvents: 'none'
          }}
        >
          {activeTooltip === 'home' && 'Home'}
          {activeTooltip === 'projects' && 'Projects'}
          {activeTooltip === 'contact' && 'Contact Me'}
        </div>
      )}

      {/* Mobile Sidebar */}
      <div className={`sidebar-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
      <div className={`mobile-sidebar ${isMenuOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <h3>Menu</h3>
          <button className="sidebar-close" onClick={closeMenu}>✕</button>
        </div>
        <ul className="sidebar-links">
          <li>
            <Link to="/" onClick={closeMenu} className="sidebar-link">
              <HomeIcon size={24} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={closeMenu} className="sidebar-link">
              <ProjectsIcon size={24} />
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu} className="sidebar-link">
              <ContactIcon size={24} />
              <span>Contact Me</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar; 