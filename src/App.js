import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import landingPage from './pages/landingPage';
import clubPage from './pages/clubPage';
import Footer from './components/footer';
import { HashRouter as Router } from 'react-router-dom'





function App() {
  return (
    <div className="App">
<Router>
<Navbar></Navbar>
<Route exact path='/' component={landingPage} />
<div>
      <Switch>
        
          <Route exact path='/landingPage' component={landingPage} />
    
          <Route exact path='/clubPage' component={clubPage} />
      
      </Switch>
      </div>
      </Router>
      <Footer></Footer>      
    </div>
  );
}

export default App;
