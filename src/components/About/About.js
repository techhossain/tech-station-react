import React from 'react';
import img from '../../img/banner.jpg'

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <h2>About</h2>
        <div className="text-center">
          <img className="img-fluid" src={img} alt="course" />
          <h3>Transform your life through education</h3>
          <p>Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</p>
        </div>
      </div>
    </div>
  );
};

export default About;