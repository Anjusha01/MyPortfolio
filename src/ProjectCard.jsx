import React from 'react';
import Card from 'react-bootstrap/Card';

function ProjectCard({ projectImg, projectName, projectDesc, githubLink, onCardClick }) {
  return (
    <Card style={{ width: '18rem', borderRadius: '20px', overflow: 'hidden', height: '400px' }} className='m-3 border shadow-lg' onClick={onCardClick}>
      <Card.Img variant="top" src={projectImg} className='image-fit-cover' />
      <Card.Body>
        <Card.Title>{projectName}</Card.Title>
        <Card.Text>
          {projectDesc}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
