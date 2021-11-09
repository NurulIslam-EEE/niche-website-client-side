import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (

        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#" style={{ color: '#fec601' }}>IMPERIAL </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="my-2 ms-auto my-lg-0"

                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>

                        <Nav.Link as={Link} to="/explore">
                            Explore
                        </Nav.Link>
                        <Nav.Link as={Link} to="/explore">
                            <button>Login</button>
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Navigation;