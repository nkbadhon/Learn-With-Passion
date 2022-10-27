import React from 'react';
import { Container } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container>
            <div className='text-primary'>
                <h4><strong>Question: </strong>What is cors?</h4>
                <p> <strong>Answer: </strong>CORS is an acronym for Cross-Origin Resource Sharing, but what does that actually mean? What is CORS? Well, if we go by the Wikipedia definition, "[CORS] is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served," then you'd be forgiven if you were more confused than before you'd read that sentence.</p>
            </div>
            <div className='text-primary'>
                <h4><strong>Question: </strong>Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p> <strong>Answer: </strong>Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.
                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

                    Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.

                    When you upgrade to Firebase Authentication with Identity Platform, you unlock additional features, such as multi-factor authentication, blocking functions, user activity and audit logging, SAML and generic OpenID Connect support, multi-tenancy, and enterprise-level support.</p>
            </div>
            <div className='text-primary'>
                <h4><strong>Question: </strong>How does the private route work?</h4>
                <p> <strong>Answer: </strong>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated</p>
            </div>
            <div className='text-primary'>
                <h4><strong>Question: </strong>What is Node? How does Node work?</h4>
                <p> <strong>Answer: </strong>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.

                    Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
            </div>
        </Container>
    );
};

export default Blogs;