import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import landingPage from './pages/landingPage';
import clubPage from './pages/clubPage';
import Footer from './components/footer';
import {  useLocation } from 'react-router-dom';






const App = () => {
 // const location = useLocation();
 // console.log(location.pathname) 

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
