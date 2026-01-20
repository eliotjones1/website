import React, { useEffect, useRef, useState } from 'react';
import './SectionStyles.css';
import profileImage from '../assets/headshot.jpg';

function About() {
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
      id="about"
      ref={sectionRef}
      className={`section-container ${isVisible ? 'visible' : ''}`}
    >
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I am currently the Head of Offensive Security at <a href="https://grayswan.ai" target="_blank" rel="noopener noreferrer">Gray Swan AI</a>, based out of San Francisco, California.
            I co-lead <a href="https://trinity.cs.stanford.edu/" target="_blank" rel="noopener noreferrer">Project Trinity</a>, a multidisciplinary study measuring how capable LLMs are at cybersecurity, and the risks involved with advances in AI capabilities.
          </p>

          <p>Some things I've done in the past:</p>

          <ul>
            <li>
              <strong>Press</strong> — My work has been featured in <a href="https://www.businessinsider.com/ai-agent-hacker-stanford-study-outperform-human-artemis-2025-12" target="_blank" rel="noopener noreferrer">Business Insider</a> and the <a href="https://www.wsj.com/tech/ai/ai-hackers-are-coming-dangerously-close-to-beating-humans-4afc3ad6" target="_blank" rel="noopener noreferrer">Wall Street Journal</a>.
            </li>
            <li>
              <strong>Advising</strong> — I advised the creation of the UChicago XLab AI Security <a href="https://xlabaisecurity.com/" target="_blank" rel="noopener noreferrer">course</a>, an introduction to the field of AI security.
            </li>
            <li>
              <strong>Cyber Evals</strong> — Developed challenges for the <a href="https://www.aisi.gov.uk/blog/pre-deployment-evaluation-of-anthropics-upgraded-claude-3-5-sonnet" target="_blank" rel="noopener noreferrer">UK AISI</a>'s private cybersecurity evaluation set, used for pre-deployment testing of frontier models.
            </li>
            <li>
              <strong>Large Language Models</strong> — Led the synthetic data curation effort for the PleIAs family of <a href="https://huggingface.co/collections/PleIAs/common-models-674cd0667951ab7c4ef84cc4" target="_blank" rel="noopener noreferrer">models</a>, an open-source, open-data, multilingual family of large language models.
            </li>
            <li>
              <strong>Cybench</strong> — Core contributor to <a href="https://cybench.github.io/" target="_blank" rel="noopener noreferrer">Cybench</a>, a benchmark for evaluating the cybersecurity abilities of large language models.
            </li>
          </ul>

          <p>
            I graduated from Stanford University in 2023 with my B.S. in Data Science,
            and in 2024 with my M.S. in Computer Science, advised by Dr. Fei-Fei Li.
          </p>
        </div>
        <div className="about-image">
          <img src={profileImage} alt="Eliot Jones" />
        </div>
      </div>
    </section>
  );
}

export default About;
