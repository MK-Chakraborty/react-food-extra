import React, { useEffect, useState } from 'react';

const useCatagories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(response => response.json())
            .then(data => setCategories(data.categories))
    }, [])

    return [categories];
};

export default useCatagories;