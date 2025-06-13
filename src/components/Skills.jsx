import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const skills = [
  'React', 'JavaScript', 'TypeScript', 'Node.js', 'Three.js',
  'GSAP', 'WebGL', 'CSS', 'HTML', 'Next.js', 'Vue.js', 'Python'
];

const Skills = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeTrack = marqueeRef.current;
    const originalContent = marqueeTrack.innerHTML;
    marqueeTrack.innerHTML = originalContent + originalContent;

    const trackWidth = marqueeTrack.offsetWidth / 2;
    
    gsap.to(marqueeTrack, {
      x: -trackWidth,
      duration: 20,
      repeat: -1,
      ease: 'none',
      onRepeat: () => {
        gsap.set(marqueeTrack, { x: 0 });
      }
    });
  }, []);

  return (
    <section className="skills-marquee">
      <div className="marquee-container">
        <div className="marquee-track" ref={marqueeRef}>
          {skills.map((skill, index) => (
            <span key={index} className="skill-item">
              {skill}
              <span className="star">★</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 