import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SkillCard from './SkillCard';
import './skills.css';

import html from './html.svg';
import css from './css.svg';
import c from './c.png';
import bootstrap from './bootstrap.svg';
import js from './js.svg';
import git from './git.svg';
import mongodb from './mongodb.svg';
import mysql from './mysql.svg';
import reactIcon from './react.svg';
import vscode from './vscode.svg';
import node from './node.png';

function Skills({align='text-start', title='My Tech Stack', subTitle='Technologies I’ve been working with recently'}) {
    const skills = [
        { icon: html },
        { icon: css },
        { icon: js },
        { icon: bootstrap },
        { icon: c },
        { icon: git },
        { icon: reactIcon },
        { icon: node },
        { icon: mongodb },
        { icon: mysql },
        { icon: vscode }
    ];

    return (
        <Container className='p-5 skills-container'>
            <div className={align}>
                <h1 className='heading'>{title}</h1>
                <h6 className='sub-heading'>{subTitle}</h6>
            </div>        
            <Row className='justify-content-center'>
                {skills.map((skill, index) => (
                    <Col xs={6} sm={4} md={3} lg={2} key={index}>
                        <SkillCard icon={skill.icon} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Skills;
