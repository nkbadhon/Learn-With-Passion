import React from 'react';
import { Container } from 'react-bootstrap';

const Faq = () => {
    return (
        <Container>
            <div className='text-primary'>
                <h4><strong>Question: </strong> Can I refund my payment if i cancel my subscription?</h4>
                <p> <strong>Answer: </strong> No, once you are done with your payment, there is no refund or cancellation.</p>
            </div>
            <div className='text-primary'>
                <h4><strong>Question: </strong>How many device can i connect at a time? </h4>
                <p> <strong>Answer: </strong>You can connect from 3 devices at a time.  </p>
            </div>
            <div className='text-primary'>
                <h4><strong>Question: </strong> Do i have Lifetime access in the course?</h4>
                <p> <strong>Answer: </strong> Yes, you have lifetime access.</p>
            </div>
            <div className='text-primary'>
                <h4><strong>Question: </strong> Can i download the videos from website?</h4>
                <p> <strong>Answer: </strong> No, you only can stream.</p>
            </div>

        </Container>
    );
};

export default Faq;