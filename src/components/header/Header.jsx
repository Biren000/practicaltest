import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Vector from "../../images/Vector.svg";
import ShoppingCart from "../../images/shopping-cart.svg";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ background: "rgba(140, 195, 47, 0.15)" }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <div
              className="d-flex align-items-center pb-2 "
              style={{ gap: "5px" }}
            >
              <img src={Vector} alt="Vector" />
              <div className="fw-bold fs-4">Logo</div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <NavDropdown title="Products" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#">Products 1</NavDropdown.Item>
                <NavDropdown.Item href="#">Products 1</NavDropdown.Item>
                <NavDropdown.Item href="#">Products 1</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#pricing">About Us</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="search_bar"
                />
              </Nav.Link>
              <Nav.Link>
                <Button
                  className="d-flex align-items-center cart_btn"
                  style={{
                    gap: "5px",
                  }}
                >
                  <img src={ShoppingCart} alt="ShoppingCart" />
                  <div>My Cart</div>
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
