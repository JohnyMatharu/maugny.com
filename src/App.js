// For media queries, somethings disappeared, two became one and distance in between objects became smaller
//logo will stay there, unessential stuff will go away and they all become like a one line

import './App.scss';
import React, { Component, useState, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Navbar from './components/navbar';
import Test from './pages/test';
import Test1 from './pages/test1';
// import LandingPage from './pages/landingPage';
// import ClubPage from './pages/clubPage';
// import loginPage from './pages/loginPage';
// import checkoutPage from './pages/checkoutPage';
// import careerPage from './pages/careerPage';
// import customerPage from './pages/customerPage';
// import privacyPage from './pages/privacyPage';
// import termPage from './pages/termPage';
import Footer from './components/footer';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from './pictures/Logo.png';
//import { withRouter } from "react-router-dom";
// import the library

import { faHome } from '@fortawesome/free-solid-svg-icons';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const App = () => {
 // const [isShown, setIsShown] = useContext(false);

  return (
    
<div className="App"> 
<Router>

{/* experiment start */}



{/* this is main pages rendering */}
<Routes> 
         
       {/* <Route path='/' element={<LandingPage/>}  /> */}
       {/* <Route path='/' element={<Test/>}  /> */}
       <Route path='/' element={<Test1/>}  />
          {/* <Route path="landingPage" element={<LandingPage/>} /> */}
          {/* <Route path="Test" element={<Test/>} /> */}
          <Route path="Test1" element={<Test1/>} />
    
          {/* <Route path="clubPage" element={<ClubPage />} /> */}

          {/* <Route path="loginPage" element={loginPage} /> */}

          {/* <Route path="checkoutPage" element={checkoutPage} /> */}

          {/* <Route path="careerPage" element={careerPage} /> */}

          {/* <Route path="customerPage" element={customerPage} /> */}

          {/* <Route path="privacyPage" element={privacyPage} /> */}
        
          {/* <Route path="termPage" element={termPage} /> */}
     
          </Routes> 


         
      </Router>
          
    </div>
  );
}

export default App;
