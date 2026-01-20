import React, { useEffect, useRef, useState } from 'react';
import './SectionStyles.css';

function Contact() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`section-container ${isVisible ? 'visible' : ''}`}
    >
      <h2>Get in Touch</h2>

      <div className="contact-content">
        <p className="contact-intro">
          If you want to talk about life, work, Liverpool winning the quadruple,
          or collaborate on research — feel free to reach out.
        </p>

        <div className="contact-links">
          <div className="contact-item">
            <strong>Email</strong>
            <span>eliot [at] grayswan [dot] ai</span>
          </div>

          <div className="contact-item">
            <strong>LinkedIn</strong>
            <a href="https://www.linkedin.com/in/eliot-krzysztof-jones" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/eliot-krzysztof-jones
            </a>
          </div>

          <div className="contact-item">
            <strong>Twitter</strong>
            <a href="https://twitter.com/eliotkjones" target="_blank" rel="noopener noreferrer">@eliotkjones</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
