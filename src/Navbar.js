import React from 'react';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './logo.svg'


function NavbarComponent() {
    return (
        <div>
            <Navbar bg="light" expand="sm" className="main-nav-bar d-flex justify-content-around">
                <Navbar.Brand href="#home"><img src={logo} alt="logo nav bar"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#about">About us</Nav.Link>
                    <Nav.Link href="#carrer">Carrer</Nav.Link>
                    <Nav.Link href="#departments">Departments</Nav.Link>                    
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComponent;