import React from 'react';
import Mission from './sections/Mission';
import Testimonials from './sections/Testimonials';
import Gallery from './sections/Gallery';

import './About.css';

const About = () => {
    
    return (
        <div className="about">
            <Mission />
            <Testimonials />
            <Gallery />
        </div>
    )
}

export default About