import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './Header.css'

const Header = () => {
   const {signInUsingGoogle,user} =  useFirebase();

//    console.log( user)
console.log(signInUsingGoogle)

    return (
        <div>
            <Navbar variant="dark" className="cust-color"  expand="lg"  sticky="top" >
                <Container>
                    <Navbar.Brand href="#home" style={{fontFamily: "cursive"}}>
                       <sup style={{fontSize:"32px",fontWeight:"700"}}>+</sup>  ZulZana Hospital</Navbar.Brand>
                        <Nav className="me-auto">
                        
                    </Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                Signed in as: <a href="#login" className="profileName">{user}</a><button className="custom-btn-another ms-3" onClick={signInUsingGoogle}>login</button>
                            </Navbar.Text>
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;