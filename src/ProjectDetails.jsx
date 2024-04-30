import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ExternalLink } from 'react-external-link'
import { FaGithub } from "react-icons/fa";

function ProjectDetails({projectName,projectDetails,img1,gitlink,projectFeatures,projectTech}) {
  return (
    <Container className=''>

        <h1 className='heading'>{projectName}</h1>
        <Row>
          <Col md={4}><img src={img1} alt="" className='w-100 p-3 d-flex justify-content-center ' /></Col>
          <Col><div className='p-3'>{projectDetails}</div></Col>
        </Row>
        <div>
          <h6>Key Features</h6>
          <div>{projectFeatures}</div>
        </div>
        <div>
          <h6>Technologies Used</h6>
          <div>{projectTech}</div>
        </div>
        
        <section className='p-3'>
        <ExternalLink href={gitlink} className='text-decoration-none text-dark'>
            <FaGithub className='text-dark ' /> View code
          </ExternalLink>
        </section>
       
    </Container>
  )
}

export default ProjectDetails