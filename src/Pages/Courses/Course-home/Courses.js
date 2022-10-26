import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';

const Courses = () => {
    const [cat, setCat] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCat(data));

    }, [])
    return (
        <div>
            <Row xs={1} md={2} className="g-4">

                {
                    cat.map(category =>
                        <Col >
                            <Card key={category.id} style={{ width: '25rem', height: '30rem' }} >

                                <Card.Img style={{ height: '10rem', width: '100 %' }} src={category.photo_url} />
                                <Card.Body>
                                    <Card.Title className='text-primary'>{category.name}</Card.Title>
                                    <Card.Text className='pb-4'>{category.heading}
                                    </Card.Text>
                                    <Link to={`/detailse/${category.id}`}><Button size="lg" variant="outline-primary bottom" style={{ position: 'absolute', bottom: '0', }} >Detailse</Button></Link>

                                </Card.Body>
                            </Card></Col>)
                }
            </Row>

        </div>
    );
};

export default Courses;



