import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useLocation } from "react-router-dom"
//import { withRouter } from "react-router-dom";
// import the library

import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router";
//following has been added as a remedy and above has been put in notes
export const withRouter = (Component) => {
	const Wrapper = (props) => {
		const history = useNavigate();
		return <Component history={history} {...props} />;
	};
	return Wrapper;
};


class Navbar extends React.Component {

  render() {    
    //version 6 is used for this, for GoHelpPal version 5 or lower, can keep isHome if ever need location
//    const isHome = (window.location.pathname === "/landingPage") ? "TRUE": "FALSE";
  //  console.log(isHome, "this is real experiment");

    return (
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
                
                >The Maugny's Club</NavLink>
              </div>
      </div>
      
      </div>
      
    );
  }
} 

const NavbarWithRouter = withRouter(Navbar);

export default NavbarWithRouter;
