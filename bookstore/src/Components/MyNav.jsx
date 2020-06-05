import React, {Component} from 'react';
import {Navbar, Nav,NavDropdown} from 'react-bootstrap'

export default class MyNav extends Component {
    render() {
        return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Book Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
               
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}