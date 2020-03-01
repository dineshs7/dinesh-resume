import React from 'react';
import { Container } from 'react-bootstrap';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
            <section className="footer-navigation">
                <a href="#about">About Me</a>
                <a href="#experience">Experience</a>
                <a href="#education">Education</a>
                <a href="#skills">Skills</a>
                <a href ="https://www.linkedin.com/in/dinesh-selvam-370870a7/" target="_blank"><FaLinkedin /></a>
                <a href="mailto:s.dineshcomputer@gmail.com" target="_blank"><FaEnvelope /></a>
            </section>
    )
}