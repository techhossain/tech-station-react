import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Welcome to Tech Station</h1>
        <p className="col-md-8 fs-4">Choose from 155,000 online video courses with new additions published every month.Transform your life through education, Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</p>
        <Link to="/courses" className="btn btn-primary btn-lg" type="button">View Courses</Link>
      </div>
    </div>
  );
};

export default Banner;