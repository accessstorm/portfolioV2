import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { LinkedInIcon, GitHubIcon, LeetCodeIcon } from './GlassmorphismIcons';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jayavrata-sengupta-123a62298',
    icon: <LinkedInIcon size={24} />,
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/accessstorm/',
    icon: <LeetCodeIcon size={24} />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/accessstorm',
    icon: <GitHubIcon size={24} />,
  },
];

const Contact = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    // Animate Contact header
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
  }, []);

  return (
    <section className="footer">
      <h2 className="section-title" ref={headerRef}>Get in Touch</h2>
      <Link
        to="/contact"
        className="email-link"
      >
        Contact Me
      </Link>
      <div className="home-social-links">
        {socialLinks.map(link => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="home-social-link"
          >
            {link.icon}
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact; 