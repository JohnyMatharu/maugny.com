import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import Navbar from './components/navbar';
import landingPage from './pages/landingPage';
import clubPage from './pages/clubPage';
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

<div id ="sectionOne"><h3 style={{ paddingBottom: '1px', fontSize: '24px', fontFamily: 'Tahoma', fontWeight: 'bold' }}>
  <span style={{color:'#4F9CC8'}}>Maugny</span></h3></div>
{/* <div id ="sectionOne"><h3 style={{ paddingBottom: '1px', fontSize: '24px', fontFamily: 'Verdana', fontWeight: 'bold' }}><span style={{color:'#13d34b'}}>Go</span><span style={{color:'#3c6cd2'}}>Help</span><span style={{color:'#b429b0'}}>Pal</span></h3></div>
*/}


<div id ="sectionTwo">  
    <Link to="/" className="Nav__brand">
    </Link>
       
        <div className="home">

   
        <NavLink to="/landingPage" style={({ isActive }) =>
isActive
? {
    color: '#ECEFF8'
  }
: { color: '#4F9CC8'}
}
//style={ isHome ? { color: "#4F9CC8" } : {} }
> 
                                          
<div className="App">
  <FontAwesomeIcon icon={faHome} style={{ fontSize: '24px' }}/>
</div>
                         
</NavLink></div>
      
        <div className="club">
          <NavLink className="fourthLink" to="/clubPage" 
          style={({ isActive }) =>
          isActive
            ? {
                color: '#ECEFF8'
              }
              
            : { color:  '#7d7f81'}
        }                
          
          >
            
            <div className="App">
  <FontAwesomeIcon icon={faCartPlus} style={{ fontSize: '24px' }}/>
</div>
            
          {/* https://github.com/FortAwesome/Font-Awesome/tree/master/js-packages/%40fortawesome/free-solid-svg-icons */}
          
          
          </NavLink>
        </div>
</div>
</div>

</nav>
      
       <Routes> 
         
       <Route path='/' element={landingPage} />
       
          <Route path="landingPage" element={landingPage} />
    
          <Route path="clubPage" element={clubPage} />
      
      </Routes>
      <Footer></Footer>   
      </Router>
          
    </div>
  );
}

export default App;
