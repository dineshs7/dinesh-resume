import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUserGraduate } from 'react-icons/fa';
import PSGLogo from '../images/psg.png';
import TPTLogo from '../images/thiagarajar-poly-tech.jpeg';

export default function Education() {
    return (
        <Container fluid className="education">
            <a href="#" id="education" />
            <h2><FaUserGraduate />&nbsp;Education</h2>
            <Container>
                <Row>
                    <Col md="2" className="img-column">
                        <img src={PSGLogo} alt="PSG College of Technology"  className="logo"/>
                    </Col>
                    <Col className="text-left" md="10">
                        <h3>PSG College of Technology</h3>
                        <h4>
                            Bachelor of Technology, Information Technology<br/>
                            <small>2015 to 2018</small> <br />
                            <small>Coimbatore, Tamilnadu.</small>
                        </h4>
                        <p>7.53 CGPA</p>
                        <p>PROJECTS:<br/>
                        Hostel Management System using MEAN Stack</p>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md="2" className="img-column">
                        <img src={TPTLogo} alt="Thiagarajar Polytechnic College" className="logo"/>
                    </Col>
                    <Col className="text-left" md="10">
                        <h3>Thiagarajar Polytechnic College</h3>
                        <h4>
                            Diploma in Computer Engineering<br/>
                            <small>2013 to 2015</small> <br />
                            <small>Salem, Tamilnadu.</small>
                        </h4>
                        <p>96.5%</p>
                        <p>PROJECTS: <br/>
                        Android Remote Control using SMS</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}