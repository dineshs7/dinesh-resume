import React from 'react';
import { Nav } from 'react-bootstrap';

export default function TopNavigation() {
    return (
        <div className="top-navigation">
            <a href="#about">About Me</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
        </div>
    )
}