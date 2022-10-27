import React from 'react';
import { Container } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container>
            <div className='text-primary'>
                <h4><strong>Question: </strong>what is cors?</h4>
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
                <h4><strong>Question: </strong></h4>
                <p> <strong>Answer: </strong></p>
            </div>
        </Container>
    );
};

export default Blogs;