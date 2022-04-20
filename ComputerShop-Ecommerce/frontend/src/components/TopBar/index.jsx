import React from "react";
import { Navbar, NavbarBrand, Nav, NavDropdown } from "react-bootstrap";
import { Container, Form, FormControl, Button } from "react-bootstrap";
import Login from "../Profile";
import Cart from "../Order";




const TopBar = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="sm" collapseOnSelect>
                <Container>
                    <NavbarBrand href="/">Computer Shop</NavbarBrand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <NavDropdown title="Category" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Utama</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Laptop</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Deckstop</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Aksesoris</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Details</NavDropdown.Item>
                        </NavDropdown>
                        <Form className="d-flex">
                            <FormControl  type="search" placeholder="Search" className="me-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav className="ml-auto">
                            <Nav.Link>
                                <i className="fas fa fa-shopping-cart"></i>
                                </Nav.Link>
                            <Nav.Link>
                                <i className="fas fa fa-user"></i>
                                </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
           </Navbar>
            </header>
    )
}

export default TopBar;


