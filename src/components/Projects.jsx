import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

const Projects = () => {
  const projectsRef = useRef(null);
  const imagePreviewRef = useRef(null);

  useEffect(() => {
    const projectItems = projectsRef.current.querySelectorAll('.project-item');
    const imagePreview = imagePreviewRef.current;

    projectItems.forEach(item => {
      const imgSrc = item.getAttribute('data-img');

      item.addEventListener('mouseenter', () => {
        imagePreview.style.backgroundImage = `url(${imgSrc})`;
        gsap.to(imagePreview, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: 'power2.out'
        });
      });

      item.addEventListener('mouseleave', () => {
        gsap.to(imagePreview, {
          opacity: 0,
          scale: 0.8,
          duration: 0.4,
          ease: 'power2.out'
        });
      });
    });

    // Animate projects on scroll
    gsap.utils.toArray('.project-item').forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
        },
        duration: 1,
        delay: i * 0.2,
        ease: 'power3.out'
      });
    });
  }, []);

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>
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
      <div ref={imagePreviewRef} className="project-image-preview" />
    </section>
  );
};

export default Projects; 