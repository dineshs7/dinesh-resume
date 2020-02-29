import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUserTie } from 'react-icons/fa';
import PSGLogo from '../images/psg-logo.png';
import SNSLogo from '../images/sns-logo.png';

export default function Experience() {
    return (
        <Container fluid className="experience">
            <a href="#" id="experience" />
            <h2><FaUserTie />&nbsp;Experience</h2>
            <Container>
                <Row>
                    <Col xs={3} md={2} className="img-column">
                        <img src={SNSLogo} alt="Searchnscore Solutions" />
                    </Col>
                    <Col className="text-left" xs={9} md={10}>
                        <h3>UI Developer</h3>
                        <h4>
                            SearchnScore Solution<br/>
                            <small>Sep 2019 to Present</small> <br />
                            <small>Coimbatore, Tamilnadu.</small>
                        </h4>
                        <p>
                            Worked on eCommerce website for beauty products using Salesforce Commerce Cloud(SFCC) platform, 
                            Email template and Proof of Concept using ReactJS and Salesforce Open Commerce API(OCAPI).
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col xs={3} md={2} className="img-column">
                        <img src={PSGLogo} alt="Searchnscore Solutions" />
                    </Col>
                    <Col className="text-left" xs={9} md={10}>
                        <h3>Student Intern</h3>
                        <h4>
                            PSG Software Technologies<br/>
                            <small>Dec 2017 to April 2018</small> <br />
                            <small>Coimbatore, Tamilnadu.</small>
                        </h4>
                        <p>
                        Worked on full stack application development for hostel management using MongoDB, ExpressJS, AngularJS, NodeJs.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}