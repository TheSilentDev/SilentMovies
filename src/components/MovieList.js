import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "./MovieCard";

export default function MovieList(props) {
  const { movieList } = props;

  if (!movieList) {
    return (
      <Container>
        <Row className="center">
          <Col>Search for your favourite movies</Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className={"my-2"}>
      <Row>
        {movieList.map((movie, i) => {
          return (
            <Col>
              <MovieCard
                key={i}
                title={movie.title}
                overview={movie.overview}
                poster_path={movie.poster_path}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
