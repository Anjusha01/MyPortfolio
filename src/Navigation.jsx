import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.png'
import { NavLink } from 'react-router-dom';
import './navigation.css'

function Navigation() {
  return (
    <>
        <Navbar expand="md" className=" bg-body">
        
        {/* <Navbar.Brand>
          <img src={logo} alt="" width="15%" />
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto menu'>
            <NavLink to="/" className='p-3 mx-4 navlink'>Home</NavLink>
            <NavLink to="/About" className='p-3 mx-4 navlink'>About</NavLink>
            <NavLink to="/Skills" className='p-3 mx-4 navlink'>Skills</NavLink>
            <NavLink to="/Project" className='p-3 mx-4 navlink'>Projects</NavLink>
            <NavLink to="/Resume"  className='p-3 mx-4 navlink'>Resume</NavLink>
            <NavLink to="/Contact" className='p-3 mx-4 navlink'>Contact</NavLink>

          </Nav>
        </Navbar.Collapse>
     
    </Navbar>
    </>

  )
}

export default Navigation