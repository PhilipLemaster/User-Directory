import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './style.css';

const EmpCard = (props) => {
  return (
    <div>
      <Card className= "wholeCard">
        <CardBody>
          <CardTitle className="name">{props.emp.name}</CardTitle>
          <CardSubtitle className="title">{props.emp.title}</CardSubtitle>
          <CardSubtitle className="email">{props.emp.email}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default EmpCard;