import React from 'react';
import Mission from './sections/Mission';
import Testimonials from './sections/Testimonials';

import './About.css';
import Contact from './sections/Contact';

const About = () => {
    
    return (
        <div className="about">
            <Mission />
            <Testimonials />
            <Contact />
        </div>
    )
}

export default About