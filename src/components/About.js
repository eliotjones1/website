import React from 'react';
import './SectionStyles.css';
import profileImage from '../assets/headshot.jpg'; // Replace with the correct path to your image

function About() {
  return (
    <section id="about" className="section-container">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am currently the Head of Offensive Security at Gray Swan AI, based out of San Francisco, California. I co-lead <a href="https://trinity.cs.stanford.edu/">Project Trinity,</a> a multidisciplinary study trying to better measure how good LLMs are at cybersecurity, and the risks involved with advances in AI capabilities.
          </p>
          <p>Some things I've done in the past:</p>
          <ul>
            <li><strong>Press:</strong> My work has been featured in <a href="https://www.businessinsider.com/ai-agent-hacker-stanford-study-outperform-human-artemis-2025-12">Business Insider</a> and the <a href="https://www.wsj.com/tech/ai/ai-hackers-are-coming-dangerously-close-to-beating-humans-4afc3ad6">Wall Street Journal</a>.</li>
            <li><strong>Advising:</strong> I advised the creation of the UChicago XLab AI Security <a href="https://xlabaisecurity.com/">course</a>, which is an introduction to the field of AI security.</li>
            <li><strong>Cyber Evals:</strong> I developed challenges for the <a href="https://www.aisi.gov.uk/">UK AISI</a>'s private cybersecurity evaluation set, which has been used to do pre-deployment testing of frontier models.</li>
            <li><strong>Large Language Models:</strong> I led the synthetic data curation effort for the PleIAs family of <a href="https://huggingface.co/collections/PleIAs/common-models-674cd0667951ab7c4ef84cc4">models</a>, an open-source, open-data, open-science multilingual family of large language models.</li>
            <li><strong>Cybench:</strong> I was a core contributor to <a href="https://cybench.github.io/">Cybench</a>, a benchmark for evaluating the cybersecurity abilities of large language models, currrently being used by frontier AI labs.</li>
          </ul>
          <p>I graduated from Stanford University in 2023 with my B.S. in Data Science, and in 2024 with my MsC in computer science, advised by Dr. Fei Fei Li.</p>
        </div>
        <div className="about-image">
          <img src={profileImage} alt="Profile" />
        </div>
      </div>
      <hr className="section-divider" />
    </section>
  );
}

export default About;

