import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Container fluid className='px-0'>
            <Navbar bg="danger" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#"> <i className="fs-3 fw-bold lh-lg">f<span className="fs-2">OO</span>d <i className="fas fa-hotdog"></i> <span className="fs-5">Extra Dose</span></i> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link className="fs-4 text-white">Home</Nav.Link>
                            <Nav.Link className="fs-4 text-white">Order</Nav.Link>
                            <Nav.Link className="fs-4 text-white">Resturents</Nav.Link>
                            <Nav.Link className="fs-4 text-white">Policy</Nav.Link>
                            <Nav.Link className="fs-4 text-white">About</Nav.Link>

                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-light">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>

    );
};

export default NavBar;