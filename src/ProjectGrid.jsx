import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import pro1 from './pro1.png';
import pro2 from './pro2.png';
import pro3 from './pro3.png';
import pro4 from './pro4.png';
import pro5 from './pro5.png';
import pro6 from './pro6.png';

const data = [
    { 
        projectImg: pro1, 
        projectName: 'Double C & B', 
        projectDesc: 'The Double C & B Front-End Development project aimed to create a visually appealing and user-friendly website interface for individuals following the keto diet', 
        id: 1 ,
        projectDetails:'The Double C & B Front-End Development project aimed to create a visually appealing and user-friendly website interface for individuals following the keto diet, emphasizing mental and physical wellness. Developed using HTML, CSS, and Bootstrap framework, the website ensures seamless navigation and responsiveness across various devices.',
        projectFeatures:(
            <ol className='listitem'>
                <li><span className='fwbold'>Navigation and Branding:</span> Clear navigation with styled brand logo and links. Hover effects enhance user interaction.</li>
                <li><span className='fwbold'>Content Presentation:</span> Visually engaging content layout with easy access to sections like "Recipes," "Food," "About Us," and "Contact."</li>
                <li><span className='fwbold '>Program Details:</span> Dedicated section outlines Double C & B program principles and benefits, focusing on mental health and lifestyle transformation.</li>
                <li><span className='fwbold '>Client Testimonials:</span> Carousel of testimonials with images provides social proof of program effectiveness. Enhanced visibility with scale transformation for active items.</li>
                <li><span className='fwbold '>Subscription Feature:</span> Users can subscribe for updates and newsletters, boosting engagement and retention.</li>
                <li><span className='fwbold '>Footer:</span>Essential links and subscription input facilitate user interaction and resource access.</li>
            </ol>
        ),
        projectTech:'HTML5, CSS3, Bootstrap 5: Leveraged for front-end development, styling, and responsiveness.',
        img1:pro1,
        img2:pro3,
        gitlink:'https://www.npmjs.com/package/react-external-link'
    },
    { projectImg: pro2, projectName: 'Planty', projectDesc: 'Description', id: 2 },
    { projectImg: pro3, projectName: 'Restaurant', projectDesc: 'Description', id: 3 },
    { projectImg: pro4, projectName: 'To Do App', projectDesc: 'Description', id: 4 },
    { projectImg: pro5, projectName: 'Calculator', projectDesc: 'Description', id: 5 },
    { projectImg: pro6, projectName: 'Landing page', projectDesc: 'Description', id: 6 }
];

function ProjectGrid({ onCardClick}) {
    return (
           
        <div className='d-flex flex-wrap justify-content-between '>
            {data.map((item) => (
                //  key={item.id}
                    <ProjectCard {...item} onCardClick={() => onCardClick(item)} />
                
            ))}
        </div>
        
    );
}

export default ProjectGrid;
