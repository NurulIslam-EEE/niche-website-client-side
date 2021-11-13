import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';


const Navigation = () => {
    const { user, logout } = useAuth();
    console.log(user)
    return (

        <Navbar style={{ background: '#02092b', fontWeight: '700' }} expand="lg">
            <Container fluid>
                <Navbar.Brand href="#" style={{ color: '#fec601' }}>IMPERIAL CARS</Navbar.Brand>
                <Navbar.Toggle className='text-white' style={{ background: 'white' }} aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="my-2 text-white ms-auto my-lg-0 navigation-item"

                        navbarScroll
                    >
                        <Nav.Link className='text-white' as={Link} to="/home">Home</Nav.Link>
                        {user?.email && <Nav.Link className='text-white' as={Link} to="/dashboard">Dashboard</Nav.Link>}

                        <Nav.Link className='text-white' as={Link} to="/moreProducts">
                            Explore
                        </Nav.Link>

                        <Nav.Link className='text-white' as={Link} to="/home">
                            {user?.displayName}
                        </Nav.Link>
                        {!user?.email ? <Nav.Link as={Link} to="/login">
                            <button>Login</button>
                        </Nav.Link> :
                            <button onClick={logout}>Logout</button>}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Navigation;