//What is React state: its a function that has initial variable on left (initialized on the right
//in the brackets), and on right of initial variable is a functions that will update the value
//of initial value to give its next value. Everytime it will change the values it will be a unique
//state, this is why called a state. React components has a built-in state object. The state object 
//is where you store property values that belong to the component. When the state object changes, 
//the component re-renders. setState() schedules an update to a component’s state object. When 
//state changes, the component responds by re-rendering. State is a memory for that function. Snapshot
//of its different states/stages


//Add pics, some details and prices (check other landing, not from backend), back end info will
//also be there for filter page including pics and for pdp page, for all landing page material
//create links in components straight to pdp page (Product id). Later picture name funnels be created 
//on front page that will take straight to a certan filter to see the varierty (after filter ready) 
//Now: work on seed basic info, look what is at front and create more categories, for filter when back
//Now: Compile the entire front langing page, all parts, think of party wear at front options decide

//There is no need to save pics in folders. No need to create seperate filter components 
//The invetory here is very small portion from main filter page. The only diff is this may have
//diff pic than filter page. Filter page will have cumulative groups fit in flexible divs

//The picture files will be stored on the to cloud and will be accessed through URL. The cloud
//can be AWS, Google cloud, or any other like Mongo DB/Atlas, or Filezilla/database. Keep fewest 
//items as possible in front, limit is 2 slides per arrow scrolls and 6 items each add middle space pics

//You can create multiple components like this with display numbers showing different products
//you can wither use the category clicks or attach these multiple conponents by display number
//attached to the logic already created on display page, buttons have to fixed for backrounds

//You don't need to add a filter collection as you are already using the filter on front page
//You need same technique to show the selection of products in filter page, you will not use 
//the filter buttons on landing page, they can be used on filter page but you will have to be 
//careful about this that they dont make changes on landing page, test it. If good you can also
//use that with the filters already on the page React based, you will use the displayNumber
//method to make groups of divs fitting info, already structured, this method is better advisable








import './landingPage.scss';
// import Inventory from '../components/inventory';
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
import ProductList from "../components/ProductList";
import ProductList1 from "../components/ProductList1";
import ProductList2 from "../components/ProductList2";
import ProductList3 from "../components/ProductList3";
import ProductList4 from "../components/ProductList4";
import ProductList5 from "../components/ProductList5";
import ProductList6 from "../components/ProductList6";
import ProductList7 from "../components/ProductList7";
import ProductList8 from "../components/ProductList8";
import ProductList9 from "../components/ProductList9";
import ProductList10 from "../components/ProductList10";
import ProductList11 from "../components/ProductList11";
import ProductList12 from "../components/ProductList12";
import ProductList13 from "../components/ProductList13";
import ProductList14 from "../components/ProductList14";
import ProductList15 from "../components/ProductList15";
import ProductList16 from "../components/ProductList16";
import ProductList17 from "../components/ProductList17";
import ProductList18 from "../components/ProductList18";
import ProductList19 from "../components/ProductList19";
import ProductList20 from "../components/ProductList20";
import ProductList21 from "../components/ProductList21";
import ProductList22 from "../components/ProductList22";
import ProductList23 from "../components/ProductList23";
import CategoryMenu from "../components/CategoryMenu";






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
  // Add prices in bottom, in stock, and item name on top - check other designs  
  <ProductList />,
  <ProductList1 />
 
];



  
if (newValue < 0)
{
  const newValue = 0; 
  return multipleRender [newValue]; 
}

//this was 6 before for both and can be changed back to get 7 divs if needed 
else if (newValue > 1)  {
  const newValue = 1; 
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
 
  <ProductList2 />,
  <ProductList3 />

];



  
if (newValue1 < 0)
{
  const newValue1 = 0; 
  return multipleRender [newValue1]; 
}

else if (newValue1 > 1)  {
  const newValue1 = 1; 
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
 
  <ProductList4 />,
  <ProductList5 />
 
];



  
if (newValue2 < 0)
{
  const newValue2 = 0; 
  return multipleRender [newValue2]; 
}

else if (newValue2 > 1)  {
  const newValue2 = 1; 
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
 
  <ProductList6 />,
  <ProductList7 />

];



  
if (newValue3 < 0)
{
  const newValue3 = 0; 
  return multipleRender [newValue3]; 
}

else if (newValue3 > 1)  {
  const newValue3 = 1; 
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
 
  <ProductList8 />,
  <ProductList9 />

];



  
if (newValue4 < 0)
{
  const newValue4 = 0; 
  return multipleRender [newValue4]; 
}

else if (newValue4 > 1)  {
  const newValue4 = 1; 
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
 
  <ProductList10 />,
  <ProductList11 />
];



  
if (newValue5 < 0)
{
  const newValue5 = 0; 
  return multipleRender [newValue5]; 
}

else if (newValue5 > 1)  {
  const newValue5 = 1; 
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
//this was 6 before instead of 1, can change it back to get 7 divs, nothing yo do with any other
//lines after or +1 on the right 
value: (Math.min(1, state.value + 1))
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
value1: (Math.min(1, state.value1 + 1))
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
value2: (Math.min(1, state.value2 + 1))
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
value3: (Math.min(1, state.value3 + 1))
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
value4: (Math.min(1, state.value4 + 1))
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
value5: (Math.min(1, state.value5 + 1))
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

   
   
<h3 id ="textHeadingStyle" style={{fontWeight: "bold", fontFamily: 'Outfit', paddingLeft: '36px'}}>Today's Special Deal</h3></div>



{/* this is scroll div which is be another flex for pic divs */}
<div id= "scrollDiv2">

{/* This is the section that possibly needs to be brought in */}



{/* left empty div */}
<div id ="whiteSpaceScroll">
  </div>

{/* middle div with scroll bar*/}
<div id= "divSpaceScroll2">

{/* This is the section that needs to be brought in */}

<ProductList12/>



<ProductList13/>


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


{/* This is the section that needs to be brought in */}

<ProductList14/>



<ProductList15/>


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

{/* This is the section that needs to be brought in */}

<ProductList16/>



<ProductList17/>


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


    
<h3 id ="textHeadingStyle" style={{fontWeight: "bold", fontFamily: 'Outfit', paddingLeft: '36px'}}>Just Arrived</h3></div>



{/* this is scroll div which is be another flex for pic divs */}
<div id= "scrollDiv3">

{/* left empty div */}
<div id ="whiteSpaceScroll">
  </div>

{/* middle div with scroll bar*/}
<div id= "divSpaceScroll2">


<div id= "squareDiv2">
<ProductList18/>
</div>

   
  
<div id= "squareDiv2">
<ProductList19/>

</div>

   
   
<div id= "squareDiv2">

<ProductList20/>

</div>





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

<div id= "squareDiv2">
<ProductList21/>

</div>

   
  
<div id= "squareDiv2">
<ProductList22/>

</div>

   
   
<div id= "squareDiv2">
<ProductList23/>


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


    
<h1 id ="textHeadingStyle" style={{fontWeight: "bold", fontFamily: 'Outfit', paddingLeft: '36px'}}>The Maugny's Club</h1></div>




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
  {/* <CategoryMenu /> */}
    



    {/* </MDBContainer >   */}
    </section> 




    )
};


};
export default LandingPage