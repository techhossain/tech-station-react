import React from 'react';
import { Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';

const Courses = () => {

  const [courses] = useCourses();

  return (
    <div className="container">
      <div className="row">
        <Row xs={1} md={4} className="g-4">
          {
            courses.map(course => <Course key={course.id} course={course}></Course>)
          }

        </Row>
      </div>
    </div>
  );
};

export default Courses;