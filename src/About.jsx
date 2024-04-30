import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Education from './Education';

import '@react-pdf-viewer/core/lib/styles/index.css';
import Experience from './Experience';

function About() {


    return (
        <Container className='w-75'>
            <div>
                <h1 className='heading'>About Me</h1>
                <div className='py-3 mb-5'>
                    My name's Jane. I'm a web designer and developer based in Southampton, UK.
                    During the day I work as a lead developer at 
                    a local agency and in the evening I work on freelance 
                    projects and utilize the time to build my own products. 
                    I spent my leisure hours writing articles and poetry. 
                    Right now I'm also trying a hand at machine learning and AI. 
                    I love to learn and explore new arenas.
                </div>
            </div>
            {/* <Experience/> */}
            <Education />
            
            
        </Container>
    );
}

export default About;
