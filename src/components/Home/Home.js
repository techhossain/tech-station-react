import React from 'react';
import useCourses from '../../hooks/useCourses';
import Banner from '../Banner/Banner';
import Course from '../Course/Course';
import { Row } from 'react-bootstrap';

const Home = () => {
  const [courses] = useCourses();

  return (
    <div className="container">
      <div className="row">
        <Banner></Banner>
      </div>
      <h2 className="py-5 fw-bold">Sop Selling Courses</h2>
      <Row xs={1} md={3} className="g-4">
        {
          courses.slice(1, 6).map(course => <Course key={course.id} course={course}></Course>)
        }
      </Row>
    </div>
  );
};

export default Home;