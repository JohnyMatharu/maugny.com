//Real Nav Bar Maugny.com

// For media queries, somethings disappeared, two became one and distance in between objects became smaller
//logo will stay there, unessential stuff will go away and they all become like a one line

import './App.scss';
import React, { Component, useState, useContext } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/navbar';
// import Test from './pages/test';
import LandingPage from './pages/landingPage';
import ClubPage from './pages/clubPage';
import loginPage from './pages/loginPage';
import checkoutPage from './pages/checkoutPage';
import careerPage from './pages/careerPage';
import customerPage from './pages/customerPage';
import privacyPage from './pages/privacyPage';
import termPage from './pages/termPage';
import Footer from './components/footer';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import logo from './pictures/Logo.png';
//import { withRouter } from "react-router-dom";
// import the library
//import Signup from './pages/Signup';
// import { StoreProvider } from './utils/GlobalState;
// import OrderHistory from './pages/OrderHistory';
// import ChangePassword from './pages/ChangePassword';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//The StoreProvider has only been provided to updated Global state which is using Reducer in 
//Global State under utils. SetContext not to be confused with global state, connected to
//auth.js and stores login token, AppolloClient is connected to graphQl to send queries to

const httpLink = createHttpLink({
 uri: 'http://localhost:3001/graphql'
  // uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});




const App = () => {
 // const [isShown, setIsShown] = useContext(false);

  return (
    
<div className="App"> 
<ApolloProvider client={client}>
<Router>
{/* <StoreProvider> */}

{/* experiment start */}

<nav>
<div className="nav">
{/* this is beginning nav div 100% */}


{/* this is section 1 which is 33% width */}
<div id ="sectionOne"><div id ="logo"><img src={logo}></img></div></div>
{/* Here logo is preferred to be singular in Nav Bar*/}

  

{/* NEXT step, use branding to make sure your look is fine for text and headings */}



{/* <div id ="sectionOne"><h3 style={{ paddingBottom: '1px', fontSize: '24px', fontFamily: 'Verdana', fontWeight: 'bold' }}><span style={{color:'#13d34b'}}>Go</span><span style={{color:'#3c6cd2'}}>Help</span><span style={{color:'#b429b0'}}>Pal</span></h3></div>
*/}


{/* this part needs to be fixed as section 2 is 66% and home and cart will share width 50 % each, and then fix center padding etc.*/}


{/* this is beginning of section 2 which is 66% consisting of home and cart 50% each */}
<div id ="sectionTwo">  

{/* this is beginning of Home 50% */}
<div className="home">
    <Link to="/" className="Nav__brand">
    </Link>
       

  <div className="homeCenter">
    {/* this is beginnig of Home icon 33%*/}
  <NavLink to="/landingPage" style={({ isActive }) =>
isActive
? {
    color: '#fde050'
  }
: { color: '#220088'
}
}
//style={ isHome ? { color: "#4F9CC8" } : {} }

> 
    
    <FontAwesomeIcon icon={faHome} style={{ fontSize: '18px' }}/>
    </NavLink>
    </div>
  {/* this is end of Home icon */}
  {/* this is beginning of club link 33% */}
  <div className="homeCenter">
  <NavLink to="/clubPage" style={({ isActive }) =>
isActive
? {
    color: '#fde050',
    fontFamily: 'Outfit',
    fontSize: '18px',
 //   fontWeight: "bold"
  }
: { color: '#220088',
fontFamily: 'Outfit',
fontSize: '18px',
//fontWeight: "bold"   
}
}>
      
    Club
    </NavLink>  
    </div>
  {/* this is end of club link */}
  {/* this is beginning of login link 33% */}
  {/* 14 px is 10.5 point font and 16 px is 12 point font */}
  <div className="homeCenter">
  <NavLink to="/loginPage" style={({ isActive }) =>
isActive
? {
    color: '#fde050',
    fontFamily: 'Outfit',
    fontSize: '18px',
    // bold can be adjusted, mostly be replaced by Icons
  //  fontWeight: "bold" 
  }
: { color: '#220088',
fontFamily: 'Outfit',
fontSize: '18px', 
//fontWeight: "bold"
}
}>
    Login
    </NavLink>  
    </div>
    {/* this is end of login link */}

 
{/* </div> */}

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
                color: '#fde050'
              }
              
            : { color:  '#220088'}
        }                
          
          >
  <FontAwesomeIcon icon={faCartPlus} style={{ fontSize: '18px' }}/>
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
         
       <Route path='/' element={<LandingPage/>}  />
       {/* <Route path='/' element={<Test/>}  /> */}
       
          <Route path="landingPage" element={<LandingPage/>} />
          {/* <Route path="Test" element={<Test/>} /> */}
    
          <Route path="clubPage" element={<ClubPage />} />

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
<Link to="/customerPage" id = "headingStyle" style = {{fontFamily: 'Outfit'}}>Customer</Link>
</div>


       <div className= "space" id = "Careers">
       <Link to="/careerPage" id = "headingStyle" style = {{fontFamily: 'Outfit'}}>Careers</Link>
       </div>


       <div className= "space" id = "Mail">
    <a href='mailto: gohelppal@gmail.com'><FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '18px', color:'#220088' }}/></a>
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
       <Link to="/termPage" id = "headingStyle" style = {{fontFamily: 'Outfit'}}>Terms of Use</Link>
           
       </div>
     
       <div className= "space" id ="Privacy">
       
       <br>
       </br>
       {/* <br> */}
       {/* </br> */}
       
       <Link to="/privacyPage" id = "headingStyle" style = {{fontFamily: 'Outfit'}}>Privacy Policy</Link>
     
       </div>
       <div className= "space" id ="textStyle">
       <br>
       </br>
       {/* <br> */}
       {/* </br> */}
     Maugny © 2024
       </div>
       
       
       </div>
{/* this is end of div below second level */}

{/* this is end of main footer div */}
        </div>

{/* this is footer end */}
</footer>
      

{/* </StoreProvider> */}
      </Router>
      </ApolloProvider>
      
          
    </div>
  );
}

export default App;

