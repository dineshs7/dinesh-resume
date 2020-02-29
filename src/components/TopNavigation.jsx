import React from 'react';
import HeaderNavigation from '../scss/_headerNavigation.scss';

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