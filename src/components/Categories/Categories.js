import React from 'react';
import { Card } from 'react-bootstrap';

const Categories = (props) => {
    const {strCategory, strCategoryThumb} = props.category;
    return (
        <Card className="bg-dark my-5" style={{ width: '24rem' }}>
            <Card.Img className="rounded-circle" variant="top" src={strCategoryThumb} />
            <Card.Body>
                <Card.Title> <h3 className="text-danger">{strCategory}</h3> </Card.Title>
            </Card.Body>
        </Card>
    );
};

export default Categories;