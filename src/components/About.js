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
            I am a Research Engineer at Gray Swan AI, based out of Pittsburgh, PA. I co-lead <a href="https://trinity.cs.stanford.edu/">Project Trinity,</a> a multidisciplinary study trying to better measure how good LLMs are at cybersecurity, and the risks involved with advances in AI capabilities.
          </p>
          <p>Some things I've done in the past:</p>
          <ul>
            <li><strong>Cyber Evals:</strong> I developed challenges for the <a href="https://www.aisi.gov.uk/">UK AISI</a>'s private cybersecurity evaluation set, which has been used to do pre-deployment testing of frontier models.</li>
            <li><strong>Large Language Models:</strong> I led the synthetic data curation effort for the PleIAs family of <a href="https://huggingface.co/collections/PleIAs/common-models-674cd0667951ab7c4ef84cc4">models</a>, an open-source, open-data, open-science multilingual family of large language models.</li>
            <li><strong>Small Language Models:</strong> At PleIAs, I trained <a href="https://huggingface.co/PleIAs/celadon">a model</a> to detect toxic content in <a href="https://huggingface.co/collections/PleIAs/common-corpus-6734e0f67ac3f35e44075f93">Common Corpus,</a> and an OCR error detection <a href="https://huggingface.co/PleIAs/OCRerrcr">model.</a></li>
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

