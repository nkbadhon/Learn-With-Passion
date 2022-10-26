import React from 'react';
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
const Home = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <div className='mb-4'>
                <h1> Welcome to <span className='text-primary'>Learn With Passion.</span> </h1>
            </div>

            <Link style={{ textDecoration: 'none' }} to={`/coursedetails/:id`} > <Button variant="primary" size="lg"> Let's Explore Courses <FaAngleDoubleRight></FaAngleDoubleRight></Button> </Link>

        </div>
    );
};

export default Home;

