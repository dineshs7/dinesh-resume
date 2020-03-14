import React from 'react';
import { Container } from 'react-bootstrap';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import TopNavigation from './TopNavigation';

export default function HomeBanner() {
    return (
        <Container fluid className="home-banner">
            <TopNavigation />
                <div class="profile">
                    <h1>Dinesh Selvam</h1>
                    <h3>UI Developer at SearchnScore Solutions</h3>
                    <h4>Coimbatore, Tamilnadu, India</h4>
                </div>
                <div className="social-links" >
                    <a href ="https://www.linkedin.com/in/dinesh-selvam-370870a7/" target="_blank" rel="noopener noreferrer" title="Visit my profile"><FaLinkedin /></a>
                    <a href="mailto:s.dineshcomputer@gmail.com" target="_blank" rel="noopener noreferrer" title="Send a mail to me"><FaEnvelope /></a>
                    <FaPhone />&nbsp;+91 9095556283
                </div>
        </Container>
    )
}