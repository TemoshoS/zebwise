// src/components/global-components/topBarr.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Bell, PersonCircle } from 'react-bootstrap-icons'; // Ensure you have the correct icons installed

const TopBar = () => {
    return (
        <Navbar bg="light" expand="lg" className="mb-4">
            <Container>
                <Navbar.Brand href="#home">ZebWise</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#notifications" className="d-flex align-items-center">
                        <Bell className="me-2" /> Notifications
                    </Nav.Link>
                    <Nav.Link href="#profile" className="d-flex align-items-center">
                        <PersonCircle className="me-2" /> Profile
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default TopBar;
