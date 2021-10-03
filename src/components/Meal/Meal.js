import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Meal = (props) => {
    const { strMeal, strCategory, strArea, strMealThumb, idMeal } = props.meal
    return (
        <Card style={{ width: '24rem', height: '45rem' }} className="my-5 bg-danger text-white">
            <Card.Img variant="top" src={strMealThumb} />

            <Card.Body>
                <Card.Title> <h3> {strMeal} </h3></Card.Title>
                <Card.Text>
                    <h4><Badge bg="info">{strCategory}</Badge></h4>
                    <h4><Badge bg="info">{strArea}</Badge></h4>
                </Card.Text>
            </Card.Body>

            <Card.Footer>
                <Link to={`meal/${idMeal}`}><Button variant="info">Details</Button></Link>
            </Card.Footer>
            <Card.Footer>
                <Button variant="info"><h1><i className="fas fa-cart-plus"></i></h1></Button>
            </Card.Footer>
        </Card>
    );
};

export default Meal;