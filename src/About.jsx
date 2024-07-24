import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Education from './Education';

import '@react-pdf-viewer/core/lib/styles/index.css';
import Experience from './Experience';
import { ExternalLink } from 'react-external-link';

function About() {


    return (
        <Container className='w-75'>
            <div>
                <h1 className='heading'>About Me</h1>
                <div className='py-3 mb-5'>
                I am an IT graduate with expertise in full-stack web development, 
                proficient in C, C++, Java, HTML, CSS, JavaScript, and Bootstrap. 
                I have hands-on experience with MERN stack development and a strong
                 foundation in computer science. I hold an MSc in Computer Science 
                 from Pondicherry University and am currently interning as a MERN Stack Developer 
                 at Softroniics. I'm passionate about learning new technologies and solving problems. 
                 Connect with me on <ExternalLink href="www.linkedin.com/in/anjusha-k-a4653022a" className=''>LinkedIn</ExternalLink>
                   and view my projects on <ExternalLink href="https://github.com/Anjusha01" className=''>GitHub</ExternalLink>.
                </div>
            </div>
            {/* <Experience/> */}
            <Education />
            
            
        </Container>
    );
}

export default About;
