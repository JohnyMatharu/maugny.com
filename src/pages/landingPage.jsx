//NEXT STEP -  make divs for last sections, color backround rainbow and text colors, icons
import './landingPage.scss';
import App from '../App'
import React, { Component, useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import $ from 'jquery';
import pic1 from '../pictures/1.jpeg';
import pic2 from '../pictures/2.jpeg';
import pic3 from '../pictures/3.jpeg';
import pic4 from '../pictures/4.jpeg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import scrollDivExtension1 from './scrollDivExtension1';
import scrollDivExtension2 from './scrollDivExtension2';



/*

Inventory: (later try get separate page for this, and even later this will be linked with central
  database which will be shared with PDP page and then checkout)

Section 1. Jewelery


1.1 Signet rings
1.2 Y2K rings
1.3 Butterfly rings
1.4 initial rings
1.5 Plastic bead rings 
1.6 Butterfly rings 
1.7 Sparkly Hoops and statement rings, snake earings


2.1 Crawler Earings 
2.2 Climber earrings
2.3 Butterfly earrings
2.4 Hearts Earrings 
2.5 Cuffing Season
2.6 Supersized Hoop Earrings
2.7 Butterfly Necklace/Pendants, Hot Collars Chokers, Chain necklaces, snake necklaces


3.1 “Charms bracelet”. 
3.2 Gold charm bracelet” 
3.3 Silver charm bracelet”  months.
3.4 Y2K Bracelets and Necklace
3.5 Beads Bracelets
3.6 Butterfly Bracelets
3.7 Mettalic Bengles/ Bone or Bark Cuffs/ Big Bangles, Chain Bracelets, snake bracelets

 



*/








class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
 
    // Change code below this line
    return true;
    // Change code above this line

  }
  componentDidUpdate() {
    console.log ('updated yes');
  }

  render() {
let newValue = this.props.value
console.log (newValue);



 const multipleRender = [
 
<div id= "divSpaceScroll">
    <div id="heightDiv"> 
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic1" src={pic1}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic2" src={pic2}></img></a></div>
   <div id="heightDiv"> 
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic3" src={pic3}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic1" src={pic1}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic2" src={pic2}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic3" src={pic3}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic1" src={pic1}></img></a></div>
    </div>,

<div><h1>render2</h1></div>,
<div><h1>render3</h1></div>,
<div><h1>render4</h1></div>,
<div><h1>render5</h1></div>,
<div><h1>render6</h1></div>,
<div><h1>render7</h1></div>
];



  
if (newValue < 0)
{
  const newValue = 0; 
  return multipleRender [newValue]; 
}

else if (newValue > 6)  {
  const newValue = 6; 
  return multipleRender [newValue]; 
}

else {
  return multipleRender [newValue]; 
}

}

}


class OnlyEvens1 extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
 
    // Change code below this line
    return true;
    // Change code above this line

  }
  componentDidUpdate() {
    console.log ('updated yes');
  }

  render() {
let newValue1 = this.props.value1
console.log (newValue1);



 const multipleRender = [
 
<div id= "divSpaceScroll">
    <div id="heightDiv"> 
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic1" src={pic1}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic2" src={pic2}></img></a></div>
   <div id="heightDiv"> 
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic3" src={pic3}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic1" src={pic1}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic2" src={pic2}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic3" src={pic3}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic1" src={pic1}></img></a></div>
    </div>,

<div><h1>render2</h1></div>,
<div><h1>render3</h1></div>,
<div><h1>render4</h1></div>,
<div><h1>render5</h1></div>,
<div><h1>render6</h1></div>,
<div><h1>render7</h1></div>
];



  
if (newValue1 < 0)
{
  const newValue1 = 0; 
  return multipleRender [newValue1]; 
}

else if (newValue1 > 6)  {
  const newValue1 = 6; 
  return multipleRender [newValue1]; 
}

else {
  return multipleRender [newValue1]; 
}

}

}






