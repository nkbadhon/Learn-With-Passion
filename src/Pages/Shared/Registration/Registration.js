import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';


const Registration = () => {
    const [error, setError] = useState('')

    const { providerLogin, createUser } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()


    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    }





    const submitBtn = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
                form.reset();
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }


    return (
        <>
            <Form onSubmit={submitBtn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Label>Your Name </Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Label>Photo Url </Form.Label>
                    <Form.Control type="text" name="photoURL" placeholder="Enter Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Registration Now
                </Button>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>

            </Form>

            <br />

            <div>
                <ButtonGroup vertical>
                    <Button onClick={handleGoogleLogin} variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                    <Button variant="outline-primary"><FaGithub></FaGithub> Login with Github</Button>
                </ButtonGroup>
            </div>

        </>
    );
};

export default Registration;