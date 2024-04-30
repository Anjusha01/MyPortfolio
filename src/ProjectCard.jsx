import React from 'react';
import Card from 'react-bootstrap/Card';

function ProjectCard({ projectImg, projectName, projectDesc, githubLink, onCardClick }) {
  return (
    <Card style={{ width: '18rem', margin: 'auto', borderRadius: '20px', overflow: 'hidden', height: '400px' }} className='mb-3 border shadow-lg' onClick={onCardClick}>
      <Card.Img variant="top" src={projectImg} className='image-fit-cover' />
      <Card.Body>
        <Card.Title>{projectName}</Card.Title>
        <Card.Text>
          {projectDesc}
        </Card.Text>
        {/* <Card.Footer className='border-0 bg-body text-end'>
          <Card.Link href={githubLink} target="_blank" rel="noopener noreferrer">
            
          </Card.Link>
        </Card.Footer> */}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
