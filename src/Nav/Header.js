import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Stack from "react-bootstrap/Stack";

function Header() {
  return (
    <>
      <Navbar bg="light" variant="light" className="header_component p-0 mb-5">
        <Container className="Navbar_Common">
          <Navbar.Brand>
            <Link to="/">Productivity ++</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Stack direction="horizontal" gap="3">
              <Link to="/pomodoro">Pomodoro</Link>
              <Link to="/notes">Notes</Link>
              <Link to="/taskmaster">TaskMaster</Link>
            </Stack>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
