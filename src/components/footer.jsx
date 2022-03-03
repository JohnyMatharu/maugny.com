import './footer.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
//import { withRouter } from "react-router-dom";
// import the library

import { faClub } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Footer() {
    return (
       
     
        <div id = "footer">
       
       {/* this is div above 1st level start */}
       <div id = "firstLevel">

       
       
         
         {/* <FontAwesomeIcon icon={faHome} style={{ fontSize: '24px' }}/> */}
         
<div class= "space" id = "Mail">
<Link to="/customerPage">Customer Service</Link>
</div>


       <div class= "space" id = "Mail">
       <Link to="/careerPage">Careers</Link>
       </div>


       <div class= "space" id = "Mail">
       <a href='mailto: jaani.matharu@gmail.com'><i class="fas fa-envelope" style={{ fontSize: '18px' }}></i></a>  
       </div>


       </div>
{/* this is div above 1st level end */}


{/* this is div below second level beginning*/}
<div id = "secondLevel">
       
       <div class= "space" id = "Term"> 
  
     {/* <br> */}
       {/* </br> */}
       {/* <br> */}
       {/* </br> */}
       <Link to="">Terms of Use</Link>
           
       </div>
     
       <div class= "space" id ="Privacy">
       
       {/* <br> */}
       {/* </br> */}
       {/* <br> */}
       {/* </br> */}
       
       <Link to="">Privacy Policy</Link>
     
       </div>
       <div class= "space" id ="Github">
      
       {/* <br> */}
       {/* </br> */}
       {/* <br> */}
       {/* </br> */}
       Copyright 2022
       </div>
       
       
       </div>
{/* this is end of div below second level */}

{/* this is end of main footer div */}
        </div>
        
    )
}


// Icons Mail and phone a bit higher and smaller and rest at bottom a bit bigger
//Make sure copyright sign and other term of use or privacy etc. if necessary
