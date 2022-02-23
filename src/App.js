import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import landingPage from './pages/landingPage';
import clubPage from './pages/clubPage';
import Footer from './components/footer';
import {  useLocation } from 'react-router-dom';

// to be checked

console.log (window.location.pathname, "this is experiment") 
//function usePath () 
//{
//const location = useLocation();
// return  
//}

//const isHome = usePath() === "/";

//console.log (usePath, "this is experiment")
const App = () => {
 
   
 
 
 
  return (
    
    <div className="App">

      
<Router>

 <Navbar></Navbar> 

<div>

      {/* <Routes> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="users/*" element={<Users />} /> */}
      {/* </Routes> */}
    

       <Routes> 
         
       <Route path='/' element={<landingPage/>} />
       
          <Route path="landingPage" element={<landingPage/>} />
    
          <Route path="clubPage" element={<clubPage/>} />
      
      </Routes>
     

      </div>
      </Router>
      <Footer></Footer>      
    </div>
  );
}

export default App;
