import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { FaArrowCircleRight, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ButtonGroup } from 'react-bootstrap';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { signIn, providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const githHubProvider = new GithubAuthProvider();



    const [error, setError] = useState('')


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGithubSignIn = () => {
        providerLogin(githHubProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGoogleLogin = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                setError('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <br />
                <span><Link style={{ textDecoration: 'none' }} to='/registration'>Create an account <FaArrowCircleRight></FaArrowCircleRight> </Link></span>
                <br />
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>

            </Form>

            <br />

            <div>
                <ButtonGroup vertical>
                    <Button onClick={handleGoogleLogin} variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                    <Button onClick={handleGithubSignIn} variant="outline-primary"><FaGithub></FaGithub> Login with Github</Button>
                </ButtonGroup>
            </div>
        </>
    );
};

export default Login;