import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../scss/_about.scss';
import dinesh from '../images/dinesh.jpeg';

export default function About() {
    return (
        <Container fluid className="about" id="about">
            <Container className="profile">
                <Row>
                    <Col sm={12}>
                            <div id="name">
                            <img src={dinesh} alt="Me smiling"/>
                            <h1>Dinesh Selvam</h1>
                            <h3>UI Developer at SearchnScore Solutions</h3>
                            <h4>Coimbatore, Tamilnadu, India</h4>
                            </div>
                            <p>Hi there,<br/><br/>
                            I was born in Ammapet city in Salem district, Tamilnadu in 1996.
                            I started my schooling back in 2001 and completed my higher secondary in 2013. 
                            In 2013 July, I joined Thiagarajar Polytechnic College-Salem, Tamilnadu for my Diploma course in 
                            Computer Engineering and completed my Diploma with 96.5% in 2015.
                            It was 2015 July, I joined PSG College of Technology-Coimbatore, Tamilnadu, for my Bachelor's degree in 
                            Information Technology and completed my Bachelor's degree with 7.53 CGPA in 2018.
                            Those were beautiful days, I enjoyed my hostel life more than college life. 
                            During the final year last semester, the first step towards my career started in PSG Software Technology-Coimbatore, Tamilnadu 
                            for my internship as a Full-stack(MEAN) developer from December 2017 to April 2018. 
                            I learned loads in PSG Software Technologies that helped me to mold myself. 
                            I got selected as Associate Software Engineer in TCS during the final year placement. 
                            But due to some reason, I couldn't join TCS. In 2019 September, I joined SearchnScore Solutions-Coimbatore, Tamilnadu, 
                            as a UI Developer.I'm eagerly looking for a Full-stack developer job.</p>
                    </Col>
                </Row>
                <Row className="objectives">
                    <Col sm={12}>
                        <h4>OBJECTIVES</h4>
                        <ul>
                            <li>To help and contribute to the organization towards the goal.</li>
                            <li>To explore new things and develop my skills to a great extent.</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} className="strengths">
                        <h4>STRENGTHS</h4>
                        <ul>
                            <li>Flexibility to deadlines</li>
                            <li>Prioritizing things</li>
                            <li>Keen approach towards learning</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
