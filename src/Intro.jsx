import React from 'react';
import hero from './hero.svg';
import './intro.css';
import { Container, Row, Col } from 'react-bootstrap';

function Intro() {
  return (
    <Container className="p-5 introduction">
      <Row className="align-items-center">
        <Col md={7}>
          <h3 className='intro-heading'>
            Hi,<br />
            <span className='intro-name'>My name is Anjusha.</span><br />
            I am a Full Stack Developer.
          </h3>
        </Col>
        <Col md={5} className="text-md-center">
          <img src={hero} alt="Anjusha - Full Stack Developer" className='intro-image' />
        </Col>
      </Row>
    </Container>
  );
}

export default Intro;

