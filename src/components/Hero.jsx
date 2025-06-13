import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const heroTitle = heroRef.current;
    const heroLines = new SplitType(heroTitle, { types: 'lines' });

    gsap.from(heroLines.lines, {
      y: '110%',
      stagger: 0.1,
      delay: 0.2,
      duration: 1.2,
      ease: 'power3.out'
    });
  }, []);

  return (
    <section className="hero">
      <h1 ref={heroRef} className="hero-title">
         Jayavrata Sengupta
      </h1>
    </section>
  );
};

export default Hero; 