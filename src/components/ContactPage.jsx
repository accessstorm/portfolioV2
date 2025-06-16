import React, { useState } from 'react';
import Navbar from './Navbar';
import ParticleNetwork from './ParticleNetwork';
import CustomCursor from './CustomCursor';
import './ContactPage.css';

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

const WEB3FORMS_ACCESS_KEY = "3727fcb0-26b4-4893-83c1-14a59a2ad826";

const ContactPage = () => {
  const [envelopeGone, setEnvelopeGone] = useState(false);
  const [startFall, setStartFall] = useState(false);
  const [result, setResult] = useState("");

  const handleMessageClick = () => {
    setStartFall(true);
    setTimeout(() => {
      setEnvelopeGone(true);
    }, 700); // match CSS animation duration
  };

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
      <CustomCursor />
      <ParticleNetwork />
      <Navbar />
      <div className="contact-page-container">
        {!envelopeGone && (
          <div className={`envelope-outer${startFall ? ' fall' : ''}`}>
            <div className="envelope-line" />
            <div className="envelope-rect">
              <button className="message-btn big" onClick={handleMessageClick}>
                Message Me Now
              </button>
            </div>
          </div>
        )}
        {envelopeGone && (
          <div className="contact-form-container big-form form-pushed-down wide-form">
            <div className="form-content-split">
              <div className="form-left">
                <form className="contact-form" onSubmit={onSubmit}>
                  <h2>Contact Me</h2>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                  <label htmlFor="query">Query / Suggestion</label>
                  <textarea id="query" name="message" rows="4" required />
                  <button type="submit" className="submit-btn">Send</button>
                  <span className="form-status">{result}</span>
                </form>
              </div>
              <div className="form-separator" />
              <div className="form-right">
                <div className="social-header">Follow me on:</div>
                <div className="social-links">
                  {socialLinks.map(link => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <img src={link.icon} alt={link.name} className="social-icon" />
                      <span>{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage; 