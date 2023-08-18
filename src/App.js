// For media queries, somethings disappeared, two became one and distance in between objects became smaller
//logo will stay there, unessential stuff will go away and they all become like a one line
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
import privacyPage from './pages/privacyPage';
import termPage from './pages/termPage';
import Footer from './components/footer';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
//import { withRouter } from "react-router-dom";
// import the library

import { faHome } from '@fortawesome/free-solid-svg-icons';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const App = () => {
  
  return (
    
<div className="App">

<Router>
<nav>



<div className="nav">
{/* this is beginning nav div 100% */}


{/* this is section 1 which is 33% width */}

{/* 
<div id ="sectionOne"><h3 style={{ paddingBottom: '1px', fontSize: '28px', fontFamily: 'Poppins', fontWeight: 'bold' }}>
  <span style={{color:'#fde050'}}>M</span></h3></div>  */}
{/* Here logo is preferred to be singular in Nav Bar*/}

  

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
: { color: '#fde050'
}
}
//style={ isHome ? { color: "#4F9CC8" } : {} }
> 
    {/* 
    <FontAwesomeIcon icon={faHome} style={{ fontSize: '28px' }}/>  */}
    </NavLink>
    </div>
  {/* this is end of Home icon */}
  {/* this is beginning of club link */}
  <div>
  <NavLink to="/clubPage" style={({ isActive }) =>
isActive
? {
    color: '#ECEFF8',
    fontFamily: 'Poppins',
    fontSize: '14px'  
    
  }
: { color: '#8A2be2',
fontFamily: 'Poppins',
fontSize: '14px'   
}
}>
  {/*  
      
    Club
*/}

    </NavLink>  
    </div>
  {/* this is end of club link */}
  {/* this is beginning of login link */}
  {/* 14 px is 10.5 point font and 16 px is 12 point font */}
  <div>
  <NavLink to="/loginPage" style={({ isActive }) =>
isActive
? {
    color: '#ECEFF8',
    fontFamily: 'Poppins',
    fontSize: '14px' 
  }
: { color: '#8A2be2',
fontFamily: 'Poppins',
fontSize: '14px' 
}
}>
  {/* 
    Login
     */}
    
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
              
            : { color:  '#fde050'}
        }                
          
          >
            {/*  
  <FontAwesomeIcon icon={faCartPlus} style={{ fontSize: '28px' }}/>
  */}
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


{/* this is main pages rendering */}
<Routes> 
         
       <Route path='/' element={landingPage} />
       
          <Route path="landingPage" element={landingPage} />
    
          <Route path="clubPage" element={clubPage} />

          <Route path="loginPage" element={loginPage} />

          <Route path="checkoutPage" element={checkoutPage} />

          <Route path="careerPage" element={careerPage} />

          <Route path="customerPage" element={customerPage} />

          <Route path="privacyPage" element={privacyPage} />
        
          <Route path="termPage" element={termPage} />
     
          </Routes> 


<footer>
{/* this is footer beginning */}

<div id = "footer">
       
       {/* this is div above 1st level start */}
       <div id = "firstLevel">

         
<div className= "space">
{/* <Link to="/customerPage" style = {{color:'#8A2be2', fontFamily: 'Poppins', fontSize: '14px' }}>Customer</Link> */}
</div>


       <div className= "space" id = "Careers">
       {/* <Link to="/careerPage" style = {{color:'#8A2be2', fontFamily: 'Poppins', fontSize: '14px' }}>Careers</Link> */}
       </div>


       <div className= "space" id = "Mail">
    {/* <a href='mailto: jaani.matharu@gmail.com'><FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '28px', color:'#fde050' }}/></a> */}
       </div>


       </div>
{/* this is div above 1st level end */}


{/* this is div below second level beginning*/}
<div id = "secondLevel">
       
       <div className= "space" id = "Term"> 
  
     <br>
       </br>
       {/* <br> */}
       {/* </br> */}
       {/* <Link to="/termPage" style = {{color:'#8A2be2', fontFamily: 'Poppins', fontSize: '14px' }}>Terms of Use</Link> */}
           
       </div>
     
       <div className= "space" id ="Privacy">
       
       <br>
       </br>
       {/* <br> */}
       {/* </br> */}
       
       {/* <Link to="/privacyPage" style = {{color:'#8A2be2', fontFamily: 'Poppins', fontSize: '14px' }}>Privacy Policy</Link> */}
     
       </div>
       <div className= "space" id ="Copyright" style = {{color:'black', fontFamily: 'Outfit', fontSize: '14px' }}>
       <br>
       </br>
       {/* <br> */}
       {/* </br> */}
     {/* Maugny © 2022 */}
       </div>
       
       
       </div>
{/* this is end of div below second level */}

{/* this is end of main footer div */}
        </div>

{/* this is footer end */}
</footer>
      

         
      </Router>
          
    </div>
  );
}

export default App;
