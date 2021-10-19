import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar variant="dark" className="cust-color"  expand="lg"  sticky="top" >
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                        
                    </Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Signed in as: <a href="#login">Mark Otto</a>
                            </Navbar.Text>
                            <Nav.Link to="/home">Home</Nav.Link>
                        <Nav.Link to="/services">Service</Nav.Link>
                        <Nav.Link to="/about">About</Nav.Link>
                        <Nav.Link to="/contact">Contact</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;