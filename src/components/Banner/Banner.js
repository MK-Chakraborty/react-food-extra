import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import img1 from '../../images/pizza-6478478_640.jpg';
import img2 from '../../images/cupcakes-690040_640.jpg';
import img3 from '../../images/spices-370114_640.jpg';

const Banner = () => {
    return (
        <Container fluid className="my-5">
            <Carousel>
                <Carousel.Item>
                    <Container>
                        <Row className="py-5">
                            <Col xs={12} sm={12} md={6} lg={6} className="text-white d-flex align-items-center my-5">
                                <h2 className="fs-2 fw-bold lh-lg">
                                    <i>Welcome to f<span className="fs-1">OO</span>d <i className="fas fa-hotdog"></i> <span className="fs-5">Extra Dose </span> !!!</i>
                                </h2>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6}>
                                <img
                                    className="d-block w-100 rounded-circle my-5"
                                    src={img1}
                                    alt="slide"
                                />
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container>
                        <Row className="py-5">
                            <Col xs={12} sm={12} md={6} lg={6} className="text-white d-flex align-items-center my-5">
                                <h1 className="fs-1 fw-bold text-capitalize"><i className="fas fa-utensils"></i> &nbsp; &nbsp;
                                    Order the Best food via online!!! 24 X 7 online serviec ! &nbsp; &nbsp; <i className="fas fa-hamburger"></i>
                                </h1>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6}>
                                <img
                                    className="d-block w-100 rounded-circle my-5"
                                    src={img2}
                                    alt="slide"
                                />
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container>
                        <Row className="py-5">
                            <Col xs={12} sm={12} md={6} lg={6} className="text-white d-flex align-items-center my-5">
                                <h1 className="fs-1 fw-bold text-capitalize"><i className="fas fa-pizza-slice"></i> &nbsp; &nbsp;
                                    Luxurious Restaurants are avaiable, even in weekends !!! &nbsp; &nbsp;  <i className="fas fa-ice-cream"></i>
                                </h1>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6}>
                                <img
                                    className="d-block w-100 rounded-circle my-5"
                                    src={img3}
                                    alt="slide"
                                />
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Banner;

