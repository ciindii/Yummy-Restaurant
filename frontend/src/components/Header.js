import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { RiStarSmileLine } from "react-icons/ri";
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";

const Header = () => {
  return (
    <header>
      <Navbar fixed="top" bg="light" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            <span>
              <RiStarSmileLine />
            </span>
            yummy-restaurant
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/cart">
                <HiOutlineShoppingCart /> Cart
              </Nav.Link>
              <Nav.Link href="/login">
                <HiOutlineUser /> Sign In
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;