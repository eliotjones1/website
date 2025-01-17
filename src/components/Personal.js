import React from 'react';
import './SectionStyles.css';

function Personal() {
  return (
    <section id="personal" className="section-container">
      <h2>Personal</h2>
      <p>
        I dedicated the better part of a decade of my life towards becoming a professional soccer player. 
        Throughout the first two years of high school, I would drive two hours each way from CT to MA to train with the New England Revolution academy.
        Eventually, I left school and was full-time with the academy, training with the professionals in the morning and the academy at night. 
        I've participated in multiple professional pre-seasons, and made five international appearances for the United States youth national team against Bosnia and Herzegovina, Croatia (twice), Macedonia, and Japan. 
        I also played four years at Stanford University.
      </p>
      <p>
        Things I love:
      </p>
      <ul>
        <li>Soccer (naturally)</li>
        <li>Dogs</li>
        <li>Fantasy movies, tv shows, and books</li>
      </ul>
      <hr className="section-divider" />
    </section>
  );
}

export default Personal;

