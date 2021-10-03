import React, { useEffect, useState } from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import { useParams } from 'react-router';

const MealDetails = () => {
    const { mealID } = useParams();
    const [meal, setMeal] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
        fetch(url).then(res => res.json()).then(data => setMeal(data.meals[0]));
    }, [])

    return (
        <Container>
            <Card>
                <Card.Img variant="top" src={meal.strMealThumb} />
                <Card.Body>
                    <Card.Text>
                        <p>{meal.strTags}</p>
                        <h4>{meal.strMeal}</h4>
                        <h6>{meal.strCategory}</h6>
                        <h6>{meal.strArea}</h6>
                        <h6>{meal.strInstructions}</h6>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default MealDetails;