import React, { useState } from 'react';
import Navbar from './Navbar';
import ParticleNetwork from './ParticleNetwork';
import ClickSparks from './ClickSparks';
import { LinkedInIcon, GitHubIcon, LeetCodeIcon } from './GlassmorphismIcons';
import './ContactPage.css';

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

const WEB3FORMS_ACCESS_KEY = "3727fcb0-26b4-4893-83c1-14a59a2ad826";

const ContactPage = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <div className="app">
      <ParticleNetwork />
      <ClickSparks />
      <Navbar />
      <div className="contact-page-container redesigned-contact">
        <div className="contact-header-block">
          <h1 className="contact-main-title section-title">Contact Me</h1>
          <p className="contact-subtitle">Let's connect! I'm always open to new opportunities, collaborations, or just a friendly chat. Drop me a message or reach out on any platform below.</p>
        </div>
        <div className="contact-card contact-card-row">
          <div className="contact-socials-vertical">
            {socialLinks.map(link => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-icon-link"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
          <div className="contact-form-area">
            <form className="contact-form" onSubmit={onSubmit}>
              <label htmlFor="name" className="contact-form-label">Name</label>
              <input type="text" id="name" name="name" required placeholder="Enter your name" />
              <label htmlFor="email" className="contact-form-label">Email</label>
              <input type="email" id="email" name="email" required placeholder="Enter your email address" />
              <label htmlFor="query" className="contact-form-label">Query / Suggestion</label>
              <textarea id="query" name="message" rows="4" required placeholder="Type your message here..."></textarea>
              <button type="submit" className="submit-btn">Send</button>
              <span className="form-status">{result}</span>
            </form>
          </div>
          <div className="contact-vertical-title">
            <span>Contact Me</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;