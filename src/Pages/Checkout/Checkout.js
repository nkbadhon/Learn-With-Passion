import React, { useContext } from 'react';
import { useLoaderData } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { FaClock } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const Checkout = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const cour = useLoaderData();
    return (
        <Container>
            <h2>Checkout</h2>
            <Card>
                <Card.Header className='d-flex justify-content-between mb-2'> <div className='text-primary'><Card.Title>{cour.name}</Card.Title></div> <div><Card.Text className='text-primary'><FaClock></FaClock>
                    {cour.duraion}
                </Card.Text></div> </Card.Header>
                <Card.Text>
                    <h1 className='text-primary px-4'> Course Id:{cour.id} </h1>
                </Card.Text>
                <Card.Text>
                    <h2 className='text-primary px-4'>User Email: {user?.email}</h2>
                </Card.Text>

                <Card.Img className='course_img p-4' variant="top" src={cour.photo_url} />
                <Card.Body>

                </Card.Body>
            </Card>
        </Container>
    );
};

export default Checkout;