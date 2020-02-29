import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import TopNavigation from './TopNavigation';
import dinesh from '../images/dinesh.jpeg';
import homeBanner from '../scss/_homeBanner.scss';

export default function HomeBanner() {
    return (
        <Container fluid className="home-banner">
            <TopNavigation />
                <div class="profile">
                    <img src={dinesh} alt="Me smiling" id="about"/>
                    <h1>Dinesh Selvam</h1>
                    <h3>UI Developer at SearchnScore Solutions</h3>
                    <h4>Coimbatore, Tamilnadu, India</h4>
                </div>
                <div className="social-links">
                    <a href ="https://www.linkedin.com/in/dinesh-selvam-370870a7/" target="_blank" title="Visit my profile"><FaLinkedin /></a>
                    <a href="mailto:s.dineshcomputer@gmail.com" target="_blank" title="Send a mail to me"><FaEnvelope /></a>
                    <FaPhone />&nbsp;+91 9095556283
                </div>
        </Container>
    )
}