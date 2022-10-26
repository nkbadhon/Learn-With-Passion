import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
const Left = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data));

    }, [])

    return (
        <div>
            <div>
                <h4 className='text-danger'>All Courses: {categories.length}</h4>

            </div>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link style={{ textDecoration: 'none' }} to={`/detailse/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div >
    );
};

export default Left;

