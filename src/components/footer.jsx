import './footer.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
//import { withRouter } from "react-router-dom";
// import the library

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Footer() {
    return (
       
     
        <div id = "footer">
       
       {/* this is div above 1st level start */}
       <div id = "firstLevel">

         
<div class= "space">
{/* <Link to="/customerPage" style = {{color:'#8A2be2', fontFamily: 'Poppins', fontSize: '14px' }}>Customer</Link> */}
</div>


       <div class= "space" id = "Careers">
       {/* <Link to="/careerPage" style = {{color:'#8A2be2', fontFamily: 'Poppins', fontSize: '14px' }}>Careers</Link> */}
       </div>


       <div class= "space" id = "Mail">
    {/* <a href='mailto: jaani.matharu@gmail.com'><FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '28px', color:'#fde050' }}/></a> */}
       </div>


       </div>
{/* this is div above 1st level end */}


{/* this is div below second level beginning*/}
<div id = "secondLevel">
       
       <div class= "space" id = "Term"> 
  
     <br>
       </br>
       {/* <br> */}
       {/* </br> */}
       {/* <Link to="/termPage" style = {{color:'#8A2be2', fontFamily: 'Poppins', fontSize: '14px' }}>Terms of Use</Link> */}
           
       </div>
     
       <div class= "space" id ="Privacy">
       
       <br>
       </br>
       {/* <br> */}
       {/* </br> */}
       
       {/* <Link to="/privacyPage" style = {{color:'#8A2be2', fontFamily: 'Poppins', fontSize: '14px' }}>Privacy Policy</Link> */}
     
       </div>
       <div class= "space" id ="Copyright" style = {{color:'black', fontFamily: 'Outfit', fontSize: '14px' }}>
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
        
    )
}


// Icons Mail and phone a bit higher and smaller and rest at bottom a bit bigger
//Make sure copyright sign and other term of use or privacy etc. if necessary
