import React from "react";
import { Navbar, NavbarBrand, Nav, NavDropdown } from "react-bootstrap";
import { Container, Form, FormControl, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'
import { getCategories } from '../../app/api/product'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory, setKeyword } from '../../app/features/Product/actions'
import { totalItemCart } from '../../utils'

export default function TopBar() {
  const [categories, setCategories] = useState([]);
  const products = useSelector(state => state.products);
  const cart = useSelector(state => state.cart);
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
    

    useEffect(() => {
        getCategories().then(({ data }) => setCategories(data));
    }, []);

    return (
            <Navbar bg="dark" variant="dark" expand="sm" collapseOnSelect>
                <Container>
                    <IndexLinkContainer to="/" exact>
                        <NavbarBrand>Computer Shop</NavbarBrand>
                    </IndexLinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                       <NavDropdown title={products.category || 'Kategori'} id="navbarScrollingDropdown">
                        {
                             categories.map((category, i) => (
                                <NavDropdown.Item 
                                    href="#" 
                                    key={i} 
                                    active={category.name === products.category} 
                                    onClick={() => dispatch(setCategory(category.name))}
                                >{category.name}</NavDropdown.Item>
                                ))
                            }
                        </NavDropdown>
                    </Nav>
                        <Form className="d-sm-inline-flex">
                            <FormControl  size="sm" type="search" placeholder="Search" className="me-sm-2" onChange={(e) => dispatch(setKeyword(e.target.value))} />
                            <Button variant="outline-success" size="sm" type="submit">Search</Button>
                        </Form>
                    <Nav className="ml-auto">
                        <LinkContainer to="/cart">
                            <Nav.Link className="mr-sm-2">
                                <i className="fas fa fa-shopping-cart"></i>
                                <span className="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-danger">
                                 { totalItemCart(cart) }
                                    <span className="visually-hidden">Total item</span>
                                </span>
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={auth.user ? '/profile' : '/login'}>
                            <Nav.Link title="profil">
                                <i className="fas fa fa-user"></i>
                            </Nav.Link>
                        </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};


