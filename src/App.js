import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Navbar from './components/navbar';
import landingPage from './pages/landingPage';
import clubPage from './pages/clubPage';
import loginPage from './pages/loginPage';
import checkoutPage from './pages/checkoutPage';
import careerPage from './pages/careerPage';
import customerPage from './pages/customerPage';
import Footer from './components/footer';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
//import { withRouter } from "react-router-dom";
// import the library

import { faHome } from '@fortawesome/free-solid-svg-icons';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const App = () => {
  
  return (
    
<div className="App">

<Router>
<nav>
<div className="nav">
{/* this is beginning nav div 100% */}


{/* this is section 1 which is 33% width */}
<div id ="sectionOne"><h3 style={{ paddingBottom: '1px', fontSize: '24px', fontFamily: 'Tahoma', fontWeight: 'bold' }}>
  <span style={{color:'#4F9CC8'}}>Maugny</span></h3></div>
{/* <div id ="sectionOne"><h3 style={{ paddingBottom: '1px', fontSize: '24px', fontFamily: 'Verdana', fontWeight: 'bold' }}><span style={{color:'#13d34b'}}>Go</span><span style={{color:'#3c6cd2'}}>Help</span><span style={{color:'#b429b0'}}>Pal</span></h3></div>
*/}


{/* this part needs to be fixed as section 2 is 66% and home and cart will share width 50 % each, and then fix center padding etc.*/}


{/* this is beginning of section 2 which is 66% consisting of home and cart 50% each */}
<div id ="sectionTwo">  

{/* this is beginning of Home 50% */}
<div className="home">
    <Link to="/" className="Nav__brand">
    </Link>
       
       {/* this is beginning of NavCenter internal div of Home */}
<div className="navCenter">

  <div>
    {/* this is beginnig of Home icon */}
  <NavLink to="/landingPage" style={({ isActive }) =>
isActive
? {
    color: '#ECEFF8'
  }
: { color: '#4F9CC8'}
}
//style={ isHome ? { color: "#4F9CC8" } : {} }
> 
    
    <FontAwesomeIcon icon={faHome} style={{ fontSize: '24px' }}/>
    </NavLink>
    </div>
  {/* this is end of Home icon */}
  {/* this is beginning of club link */}
  <div>
  <NavLink to="/clubPage" style={({ isActive }) =>
isActive
? {
    color: '#ECEFF8'
  }
: { color: '#4F9CC8'}
}>
      
    Club
    </NavLink>  
    </div>
  {/* this is end of club link */}
  {/* this is beginning of login link */}
  <div>
  <NavLink to="/loginPage" style={({ isActive }) =>
isActive
? {
    color: '#ECEFF8'
  }
: { color: '#4F9CC8'}
}>
    Login
    </NavLink>  
    </div>
    {/* this is end of login link */}

  {/* this is end of navCenter div */}
</div>

{/* this is end of home */}
  </div>                       

      {/*this is beginning of cart div */}
        <div className="cart">
          
           {/*this is beginning of cart link */} 
            <div className="App">
            <NavLink className="fourthLink" to="/checkoutPage" 
          style={({ isActive }) =>
          isActive
            ? {
                color: '#ECEFF8'
              }
              
            : { color:  '#7d7f81'}
        }                
          
          >
  <FontAwesomeIcon icon={faCartPlus} style={{ fontSize: '24px' }}/>
  </NavLink>
</div>
{/*this is end of cart link */}

            
          {/* https://github.com/FortAwesome/Font-Awesome/tree/master/js-packages/%40fortawesome/free-solid-svg-icons */}
         
        </div>
{/* this is end of cart main div */}


{/* this is end of sectionTwo div */}
</div>

</div>
{/* this is end of total nav 100% main div */}

</nav>
      
       <Routes> 
         
       <Route path='/' element={landingPage} />
       
          <Route path="landingPage" element={landingPage} />
    
          <Route path="clubPage" element={clubPage} />

          <Route path="loginPage" element={loginPage} />

          <Route path="checkoutPage" element={checkoutPage} />

          <Route path="careerPage" element={careerPage} />

          <Route path="customerPage" element={customerPage} />
      
      </Routes>
      <Footer></Footer>   
      </Router>
          
    </div>
  );
}

export default App;
