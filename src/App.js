import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Navbar from './components/navbar';
import landingPage from './pages/landingPage';
import clubPage from './pages/clubPage';
import loginPage from './pages/loginPage';
import checkoutPage from './pages/checkoutPage';
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

<div id ="sectionOne"><h3 style={{ paddingBottom: '1px', fontSize: '24px', fontFamily: 'Tahoma', fontWeight: 'bold' }}>
  <span style={{color:'#4F9CC8'}}>Maugny</span></h3></div>
{/* <div id ="sectionOne"><h3 style={{ paddingBottom: '1px', fontSize: '24px', fontFamily: 'Verdana', fontWeight: 'bold' }}><span style={{color:'#13d34b'}}>Go</span><span style={{color:'#3c6cd2'}}>Help</span><span style={{color:'#b429b0'}}>Pal</span></h3></div>
*/}


{/* this part needs to be fixed as section 2 is 66% and home and cart will share width 50 % each, and then fix center padding etc.*/}


<div className="home" id ="sectionTwo">  
    <Link to="/" className="Nav__brand">
    </Link>
       
<div className="navCenter">

  <div>
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

  {/* this is end of navCenter div */}
</div>

{/* this is end of one above it */}
  </div>                       

      {/*this is beginning of cart main div */}
        <div className="cart">
          
            
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
            
          {/* https://github.com/FortAwesome/Font-Awesome/tree/master/js-packages/%40fortawesome/free-solid-svg-icons */}
         
        </div>
{/* this is end of cart main div */}


{/* this is end of nav 100% div */}
</div>

</nav>
      
       <Routes> 
         
       <Route path='/' element={landingPage} />
       
          <Route path="landingPage" element={landingPage} />
    
          <Route path="clubPage" element={clubPage} />

          <Route path="loginPage" element={loginPage} />

          <Route path="checkoutPage" element={checkoutPage} />
      
      </Routes>
      <Footer></Footer>   
      </Router>
          
    </div>
  );
}

export default App;
