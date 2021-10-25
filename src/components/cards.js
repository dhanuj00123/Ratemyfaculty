import React from "react";
import { Card } from "react-bootstrap";
const Cards = ({ name, img, rating, position }) => {
  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img
        variant="top"
        src={img}
        style={{
          borderRadius: "60%",
        }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {rating}
          {position}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Cards;
