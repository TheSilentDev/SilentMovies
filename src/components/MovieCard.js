import React from "react";

import { Card, Button } from "react-bootstrap";

export default function MovieCard(props) {
  const { title, overview, poster_path } = props;

  const image_path = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image_path} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{overview}</Card.Text>
        <Button variant="primary">more info</Button>
      </Card.Body>
    </Card>
  );
}
