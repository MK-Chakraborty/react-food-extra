import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <Container fluid className='px-0'>
            <Navbar bg="danger" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#"> <i className="fs-3 fw-bold lh-lg">f<span className="fs-2">OO</span>d <i className="fas fa-hotdog"></i> <span className="fs-5">Extra Dose</span></i> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink to="/home" className="fs-4 text-white pe-3 text-decoration-none menuItem">Home</NavLink>
                            <NavLink to="/order" className="fs-4 text-white pe-3 text-decoration-none menuItem">Order</NavLink>
                            <NavLink to="/review" className="fs-4 text-white pe-3 text-decoration-none menuItem">Review Order</NavLink>
                            <NavLink to="/restaurants" className="fs-4 text-white pe-3 text-decoration-none menuItem">Restaurants</NavLink>
                            <NavLink to="/policy" className="fs-4 text-white text-decoration-none menuItem">Policy</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>

    );
};

export default NavBar;