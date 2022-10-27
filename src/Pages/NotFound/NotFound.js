import React from 'react';
import { Container } from 'react-bootstrap';
import { FaQq } from "react-icons/fa";

const NotFound = () => {
    return (
        <Container className='text-center'>
            <h1 ><FaQq className='text-info'></FaQq></h1>
            <h4>....oops! Something went <span className='text-danger'>wrong</span> . Go back to home page.</h4>
        </Container>
    );
};

export default NotFound;