import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { RiStarSmileLine } from "react-icons/ri";
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/userAction";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const signOut = () => {
    dispatch(logout());
  };
  return (
    <header>
      {/* fixed="top" */}
      <Navbar
        className="navbar-dark"
        bg="primary"
        variant="light"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand href="/">
            <span>
              <RiStarSmileLine />
            </span>
            yummy-restaurant
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Menu">
                <LinkContainer to="/menu">
                  <NavDropdown.Item>All</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/entrees">
                  <NavDropdown.Item>Entrees</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/sides">
                  <NavDropdown.Item>Sides</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/desserts">
                  <NavDropdown.Item>Desserts</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/cart">
                <HiOutlineShoppingCart /> Cart
              </Nav.Link>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/account">
                    <NavDropdown.Item>Account</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={signOut}>
                    Sign Out
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link href="/login">
                  <HiOutlineUser /> Sign In
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