class OnlyEvens2 extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
 
    // Change code below this line
    return true;
    // Change code above this line

  }
  componentDidUpdate() {
    console.log ('updated yes');
  }

  render() {
let newValue2 = this.props.value2
console.log (newValue2);



 const multipleRender = [
 
<div id= "divSpaceScroll">
    <div id="heightDiv"> 
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic1" src={pic1}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic2" src={pic2}></img></a></div>
   <div id="heightDiv"> 
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic3" src={pic3}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic1" src={pic1}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic2" src={pic2}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic3" src={pic3}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic1" src={pic1}></img></a></div>
    </div>,

<div><h1>render2</h1></div>,
<div><h1>render3</h1></div>,
<div><h1>render4</h1></div>,
<div><h1>render5</h1></div>,
<div><h1>render6</h1></div>,
<div><h1>render7</h1></div>
];



  
if (newValue2 < 0)
{
  const newValue2 = 0; 
  return multipleRender [newValue2]; 
}

else if (newValue2 > 6)  {
  const newValue2 = 6; 
  return multipleRender [newValue2]; 
}

else {
  return multipleRender [newValue2]; 
}

}

}



class OnlyEvens3 extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
 
    // Change code below this line
    return true;
    // Change code above this line

  }
  componentDidUpdate() {
    console.log ('updated yes');
  }

  render() {
let newValue3 = this.props.value3
console.log (newValue3);



 const multipleRender = [
 
<div id= "divSpaceScroll">
    <div id="heightDiv"> 
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic1" src={pic1}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic2" src={pic2}></img></a></div>
   <div id="heightDiv"> 
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic3" src={pic3}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic1" src={pic1}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic2" src={pic2}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic3" src={pic3}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic1" src={pic1}></img></a></div>
    </div>,

<div><h1>render2</h1></div>,
<div><h1>render3</h1></div>,
<div><h1>render4</h1></div>,
<div><h1>render5</h1></div>,
<div><h1>render6</h1></div>,
<div><h1>render7</h1></div>
];



  
if (newValue3 < 0)
{
  const newValue3 = 0; 
  return multipleRender [newValue3]; 
}

else if (newValue3 > 6)  {
  const newValue3 = 6; 
  return multipleRender [newValue3]; 
}

else {
  return multipleRender [newValue3]; 
}

}

}


class OnlyEvens4 extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
 
    // Change code below this line
    return true;
    // Change code above this line

  }
  componentDidUpdate() {
    console.log ('updated yes');
  }

  render() {
let newValue4 = this.props.value4
console.log (newValue4);



 const multipleRender = [
 
<div id= "divSpaceScroll">
    <div id="heightDiv"> 
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic1" src={pic1}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic2" src={pic2}></img></a></div>
   <div id="heightDiv"> 
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic3" src={pic3}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic1" src={pic1}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic2" src={pic2}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic3" src={pic3}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic1" src={pic1}></img></a></div>
    </div>,

<div><h1>render2</h1></div>,
<div><h1>render3</h1></div>,
<div><h1>render4</h1></div>,
<div><h1>render5</h1></div>,
<div><h1>render6</h1></div>,
<div><h1>render7</h1></div>
];



  
if (newValue4 < 0)
{
  const newValue4 = 0; 
  return multipleRender [newValue4]; 
}

else if (newValue4 > 6)  {
  const newValue4 = 6; 
  return multipleRender [newValue4]; 
}

else {
  return multipleRender [newValue4]; 
}

}

}



