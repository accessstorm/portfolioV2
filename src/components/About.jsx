import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import myFaceImage from '../assets/images/my-face.jpg';

const About = () => {
  const aboutRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    // Animate About header
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
    // Animate about text
    const aboutText = aboutRef.current.querySelector('.about-text');
    const lines = new SplitType(aboutText, { types: 'lines' });
    gsap.from(lines.lines, {
      y: '100%',
      stagger: 0.1,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: aboutText,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-header">
        <div className="about-image-container">
          <img src={myFaceImage} alt="Your Face" />
        </div>
        <h2 className="section-title" ref={headerRef}>About</h2>
      </div>
      <div ref={aboutRef} className="about-text">
        <p>
          Hey there , I'm Jayavrata Sengupta aka <strong>Accessstorm</strong>.
          I work as a freelancer to create engaging and interactive web applications that push the boundaries
          of what's possible on the web.
        </p>
        <p>
          I am currently pursuing my B.E in Aiml and I do make Machine Learning models and enjoy Blender modeling
        </p>
      </div>
    </section>
  );
};

export default About; 