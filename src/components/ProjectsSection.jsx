import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

const projects = [
  {
    title: 'Interactive 3D Experience',
    description: 'A WebGL-powered interactive 3D experience',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60',
    link: '#'
  },
  {
    title: 'Creative Portfolio',
    description: 'A dynamic portfolio showcasing creative work',
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&auto=format&fit=crop&q=60',
    link: '#'
  },
  {
    title: 'Web Application',
    description: 'A modern web application with advanced features',
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&auto=format&fit=crop&q=60',
    link: '#'
  },
  {
    title: 'Mobile Experience',
    description: 'An immersive mobile-first web experience',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60',
    link: '#'
  }
];

const ProjectsSection = () => {
  const projectsRef = useRef(null);
  const imagePreviewRef = useRef(null);
  const headerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 900);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
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

    if (isMobile) return;
    const projectItems = projectsRef.current.querySelectorAll('.project-item');
    const imagePreview = imagePreviewRef.current;

    const handleMouseMove = (e) => {
      if (!imagePreview) return;
      imagePreview.style.left = e.clientX + 24 + 'px';
      imagePreview.style.top = e.clientY - 40 + 'px';
    };

    projectItems.forEach(item => {
      const imgSrc = item.getAttribute('data-img');
      item.addEventListener('mouseenter', () => {
        imagePreview.style.backgroundImage = `url(${imgSrc})`;
        gsap.to(imagePreview, {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
        document.addEventListener('mousemove', handleMouseMove);
      });
      item.addEventListener('mouseleave', () => {
        gsap.to(imagePreview, {
          opacity: 0,
          scale: 0.8,
          duration: 0.3,
          ease: 'power2.out'
        });
        document.removeEventListener('mousemove', handleMouseMove);
      });
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  return (
    <section className="projects" id="projects">
      <h2 ref={headerRef} className="section-title">Projects</h2>
      <div ref={projectsRef} className="project-list">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            className="project-item"
            data-img={project.image}
          >
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
      {!isMobile && (
        <div ref={imagePreviewRef} className="project-image-preview project-image-cursor">
          <span className="project-image-cursor-text">Visit it now</span>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
