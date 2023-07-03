import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = function (path) {
    navigate(path);
  };

  return (
    <div className="home_component">
      <Row>
        <Col className="columns" md={4}>
          <Card>
            <Card.Header>Pomodoro Timer</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button
                onClick={() => {
                  handleClick("/pomodoro");
                }}
                variant="primary"
              >
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="columns" md={4}>
          <Card>
            <Card.Header>Note Keeper</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col className="columns" md={4}>
          <Card>
            <Card.Header>Task Master</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
