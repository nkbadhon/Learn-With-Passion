import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Courses from '../Course-home/Courses';
import Left from '../Left-Side/Left';

const CourseHome = () => {
    return (

        <Container>
            <Row>
                <Col lg="3">
                    <Left></Left>

                </Col>
                <Col lg="9">
                    <Row><Courses></Courses></Row>
                </Col>
            </Row>
        </Container>

    );
};

export default CourseHome;


