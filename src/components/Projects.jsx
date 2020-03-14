import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLaptopCode, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
    return (
        <Container fluid className="projects" id="projects">
            <h2><FaLaptopCode />&nbsp;Projects</h2>
            <Container>
                <Row>
                    <Col className="text-left" xs={12} md={6}>
                        <h3>Student Accommodation System using MEAN stack</h3>
                        <p>
                        The system is implemented to help the hostel management to manage hostel activities such as room allotment, room vacancy record, to store residents information and search for residents in efficient manner.
                        </p>
                        <h5>Technology used</h5>
                        <ul>
                            <li>MongoDB </li>
                            <li>Express Js </li>
                            <li>Angular Js</li>
                            <li>Node Js</li>
                            <li>Bootstrap3</li>
                        </ul>
                    </Col>
                    <Col className="text-left" xs={12} md={6}>
                        <h3>Contact App using React JS</h3>
                        <p>A web application to store contact details of a person such as name, phone number, email with photo. 
                            User can create new contact, edit existing contact details, view list of contacts and search for a contact.</p>
                        <h5>Technology used</h5>
                        <ul>
                            <li>MongoDB </li>
                            <li>Express Js </li>
                            <li>React Js</li>
                            <li>Node Js</li>
                            <li>React bootstrap</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-left" xs={12} md={6}>
                        <h3>Resume using React JS&nbsp;<a href="https://github.com/dineshs7/dinesh-resume" target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt /></a></h3>
                        <p>A static web site to present my background, experience, project works and skillset.</p>
                        <h5>Technology used</h5>
                        <ul>
                            <li>React JS</li>
                            <li>React bootstrap</li>
                            <li>SASS</li>
                            <li>Github pages</li>
                        </ul>
                    </Col>
                    <Col className="text-left" xs={12} md={6}>
                        <h3>Blogs&nbsp;<a href="https://www.seacalmskin.com/blog.html" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a></h3>
                        <p>Mobile first responsive and SEO friendly main blog landing page and 4 blog pages.</p>
                        <h5>Technology used</h5>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>SASS</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-left" xs={12} md={6}>
                        <h3>Campaigns using Salesforce Commerce Cloud(SFCC)</h3>
                        <p>New campaigns to trigger promotions for beauty products.</p>
                        <h5>Technology used</h5>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>SASS</li>
                            <li>Salesforce Commerce Cloud(SFCC)</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}