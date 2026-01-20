import React, { useEffect, useRef, useState } from 'react';
import './SectionStyles.css';

function Personal() {
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
      id="personal"
      ref={sectionRef}
      className={`section-container ${isVisible ? 'visible' : ''}`}
    >
      <h2>Personal</h2>

      <div className="personal-story">
        <p>
          I dedicated the better part of a decade towards becoming a professional soccer player.
          Throughout the first two years of high school, I would drive two hours each way from CT to MA
          to train with the New England Revolution academy. Eventually, I left school and was full-time
          with the academy, training with the professionals in the morning and the academy at night.
        </p>
        <p>
          I've participated in multiple professional pre-seasons, and made five international appearances
          for the United States youth national team against Bosnia and Herzegovina, Croatia (twice),
          Macedonia, and Japan. I also played four years at Stanford University.
        </p>
      </div>

      <p>Things I love:</p>
      <ul>
        <li>Soccer (naturally)</li>
        <li>Dogs</li>
        <li>Fantasy books & films</li>
      </ul>

    </section>
  );
}

export default Personal;
