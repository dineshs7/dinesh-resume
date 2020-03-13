import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLaptopCode } from 'react-icons/fa';

export default function Projects() {
    return (
        <Container fluid className="projects" id="projects">
            <h2><FaLaptopCode />&nbsp;Projects</h2>
            <Container>
                <Row>
                    <Col className="text-left" xs={9} md={6}>
                        <h3>Contact App using React JS</h3>
                        <p>A web application to store contact details of a person such as name, phone number, email with photo. 
                            User can create new contact, edit existing contact details, view list of contacts and search for a contact. 
                            By default contact list is in ascending order with conatct</p>
                    </Col>
                </Row>
            </Container>>
        </Container>
    );
}