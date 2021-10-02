import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Categories from '../Categories/Categories';

const Home = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(response => response.json())
            .then(data => setCategories(data.categories))
    }, [])

    return (
        <Container>
            <h3 className="fs-3 lh-lg text-center text-danger fw-bold border-0 border-bottom border-3 border-danger mb-5">Meal Categories</h3>
            <div className="d-flex justify-content-around flex-wrap">
                {
                    categories.map(category => <Categories key={category.idCategory} category={category}></Categories>)
                }
            </div>
        </Container>
    );
};

export default Home;