class OnlyEvens5 extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
 
    // Change code below this line
    return true;
    // Change code above this line

  }
  componentDidUpdate() {
    console.log ('updated yes');
  }

  render() {
let newValue5 = this.props.value5
console.log (newValue5);



 const multipleRender = [
 
<div id= "divSpaceScroll">
    <div id="heightDiv"> 
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic1" src={pic1}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic2" src={pic2}></img></a></div>
   <div id="heightDiv"> 
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic3" src={pic3}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic1" src={pic1}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic2" src={pic2}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic3" src={pic3}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic1" src={pic1}></img></a></div>
    </div>,

<div><h1>render2</h1></div>,
<div><h1>render3</h1></div>,
<div><h1>render4</h1></div>,
<div><h1>render5</h1></div>,
<div><h1>render6</h1></div>,
<div><h1>render7</h1></div>
];



  
if (newValue5 < 0)
{
  const newValue5 = 0; 
  return multipleRender [newValue5]; 
}

else if (newValue5 > 6)  {
  const newValue5 = 6; 
  return multipleRender [newValue5]; 
}

else {
  return multipleRender [newValue5]; 
}

}

}

















class OnlyEvens6 extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
 
    // Change code below this line
    return true;
    // Change code above this line

  }
  componentDidUpdate() {
    console.log ('updated yes');
  }

  render() {
let newValue6 = this.props.value6
console.log (newValue6);



 const multipleRender = [
 
<div id = "offer1">
<h3 id ="textStyle" style={{fontFamily: 'Outfit', textAlign: 'center', color: 'white'}}><a>Membership</a></h3>
    </div>,
<div id = "offer2">
<h3 id ="textStyle" style={{fontFamily: 'Outfit', textAlign: 'center', color: 'white'}}><a>Samples</a></h3>
    </div>,
<div><h1>render3</h1></div>,
<div><h1>render4</h1></div>,
<div><h1>render5</h1></div>,
<div><h1>render6</h1></div>,
<div><h1>render7</h1></div>


//  
  
  

// {/* example */}

// {/* <button id= "button3"><div id = "division"> <h3 id ="textStyle" style={{fontFamily: 'Outfit', textAlign: 'center'}}><a>Passes</a></h3></div></button> */}

// {/* <button id= "button4"><div id = "division"> <h3 id ="textStyle" style={{fontFamily: 'Outfit', textAlign: 'center', color: 'white'}}><a>Newsletter</a></h3></div></button> */}
   
  
// {/* <button id= "button5"><div id = "division"> <h3 id ="textStyle" style={{fontFamily: 'Outfit', textAlign: 'center', color: 'white'}}><a>Prebook</a></h3></div></button> */}

   
// {/* <button id= "button6"><div id = "division"> <h3 id ="textStyle" style={{fontFamily: 'Outfit', textAlign: 'center', color: 'white'}}><a>Share</a></h3></div></button> */}

// {/* <button id= "button7"><div id = "division"> <h3 id ="textStyle" style={{fontFamily: 'Outfit', textAlign: 'center'}}><a>Customize</a></h3></div></button> */}





];



  
if (newValue6 < 0)
{
  const newValue6 = 0; 
  return multipleRender [newValue6]; 
}

else if (newValue6 > 7)  {
  const newValue6 = 7; 
  return multipleRender [newValue6]; 
}

else {
  return multipleRender [newValue6]; 
}

}

}









class LandingPage extends React.Component
{ 
  
