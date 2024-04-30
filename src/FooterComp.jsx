import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from 'react-icons/fa';

function FooterComp() {
  return (
    <footer className='bg-light'>
      <Container fluid className='w-50'>
        <div className='d-flex justify-content-center p-3 border-bottom'>
              <span className='mx-3'><FaGithub size={20} /></span>
              <span className='mx-3'><FaInstagram size={20} /></span>
              <span className='mx-3'><FaLinkedinIn size={20} /></span>
            </div>
        <div className='text-muted border-top pt-3 justify-content-center text-center pb-2'>
          
            <p>Copyright &copy; 2024 <br/>
            <span className='text-muted fw-medium '>Designed and DEveloped by Anjusha K</span>
            </p>
            
        </div>
      </Container>
    </footer>
  );
}

export default FooterComp;
