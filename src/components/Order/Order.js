import React, { useEffect, useState } from 'react';
import { Col, Container, ListGroup, Row, Button } from 'react-bootstrap';
import Meal from '../Meal/Meal';

const Order = () => {

    const [srarchStr, setSearchStr] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${srarchStr}`;
        fetch(url).then(res => res.json()).then(data => setMeals(data.meals))
    }, [srarchStr])

    const handleSearch = (event) => {
        const searchText = event.target.value;
        setSearchStr(searchText);
    }

    return (
        <div>
            <Container fluid className="my-5 bg-danger py-5 px-0">
                <Container>
                    <h3 className="fs-3 fw-bold text-white text-center pt-3 pb-4">🥣🍦 Search Your Desired Meal Here 🍸🍺</h3>
                    <input onChange={handleSearch}
                        className="fs-3 fw-bold text-center text-danger border-0 w-75 py-3 rounded-3 bg-dark"
                        placeholder="🍕 Search Meal 🍤"></input>
                </Container>
            </Container>

            <Container className="my-5">
                <Row>
                    <Col xs={12} sm={12} md={{ span: 10, offset: 1 }} lg={{ span: 4, offset: 0 }} >
                        <ListGroup className="mt-5">
                            <ListGroup.Item variant="warning"><h4 className="fs-4 fw-bold">Your Cart <i className="fas fa-shopping-cart"></i></h4></ListGroup.Item>
                            <ListGroup.Item variant="info"><h5 className="fs-5 fw-bold">Meal Added: {0}</h5></ListGroup.Item>
                            <ListGroup.Item variant="light"><h6 className="fs-6 fw-bold"><span className="pe-3">Cost :</span>{0} $</h6></ListGroup.Item>
                            <ListGroup.Item variant="light"><h6 className="fs-6 fw-bold"><span className="pe-3">Vat :</span>{0} $</h6></ListGroup.Item>
                            <ListGroup.Item variant="light"><h6 className="fs-6 fw-bold"><span className="pe-3">Dailivary :</span>{0} $</h6></ListGroup.Item>
                            <ListGroup.Item variant="danger"><h4 className="fs-4 fw-bold"><span className="pe-3">Total Bill :</span>{0} $</h4></ListGroup.Item>
                            <ListGroup.Item variant="success"><h4 className="fs-4 fw-bold"><span className="pe-3">
                                <i className="fab fa-cc-visa pe-1"></i>
                                <i className="fab fa-cc-stripe pe-1"></i>
                                <i className="fab fa-cc-paypal pe-1"></i>
                                <i className="fab fa-cc-mastercard pe-1"></i>
                                <i className="fab fa-cc-jcb pe-1"></i>
                                <i className="fab fa-cc-amazon-pay pe-1"></i>
                                <i className="fab fa-cc-apple-pay"></i>
                            </span></h4></ListGroup.Item>
                        </ListGroup>
                        <Button variant="danger" className="mt-3" size="lg">Review Order</Button>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={8}>
                        <div className="d-flex justify-content-around flex-wrap">
                            {
                                meals?.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Order;