import logo from './logo.svg';
import './App.css';


import Skills from './Skills';
import Container from 'react-bootstrap/esm/Container';
import Intro from './Intro';
import Project from './Project';

function App() {
  
  return (
    <>
    <Intro/>
    <Skills align='text-center mb-5'/>
    <Project align='text-center mb-5'/>
    {/* <About/> */}
    
    {/* <Footer/> */}
    </>
  );
}

export default App;
