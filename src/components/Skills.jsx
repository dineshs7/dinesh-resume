import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCog, FaReact, FaJs, FaHtml5, FaCss3, FaBootstrap, FaNodeJs, FaDatabase, 
         FaBitbucket, FaSourcetree, FaJira, FaUserCog, FaSalesforce, FaSass, FaDesktop,
         FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

export default function Skills() {
    return (
        <Container fluid className="skills" id="skills">
            <h2><FaCog />&nbsp;Skills</h2>
            <Container>
            <Row>
                <Col lg={4}>
                    <h5>Front-end Technologies</h5>
                    <ul>
                        <li><FaReact />&nbsp;React Js<br/>
                        <span><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></span></li>
                        <li><FaJs />&nbsp;JavaScript<br/>
                        <span><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/><FaRegStar/></span></li>
                        <li><FaHtml5 />&nbsp;HTML5<br/>
                        <span><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></span></li>
                        <li><FaCss3 />&nbsp;CSS3<br/>
                        <span><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></span></li>
                        <li><FaBootstrap />&nbsp;Bootstrap3<br/>
                        <span><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/><FaRegStar/></span></li>
                        <li><FaSass />&nbsp;SASS<br/>
                        <span><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></span></li>
                        <li><FaDesktop />&nbsp;Responsive web design<br/>
                        <span><FaStar/><FaStar/><FaStar/><FaStar/><FaRegStar/></span></li>
                    </ul>
                </Col>
                <Col lg={4}>
                    <h5>Back-end Technologies</h5>
                    <ul>
                        <li><FaJs />&nbsp;Express Js<br/>
                        <span><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/><FaRegStar/></span></li>
                        <li><FaDatabase />&nbsp;MongoDB<br/>
                        <span><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/><FaRegStar/></span></li>
                        <li><FaNodeJs />&nbsp;Node JS<br/>
                        <span><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/><FaRegStar/></span></li>
                        <li><FaSalesforce />&nbsp;Salesforce Commerce Cloud<br/>
                        <span><FaStar/><FaStar/><FaStar/><FaStarHalfAlt/><FaRegStar/></span></li>
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