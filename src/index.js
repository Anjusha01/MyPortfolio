import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './About';
import Project from './Project';
import Skills from './Skills';
import Contact from './Contact';
import Navigation from './Navigation';
import FooterComp from './FooterComp';
import Resume from './Resume';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/About' element={<About/>} ></Route>
        <Route path='/Project' element={<Project align='mb-5'/>}></Route>
        <Route path='/Skills' element={<Skills align='mb-5'/>}></Route>
        <Route path='/Resume' element={<Resume align='mb-5'/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
    <FooterComp/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
