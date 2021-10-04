import React from 'react';
import { Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

const Course = (props) => {

  const { id, title, description, image, price, trainer, averageRating, totalRating, totalEnrolled } = props.course;

  const url = `/course/${id}`;

  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title.slice(0, 50)}</Card.Title>
          <Card.Text> {description.slice(0, 100)}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>${price} - {averageRating}/{totalRating} </ListGroupItem>
          <ListGroupItem>{trainer}</ListGroupItem>
          <ListGroupItem>Enrolled: {totalEnrolled}</ListGroupItem>
        </ListGroup>
      </Card>
    </Col>
  );
};

export default Course;