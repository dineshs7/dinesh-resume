import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCog, FaReact, FaJs, FaHtml5, FaCss3, FaBootstrap, FaNodeJs, FaDatabase, FaBitbucket, FaSourcetree, FaJira, FaUserCog, FaSalesforce, FaSass, FaDesktop } from 'react-icons/fa';

export default function Skills() {
    return (
        <Container fluid className="skills">
            <a href="#" id="skills" />
            <h2><FaCog />&nbsp;Skills</h2>
            <Container>
            <Row>
                <Col lg={4}>
                    <h5>Front-end Technologies</h5>
                    <ul>
                        <li><FaReact />&nbsp;React Js</li>
                        <li><FaJs />&nbsp;JavaScript</li>
                        <li><FaHtml5 />&nbsp;HTML5</li>
                        <li><FaCss3 />&nbsp;CSS3</li>
                        <li><FaBootstrap />&nbsp;Bootstrap3</li>
                        <li><FaSass />&nbsp;SASS</li>
                        <li><FaDesktop />&nbsp;Responsive web design</li>
                    </ul>
                </Col>
                <Col lg={4}>
                    <h5>Back-end Technologies</h5>
                    <ul>
                        <li><FaJs />&nbsp;Express Js</li>
                        <li><FaDatabase />&nbsp;MongoDB</li>
                        <li><FaNodeJs />&nbsp;Node JS</li>
                        <li><FaSalesforce />&nbsp;Salesforce Commerce Cloud</li>
                    </ul>
                </Col>
                <Col lg={4}>
                    <h5>Software Tools</h5>
                    <ul>
                        <li><FaSourcetree />&nbsp;Source Tree</li>
                        <li><FaJira />&nbsp;Jira</li>
                        <li><FaBitbucket />&nbsp;Bitbucket</li>
                        <li><FaUserCog />&nbsp;Zeplin</li>
                    </ul>
                </Col>
            </Row>
            </Container>
        </Container>
    )
}