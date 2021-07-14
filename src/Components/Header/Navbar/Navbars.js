import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { SiReactrouter } from "react-icons/si";
import { RiShoppingCartLine } from "react-icons/ri";
import { LinkContainer } from "react-router-bootstrap";
import { FaUserAlt } from "react-icons/fa";
import "./Navbar.css";

const Navbars = () => {
  return (
    <Navbar
      bg="light"
      expand="lg"
      variant="light"
      className="shadow-sm position-sticky fixed-top"
    >
      <Container fluid className="d-flex justify-content-between mx-2">
        <LinkContainer to="/">
          <Navbar.Brand>
            <SiReactrouter className="logo" />
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/store">
              <Nav.Link className="nav-item my-auto mx-2 ">فروشگاه</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link className="nav-item my-auto mx-2">صفحه اصلی</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/account">
              <Nav.Link className="nav-item ">
                <div className=" mx-2">
                  <FaUserAlt className="logo-shop" />
                </div>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link className="nav-item">
                <div className=" mx-2">
                  <RiShoppingCartLine className="logo-shop" />
                </div>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
