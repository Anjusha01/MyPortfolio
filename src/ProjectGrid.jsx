import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import pro1 from './pro1.png';
import pro2 from './pro2.png';
import pro3 from './pro3.png';
import pro7 from './pro7.png'
import pro8 from './pro8.png';
import pro5 from './pro5.png';
import pro6 from './pro6.png';
import pro4 from './pro4.png';

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
        gitlink:'https://github.com/Anjusha01/responsive-webpage'
    },
    { 
        projectImg: pro2, 
        projectName: 'Planty', 
        projectDesc: 'The Planty Front-End Development project aims to create a visually appealing and user-friendly website interface for plant enthusiasts, emphasizing the beauty and care of houseplants.', 
        id: 2 ,
        projectDetails:'The Planty Front-End Development project aims to create a visually appealing and user-friendly website interface for plant enthusiasts. The website showcases a variety of houseplants, provides plant care tips, and highlights products for both homes and offices. Developed using HTML, CSS, and the Bootstrap framework, the site ensures seamless navigation and responsiveness across various devices.',
        projectFeatures:(
            <ol className='listitem'>
            <li><span className='fwbold'>Navigation and Branding:</span> Clear navigation with a styled brand logo and links. Hover effects enhance user interaction.</li>
            <li><span className='fwbold'>Content Presentation:</span> Visually engaging content layout with easy access to sections like "Plants," "For Offices," "Plant Care," and "About."</li>
            <li><span className='fwbold '>Hero Section:</span> Eye-catching hero section with a background image and call-to-action buttons to encourage user engagement.</li>
            <li><span className='fwbold '>Product Carousel:</span> Carousel showcasing best-selling plant varieties with smooth transitions and detailed descriptions.</li>
            <li><span className='fwbold '>Customer Reviews:</span> Section for customer testimonials to provide social proof and enhance credibility.</li>
            <li><span className='fwbold '>Subscription Feature:</span> Users can subscribe for updates, special offers, and plant care tips, boosting engagement and retention.</li>
            <li><span className='fwbold '>Footer:</span> Essential links and social media icons facilitate user interaction and resource access.</li>
        </ol>
        ),
        projectTech:'HTML5, CSS3, Bootstrap 5: Leveraged for front-end development, styling, and responsiveness.',
        img1:pro2,
        img2:pro3,
        gitlink:'https://github.com/Anjusha01/planty'
    },
    { 
        projectImg: pro7, 
        projectName: 'Movie Search', 
        projectDesc: 'The MoviesHub project provides a platform for users to search for movies using the OMDb API, featuring a user-friendly interface built with React and Bootstrap.', 
        id: 3 ,
        projectDetails:'The MoviesHub project aims to create a dynamic and responsive web application for movie enthusiasts. Users can search for movies using the OMDb API and navigate through the search results seamlessly. The application is built using React, Bootstrap, and Axios to ensure efficient data fetching and a smooth user experience.',
        projectFeatures:(
            <ol className='listitem'>
            <li><span className='fwbold'>Search Functionality:</span> Users can search for movies using keywords, leveraging the OMDb API to fetch relevant movie data.</li>
            <li><span className='fwbold'>Navigation:</span> Clear navigation with links to the home page and about page, enhancing the user experience.</li>
            <li><span className='fwbold '>Responsive Design:</span> The application is fully responsive, ensuring it works well on both desktop and mobile devices.</li>
            <li><span className='fwbold '>Form Handling:</span> User input is handled with state management in React, providing real-time updates and feedback.</li>
            <li><span className='fwbold '>Axios Integration:</span> Axios is used for making API requests, ensuring efficient and reliable data fetching.</li>
            <li><span className='fwbold '>React Router:</span> React Router is used for navigation, allowing users to seamlessly navigate to different parts of the application.</li>
        </ol>
        ),
        projectTech:'React, React Bootstrap, Axios, React Router: Leveraged for front-end development, API integration, and navigation.',
        img1:pro7,
        img2:pro3,
        gitlink:'https://github.com/Anjusha01/MoviesHub'
    },
    { 
        projectImg: pro8, 
        projectName: 'Recipe', 
        projectDesc: 'Recipe is a web application that allows users to explore various recipes, search for specific dishes, and manage their favorite recipes, built with React, Redux, and React Router.', 
        id: 4 ,
        projectDetails:'RecipeHub is designed to offer a comprehensive and user-friendly platform for culinary enthusiasts. Users can browse through different categories of recipes, view detailed information about each recipe, and maintain a list of their favorite recipes. The application is built using React for the front-end, Redux for state management, and React Router for navigation, ensuring a seamless and interactive user experience.',
        projectFeatures:(
            <ol className='listitem'>
            <li><span className='fwbold'>Navigation and Layout:</span> Consistent navigation across the application with a navigation component (NavComp) that wraps all routes, providing easy access to different sections like categories, favorites, and search.</li>
            <li><span className='fwbold'>Category Browsing:</span> Users can browse recipes by categories, with each category displaying relevant items.</li>
            <li><span className='fwbold'>Recipe Details:</span> Detailed view for each recipe, allowing users to see the ingredients and preparation steps.</li>
            <li><span className='fwbold'>Search Functionality:</span> Users can search for recipes by keywords, with results displayed on a dedicated search results page.</li>
            <li><span className='fwbold'>Favorites Management:</span> Users can manage their favorite recipes, adding or removing items from their favorites list.</li>
            <li><span className='fwbold'>User Authentication:</span> Login and registration functionality to allow users to save their favorite recipes and access personalized content.</li>
        </ol>
        ),
        projectTech:'React, React Redux, React Router, Axios: Leveraged for front-end development, state management, navigation, and API integration.',
        img1:pro8,
        img2:pro3,
        gitlink:'https://github.com/Anjusha01/Recipe'
    },{ 
        projectImg: pro6, 
        projectName: 'Recipe', 
        projectDesc: 'DeckWebPage is a comprehensive web application designed for managing and displaying a collection of items, offering features such as browsing, searching, and detailed item views, built with React, Redux, and React Router.', 
        id: 5 ,
        projectDetails: 'DeckWebPage is tailored to provide a seamless user experience for managing and interacting with a collection of items. Users can browse through categories, search for specific items, and view detailed information about each item. The application employs React for the front-end, Redux for state management, and React Router for navigation, ensuring a robust and dynamic interface.',
        projectFeatures: (
            <ol className='listitem'>
                <li><span className='fwbold'>Navigation and Layout:</span> Consistent and intuitive navigation with a main navigation component (NavComp) wrapping all routes, facilitating easy access to different sections like categories, favorites, and search.</li>
                <li><span className='fwbold'>Category Browsing:</span> Users can explore items categorized for better organization and easier access.</li>
                <li><span className='fwbold'>Item Details:</span> Detailed views for each item, providing comprehensive information and specifications.</li>
                <li><span className='fwbold'>Search Functionality:</span> Advanced search features allowing users to find items based on keywords, with results displayed on a dedicated search results page.</li>
                <li><span className='fwbold'>Favorites Management:</span> Users can maintain a list of their favorite items, adding or removing items as needed.</li>
                <li><span className='fwbold'>User Authentication:</span> Includes login and registration functionality to enable users to personalize their experience and save favorite items.</li>
            </ol>
        ),
        projectTech: 'React, React Redux, React Router, Axios: Utilized for building the front-end, managing state, handling navigation, and integrating with APIs.',
        img1: pro6,
        img2:pro3,
        gitlink:'https://github.com/Anjusha01/deckwebpage'
    },
    { 
        projectImg: pro4, 
        projectName: 'To Do App', 
        projectDesc: 'ToDo List is a web application designed to help users manage their daily tasks efficiently, featuring an intuitive interface and essential task management functionalities.', 
    id: 6,
    projectDetails: 'The ToDo List project aims to provide a simple yet effective tool for managing daily tasks. Built with React, this application allows users to add, edit, and delete tasks, ensuring they stay organized and on top of their responsibilities. The project emphasizes user experience with a clean, responsive design and easy-to-use features.',
    projectFeatures: (
        <ol className='listitem'>
            <li><span className='fwbold'>Task Addition:</span> Users can easily add new tasks with a simple input form, helping them keep track of all their to-dos.</li>
            <li><span className='fwbold'>Task Editing:</span> Provides functionality to edit existing tasks, allowing users to update task details as needed.</li>
            <li><span className='fwbold'>Task Deletion:</span> Enables users to delete tasks that are no longer needed, keeping the task list relevant and clutter-free.</li>
            <li><span className='fwbold'>Task Completion:</span> Allows users to mark tasks as completed, helping them track their progress and stay motivated.</li>
            <li><span className='fwbold'>Responsive Design:</span> Features a responsive layout that ensures the application is accessible and user-friendly on various devices.</li>
            <li><span className='fwbold'>Persistent Storage:</span> Utilizes local storage to save tasks, ensuring that user data persists across browser sessions.</li>
        </ol>
    ),
    projectTech: 'React: Used for building the user interface and managing the application state. Local Storage: Utilized for persisting task data across sessions.',
    img1:pro4,

    },
    // { projectImg: pro3, projectName: 'Restaurant', projectDesc: 'Description', id: 3 },
    // { projectImg: pro5, projectName: 'Calculator', projectDesc: 'Description', id: 5 },
    // { projectImg: pro6, projectName: 'Landing page', projectDesc: 'Description', id: 6 }
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
