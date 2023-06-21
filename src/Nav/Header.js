import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <>
      {/* <div className="">
        <ul>
          <div className="Navbar_brand">
            <li>Productivity ++</li>
          </div>
          <div className="">
            <li></li>
            <li>Placeholder 1</li>
            <li>Placeholder 2</li>
          </div>
        </ul>
      </div> */}

      <Navbar bg="light" variant="light">
        <Container className="Navbar_Common">
          <Navbar.Brand href="#home">Productivity ++</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className="Navbar_links">
              <Link to="">Pomodoro</Link>
            </Nav.Link>
            <Nav.Link>Placeholder 1</Nav.Link>
            <Nav.Link>Placeholder 2</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
