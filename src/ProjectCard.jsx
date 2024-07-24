import React from 'react';
import Card from 'react-bootstrap/Card';

function ProjectCard({ projectImg, projectName, projectDesc, githubLink, onCardClick }) {
  return (
    <Card style={{ width: '20rem', borderRadius: '15px', overflow: 'hidden', cursor: 'pointer' }} className='my-3 border shadow-lg' onClick={onCardClick}>
      <Card.Img variant="top" src={projectImg} className='image-fit-cover' />
      <Card.Body>
        <Card.Title className='fs-6 fw-bold'>{projectName}</Card.Title>
        <Card.Text className='fw-light justify-content-evenly'>
          {projectDesc}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
