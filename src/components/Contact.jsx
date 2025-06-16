import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jayavrata-sengupta-123a62298',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/accessstorm/',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/accessstorm',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
];

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      gsap.to(modalRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    } else {
      document.body.style.overflow = '';
      gsap.to(modalRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in'
      });
    }
  }, [isModalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
    setIsModalOpen(false);
  };

  return (
    <section className="footer">
      <h2 className="section-title">Get in Touch</h2>
      <button
        className="email-link"
        onClick={() => setIsModalOpen(true)}
      >
        Contact Me
      </button>
      <div className="home-social-links">
        {socialLinks.map(link => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="home-social-link"
          >
            <img src={link.icon} alt={link.name} className="home-social-icon" />
            <span>{link.name}</span>
          </a>
        ))}
      </div>
      <div
        ref={modalRef}
        className="contact-modal"
        style={{ display: isModalOpen ? 'flex' : 'none' }}
      >
        <div className="modal-content">
          <button
            className="modal-close"
            onClick={() => setIsModalOpen(false)}
          >
            ×
          </button>
          <h2>Let's Work Together</h2>
          <form ref={formRef} className="modal-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="modal-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 