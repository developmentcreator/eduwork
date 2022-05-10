import React from "react";
import './Navbar.css';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const TopBar = () => {
    return (
      <Navbar bg="light" expand="lg">
        {/* logo */}
        <Navbar.Brand href="#">Computer Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="Kategori" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink href="#" disabled>
              Link
            </NavLink>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav>
            {/* links */}
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/cart">
              {/* icon */}
              <i className="fas fa-shopping-cart" />
              Cart
              <span className="cartlogo_badge">0</span>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default TopBar;