  constructor(props) {
    super(props);
    //this.state = {showWarning: true};
   // this.handleToggleClick = this.handleToggleClick.bind(this);
   // this.handleToggleClick2 = this.handleToggleClick2.bind(this);
 
   this.state = {
    value: 0,
    value1: 0,
    value2: 0, 
    value3: 0,
    value4: 0,
    value5: 0,
    value6: 0   
  };
  this.addValue1 = this.addValue1.bind(this);
  this.addValue2 = this.addValue2.bind(this);
  this.addValue3 = this.addValue3.bind(this);
  this.addValue4 = this.addValue4.bind(this);
  this.addValue5 = this.addValue5.bind(this);
  this.addValue6 = this.addValue6.bind(this);
  this.addValue7 = this.addValue7.bind(this);
  this.addValue8 = this.addValue8.bind(this);
  this.addValue9 = this.addValue9.bind(this);
  this.addValue10 = this.addValue10.bind(this);
  this.addValue11 = this.addValue11.bind(this);
  this.addValue12 = this.addValue12.bind(this);
  this.addValue13 = this.addValue13.bind(this);
  this.addValue14 = this.addValue14.bind(this);
}
addValue1() {
  this.setState(state => ({
//    value: state.value + 1
value: (Math.min(6, state.value + 1))
  }));
}
addValue2() {
  this.setState(state => ({
    value: (Math.max(0, state.value - 1)) 
    
  }));
} 

//the following is for second section
addValue3() {
  this.setState(state => ({
//    value: state.value + 1
value1: (Math.min(6, state.value1 + 1))
  }));
}
addValue4() {
  this.setState(state => ({
    value1: (Math.max(0, state.value1 - 1)) 
    
  }));
} 


//the following is for final section
addValue5() {
  this.setState(state => ({
//    value: state.value + 1
value2: (Math.min(6, state.value2 + 1))
  }));
}
addValue6() {
  this.setState(state => ({
    value2: (Math.max(0, state.value2 - 1)) 
    
  }));
} 


//the following is for final section
addValue7() {
  this.setState(state => ({
//    value: state.value + 1
value3: (Math.min(6, state.value3 + 1))
  }));
}
addValue8() {
  this.setState(state => ({
    value3: (Math.max(0, state.value3 - 1)) 
    
  }));
} 




//the following is for final section
addValue9() {
  this.setState(state => ({
//    value: state.value + 1
value4: (Math.min(6, state.value4 + 1))
  }));
}
addValue10() {
  this.setState(state => ({
    value4: (Math.max(0, state.value4 - 1)) 
    
  }));
} 


//the following is for final section
addValue11() {
  this.setState(state => ({
//    value: state.value + 1
value5: (Math.min(6, state.value5 + 1))
  }));
}
addValue12() {
  this.setState(state => ({
    value5: (Math.max(0, state.value5 - 1)) 
    
  }));
} 



//the following is for final section
addValue13() {
  this.setState(state => ({
//    value: state.value + 1
value6: (Math.min(6, state.value6 + 1))
  }));
}
addValue14() {
  this.setState(state => ({
    value6: (Math.max(0, state.value6 - 1)) 
    
  }));
} 















