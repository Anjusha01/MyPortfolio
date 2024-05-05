import React, { useState } from 'react';
import { Container, Modal } from 'react-bootstrap';
import ProjectGrid from './ProjectGrid';
import ProjectDetails from './ProjectDetails';
import './projects.css';
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';

function Project({ align = 'text-start', title = 'My Projects', subTitle = 'Things I’ve built so far' }) {
    const [showModal, setShowModal] = useState(false);
    const [currentProject, setCurrentProject] = useState({});

    const handleCardClick = (projectItem) => {
        setCurrentProject(projectItem);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <Container className="p-3">
             <div className={align}>
                <h1 className='heading'>{title}</h1>
                <h6 className='sub-heading'>{subTitle}</h6>
            </div>
            <ProjectGrid onCardClick={handleCardClick} />
            <Modal show={showModal} onHide={handleClose} centered dialogClassName="fullscreen-modal">
                <Modal.Header closeButton className='border-0'>
                    {/* <Modal.Title>{currentProject.projectName}</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                    <ProjectDetails {...currentProject} />
                </Modal.Body>
                {/* <Modal.Footer>
                    <ExternalLink href={currentProject.gitlink} className='text-decoration-none text-dark'>
                    <FaGithub className='text-dark ' /> View code
                    </ExternalLink>
                    
                </Modal.Footer> */}
            </Modal>
        </Container>
    );
}

export default Project;