  render() {
   
    return (
        <section>
      {/* <MDBContainer id="size"> */}
         
   {/* <div id="height1"><h3 style={{fontWeight: "bold", fontSize: '21px', fontFamily: 'Outfit', color: '0#002366' }}>This is Landing Page</h3> */}
    
          {/* </div> */}

        

          <section id = "club">
  <div id = "displayGallery" className = "hide">
    
    <div id = "flex">
  
    {/*  flex box start */}
  
      <div id = "flex1">
        


  <h3>Bikers - Spring</h3>

  </div>
  
  <div id = "flex2">
  <h3>Athletic wear - Spring</h3>
  </div>
  
 {/* flex box end */}
  
  
    </div>
  {/* add all the divs here */}
    
    <div id = "flex">
  
      {/* flex box start  */}
      
          <div id = "flex3">
            {/* <br></br> */}
         
          {/* <iframe src="https://giphy.com/embed/3oEduTFaW1r47UWhTq" width="172" height="172" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/nba-dunk-nba-finals-cleveland-cavaliers-3oEduTFaW1r47UWhTq">via GIPHY</a></p> */}
         <h3>Gym wear - Summer</h3>
      </div>
      
      <div id = "flex4">
      <h3>Yoga/Aerobics - Summer </h3>
      </div>
      
      {/* flex box end  */}
      
        </div>
        {/* add all the divs here  */}
        <div id = "flex">
  
          {/* flex box start */}
          
              <div id = "flex5">
              <h3>  Swimwear - September to early October and ends in February </h3>
          </div>
          
          <div id = "flex6">
         
          <h3> Basketball - Oct to April </h3>
          </div>
          
         {/* flex box end  */}
          
            </div>
           {/* add all the divs here */}
            <div id = "flex">
  
              {/* flex box start */}
              
                  <div id = "flex7">
                          
                  <h3>    Soccer - End of Feb till December </h3>
              </div>
              
              <div id = "flex8">
            
              <h3> Baseball - April to October </h3>
              </div>
              
             {/* flex box end */}
              
                </div>
                {/* add all the divs here  */}
                <div id = "flex">
  
                {/* flex box start  */}
                  
                      <div id = "flex9">
                      
                      <h3>    Cricket - April to Sept </h3>
                  </div>
                  
                  <div id = "flex10">
                 
                  <h3>Field Hockey - Late summer/early fall till late fall </h3>
                  </div>
                  
                  {/* flex box end  */}
                  
                    </div>
                     {/* add all the divs here  */}
                    <div id = "flex">
  
                      {/* flex box start  */}
                      
                          <div id = "flex11">
                          <h3>    Ice Hockey - Sept to April </h3>
                      </div>
                      
                      <div id = "flex12">
                      <h3> Tennis - Sept to May </h3>
                      </div>
                      
                       {/* flex box end  */}
                      
                        </div>
                    {/* add all the divs here  */}
  
    
  
  
  </div>
  </section>
{/* NEXT start Landing page -Good Luck! */}

{/* this is start of next page */}
  <section>
    {/* Following can be adjused for bold as needed */}
    <br></br>
    <br></br>
   
    <br></br>

{/* this is beginning of child div in this parent section */}
  <div id="height2">


{/* NEXT: All this has to be fixed by commenting the scroll dive and writing things, exact names and percentages, then uncomment scroll div and start */}

{/* this heading div */}
<div id = "whiteSpace">

 
    
<h3 id ="textHeadingStyle" style={{fontWeight: "bold", fontFamily: 'Outfit'}}>Best Seller Jewellery</h3></div>




{/* this is scroll div which is be another flex for pic divs */}
<div id= "scrollDiv">


{/* left empty div */}
<div id ="whiteSpaceScroll">
  </div>

{/* middle div with scroll bar*/}
<div id= "divSpaceScroll">

   


<button  onClick={this.addValue2} class="scroll-btn scroll-to-left btn btn-arrow-left" type="button"><i class="fas fa-chevron-left"></i></button>
<button onClick={this.addValue1} class="scroll-btn scroll-to-right btn btn-arrow-right" type="button"><i class="fas fa-chevron-right"></i></button>
<OnlyEvens value={this.state.value}/>

    </div>
      
    {/* right empty div */}
    <div id ="whiteSpaceScroll">
      </div>




{/* this is end of scrollDiv */}
</div>






{/* this is white space */}
<div  id="whiteSpace"></div>
{/* this is second scrollable display div */}

<div id= "scrollDiv">


{/* left empty div */}
<div id ="whiteSpaceScroll">
  </div>

{/* middle div with scroll bar*/}
<div id= "divSpaceScroll">

   


<button  onClick={this.addValue4} class="scroll-btn scroll-to-left btn btn-arrow-left" type="button"><i class="fas fa-chevron-left"></i></button>
<button onClick={this.addValue3} class="scroll-btn scroll-to-right btn btn-arrow-right" type="button"><i class="fas fa-chevron-right"></i></button>
<OnlyEvens1 value1={this.state.value1}/>

    </div>
      
    {/* right empty div */}
    <div id ="whiteSpaceScroll">
      </div>




{/* this is end of scrollDiv */}
</div>


{/* this is white space */}
<div  id="whiteSpace"></div>
{/* this is third scrollable display div */}




{/* this is scroll div which is be another flex for pic divs */}

<div id= "scrollDiv">


{/* left empty div */}
<div id ="whiteSpaceScroll">
  </div>

{/* middle div with scroll bar*/}
<div id= "divSpaceScroll">

   


<button  onClick={this.addValue6} class="scroll-btn scroll-to-left btn btn-arrow-left" type="button"><i class="fas fa-chevron-left"></i></button>
<button onClick={this.addValue5} class="scroll-btn scroll-to-right btn btn-arrow-right" type="button"><i class="fas fa-chevron-right"></i></button>
<OnlyEvens2 value2={this.state.value2}/>

    </div>
      
    {/* right empty div */}
    <div id ="whiteSpaceScroll">
      </div>




{/* this is end of scrollDiv */}
</div>





{/* this is white space */}
<div  id="whiteSpace"></div>

{/* this is end of child div in parent section */}
</div>

  </section>

{/* this is next section */}
<section>

  
    {/* Following can be adjused for bold as needed */}
    <br></br>
    <br></br>
   
    <br></br>

{/* this is beginning of child div in this parent section */}
  <div id="height2">


{/* NEXT: All this has to be fixed by commenting the scroll dive and writing things, exact names and percentages, then uncomment scroll div and start */}

{/* this heading div */}
<div id = "whiteSpace">

 
    
<h3 id ="textHeadingStyle" style={{fontWeight: "bold", fontFamily: 'Outfit'}}>Hottest Gear</h3></div>


{/* this is scroll div which is be another flex for pic divs */}
<div id= "scrollDiv">


{/* left empty div */}
<div id ="whiteSpaceScroll">
  </div>

{/* middle div with scroll bar*/}
<div id= "divSpaceScroll">

   


<button  onClick={this.addValue8} class="scroll-btn scroll-to-left btn btn-arrow-left" type="button"><i class="fas fa-chevron-left"></i></button>
<button onClick={this.addValue7} class="scroll-btn scroll-to-right btn btn-arrow-right" type="button"><i class="fas fa-chevron-right"></i></button>
<OnlyEvens3 value3={this.state.value3}/>

    </div>
      
    {/* right empty div */}
    <div id ="whiteSpaceScroll">
      </div>




{/* this is end of scrollDiv */}
</div>






{/* this is white space */}
<div  id="whiteSpace"></div>
{/* this is second scrollable display div */}

<div id= "scrollDiv">


{/* left empty div */}
<div id ="whiteSpaceScroll">
  </div>

{/* middle div with scroll bar*/}
<div id= "divSpaceScroll">

   


<button  onClick={this.addValue10} class="scroll-btn scroll-to-left btn btn-arrow-left" type="button"><i class="fas fa-chevron-left"></i></button>
<button onClick={this.addValue9} class="scroll-btn scroll-to-right btn btn-arrow-right" type="button"><i class="fas fa-chevron-right"></i></button>
<OnlyEvens4 value4={this.state.value4}/>

    </div>
      
    {/* right empty div */}
    <div id ="whiteSpaceScroll">
      </div>




{/* this is end of scrollDiv */}
</div>


{/* this is white space */}
<div  id="whiteSpace"></div>
{/* this is third scrollable display div */}




{/* this is scroll div which is be another flex for pic divs */}

<div id= "scrollDiv">


{/* left empty div */}
<div id ="whiteSpaceScroll">
  </div>

{/* middle div with scroll bar*/}
<div id= "divSpaceScroll">

   


<button  onClick={this.addValue12} class="scroll-btn scroll-to-left btn btn-arrow-left" type="button"><i class="fas fa-chevron-left"></i></button>
<button onClick={this.addValue11} class="scroll-btn scroll-to-right btn btn-arrow-right" type="button"><i class="fas fa-chevron-right"></i></button>
<OnlyEvens5 value5={this.state.value5}/>

    </div>
      
    {/* right empty div */}
    <div id ="whiteSpaceScroll">
      </div>




{/* this is end of scrollDiv */}
</div>





{/* this is white space */}
<div  id="whiteSpace"></div>

{/* this is end of child div in parent section */}
</div>



   
  </section>


  {/* this is next section */}
<section>

 {/* Following can be adjused for bold as needed */}
 <br></br>
    <br></br>
   
    <br></br>

{/* this is beginning of child div in this parent section */}
  <div id="height2">


{/* NEXT: All this has to be fixed by commenting the scroll dive and writing things, exact names and percentages, then uncomment scroll div and start */}

{/* this heading div */}
<div id = "whiteSpace2">

 
<br></br>

   
   
<h3 id ="textHeadingStyle" style={{fontWeight: "bold", fontFamily: 'Outfit'}}>Today's Special Deal</h3></div>



{/* this is scroll div which is be another flex for pic divs */}
<div id= "scrollDiv2">

{/* left empty div */}
<div id ="whiteSpaceScroll">
  </div>

{/* middle div with scroll bar*/}
<div id= "divSpaceScroll2">


<div id= "squareDiv"></div>
  
<div id= "squareDiv"></div>

   
<div id= "squareDiv"></div>





  </div>
         
      
    {/* right empty div */}
    <div id ="whiteSpaceScroll">
      </div>

{/* this is end of scrollDiv */}
</div>






{/* this is white space */}
<div  id="whiteSpace2"></div>
{/* this is second scrollable display div */}

{/* this is scroll div which is be another flex for pic divs */}
<div id= "scrollDiv2">

{/* left empty div */}
<div id ="whiteSpaceScroll">
  </div>

{/* middle div with scroll bar*/}
<div id= "divSpaceScroll2">


<div id= "squareDiv"></div>
<br></br>
    <br></br>
   
    <br></br>
<div id= "squareDiv"></div>
<br></br>
    <br></br>
   
    <br></br>
<div id= "squareDiv"></div>


   </div>
      
    {/* right empty div */}
    <div id ="whiteSpaceScroll">
      </div>

{/* this is end of scrollDiv */}
</div>

{/* this is white space */}
<div  id="whiteSpace2"></div>
{/* this is third scrollable display div */}




{/* this is scroll div which is be another flex for pic divs */}

<div id= "scrollDiv2">

{/* left empty div */}
<div id ="whiteSpaceScroll">
  </div>

{/* middle div with scroll bar*/}
<div id= "divSpaceScroll2">


<div id= "squareDiv"></div>
<br></br>
    <br></br>
   
    <br></br>
<div id= "squareDiv"></div>
<br></br>
    <br></br>
   
    <br></br>
<div id= "squareDiv"></div>

    </div>
      
    {/* right empty div */}
    <div id ="whiteSpaceScroll">
      </div>

{/* this is end of scrollDiv */}
</div>




{/* this is white space */}
<div  id="whiteSpace2"></div>

{/* this is end of child div in parent section */}
</div>


  </section>

{/* this is next section */}
<section>
{/* Following can be adjused for bold as needed */}
<br></br>
    <br></br>
   
    <br></br>

{/* this is beginning of child div in this parent section */}
  <div id="height2">


{/* NEXT: All this has to be fixed by commenting the scroll dive and writing things, exact names and percentages, then uncomment scroll div and start */}

{/* this heading div */}
<div id = "whiteSpace3">


    
<h3 id ="textHeadingStyle" style={{fontWeight: "bold", fontFamily: 'Outfit'}}>Just Arrived</h3></div>



{/* this is scroll div which is be another flex for pic divs */}
<div id= "scrollDiv3">

{/* left empty div */}
<div id ="whiteSpaceScroll">
  </div>

{/* middle div with scroll bar*/}
<div id= "divSpaceScroll2">


<div id= "squareDiv2"></div>

   
  
<div id= "squareDiv2"></div>

   
   
<div id= "squareDiv2"></div>





  </div>
         
      
    {/* right empty div */}
    <div id ="whiteSpaceScroll">
      </div>

{/* this is end of scrollDiv */}
</div>






{/* this is white space */}
<div  id="whiteSpace3"></div>
{/* this is second scrollable display div */}

{/* this is scroll div which is be another flex for pic divs */}
<div id= "scrollDiv3">

{/* left empty div */}
<div id ="whiteSpaceScroll">
  </div>

{/* middle div with scroll bar*/}
<div id= "divSpaceScroll2">

<div id= "squareDiv2"></div>

   
  
<div id= "squareDiv2"></div>

   
   
<div id= "squareDiv2"></div>
   </div>
      
    {/* right empty div */}
    <div id ="whiteSpaceScroll">
      </div>

{/* this is end of scrollDiv */}
</div>

{/* this is white space */}
<div  id="whiteSpace3"></div>
{/* this is third scrollable display div */}



{/* this is end of child div in parent section */}
</div>

  </section>





{/* this is next section */}
<section>
{/* Following can be adjused for bold as needed */}
<br></br>
    <br></br>
   
    <br></br>

{/* this is beginning of child div in this parent section */}
<div id="height2">


{/* NEXT: All this has to be fixed by commenting the scroll dive and writing things, exact names and percentages, then uncomment scroll div and start */}

{/* this heading div */}
<div id = "whiteSpace3">


    
<h1 id ="textHeadingStyle" style={{fontWeight: "bold", fontFamily: 'Outfit'}}>The Maugny's Club</h1></div>




{/* this is scroll div which is be another flex for pic divs */}
<div id= "scrollDiv3">

{/* left empty div */}
<div id ="whiteSpaceScroll">
  </div>

{/* middle div with scroll bar*/}
<div id= "divSpaceScroll3">




<div id = "offerDiv2">

<div id = "division" ></div>
  <div id = "division"></div>
  <div id = "division"></div>

  <button onClick={this.addValue14} class="btn btn-arrow-left" type="button"><i 
  class="fas fa-chevron-left"></i></button>
  


<div id = "division"></div>
<div id = "division"></div>
<div id = "division"></div>

</div>

<div id="offerDiv1"></div>



<div id= "offerDiv3">
  

  
<OnlyEvens6 value6={this.state.value6}/>
 
  

</div>


<div id="offerDiv5"></div>

<div id="offerDiv4">
<div id = "division" ></div>
  <div id = "division"></div>
  <div id = "division"></div>
<button onClick={this.addValue13} class="btn btn-arrow-right" type="button"><i class="fas fa-chevron-right"></i></button>
<div id = "division" ></div>
  <div id = "division"></div>
  <div id = "division"></div>
</div>



{/* end of "divSpaceScroll3" div */}
  </div>
         
      
    {/* right empty div */}
    <div id ="whiteSpaceScroll">
      </div>

{/* this is end of scrollDiv */}
</div>






{/* this is white space */}
<div  id="whiteSpace3"></div>
{/* this is second scrollable display div */}

{/* this is scroll div which is be another flex for pic divs */}
<div id= "scrollDiv3">

{/* left empty div */}
<div id ="whiteSpaceScroll">
  </div>

{/* middle div with scroll bar*/}
<div id= "divSpaceScroll2">

<div id= "squareDiv3"></div>
  
<div id= "squareDiv4">

  <div id = "division" ></div>
  <div id = "division"></div>
  <div id = "division"></div>

<div id = "division">  <h3 id ="textStyle" style={{fontFamily: 'Outfit', textAlign: 'center'}}>Not a member yet<br></br>Click<a id ="blue"> here</a></h3></div>

<div id = "division"></div>
<div id = "division"></div>
<div id = "division"></div>

{/* end of squareDiv4 */}
</div>
   

   </div>
      
    {/* right empty div */}
    <div id ="whiteSpaceScroll">
      </div>

{/* this is end of scrollDiv */}
</div>

{/* this is white space */}
<div  id="whiteSpace3"></div>
{/* this is third scrollable display div */}



{/* this is end of child div in parent section */}
</div>
   
  </section>









    {/* </MDBContainer >   */}
    </section> 
    
    )
};


};
export default LandingPage