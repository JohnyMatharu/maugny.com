//You don't need to add a filter collection as you are already using the filter on front page
//You need same technique to show the selection of products in filter page, you will not use 
//the filter buttons on landing page, they can be used on filter page but you will have to be 
//careful about this that they dont make changes on landing page, test it. If good you can also
//use that with the filters already on the page React based, you will use the displayNumber
//method to make groups of divs fitting info, already structured, this method is better advisable



import './clubPage.scss';
import App from '../App'
import React, { Component, useState, useEffect } from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import $ from 'jquery';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { render } from '@testing-library/react';
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";



/*



Men Jewl 
Men Hats Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $10 to $30
Women Jewelry 
Women Hats Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $10 to $30


Men Jackets CK S Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Men Jackets CK M Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Men Jackets CK L  Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Men Jackets CK XL Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Men Jackets CK XXL Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Men Jackets CK XXXL Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90

Women Jackets CK S Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Women Jackets CK M Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Women Jackets CK L Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90

Men Jackets Guess S Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Men Jackets Guess M Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Men Jackets Guess L Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Men Jackets Guess XL Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Men Jackets Guess XXL Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Men Jackets Guess XXXL Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90

Women Jackets Guess S Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Women Jackets Guess M Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Women Jackets Guess L Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90

Men Jackets Tommy S Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Men Jackets Tommy M Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Men Jackets Tommy L Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Men Jackets Tommy XL Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Men Jackets Tommy XXL Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Men Jackets Tommy XXXL Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90

Women Jackets Tommy S Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Women Jackets Tommy M Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Women Jackets Tommy L Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90

Men Jackets American Eagle S Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Men Jackets American Eagle M Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Men Jackets American Eagle L Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki  $70 to $90
Men Jackets American Eagle XL Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Men Jackets American Eagle XXL Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Men Jackets American Eagle XXXL Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90

Women Jackets American Eagle S Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Women Jackets American Eagle M Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Women Jackets American Eagle L Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90

Men Jackets Gap S Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Men Jackets Gap M Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Men Jackets Gap L Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Men Jackets Gap XL Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Men Jackets Gap XXL Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Men Jackets Gap XXXL Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90

Women Jackets Old Navy S Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Women Jackets Old Navy M Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Women Jackets Old Navy L Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
 
Men Jackets Old Navy S Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Men Jackets Old Navy M Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Men Jackets Old Navy L Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Men Jackets Old Navy XL Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Men Jackets Old Navy XXL Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Men Jackets Old Navy XXXL Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
 
Women Jackets Old Navy S Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Women Jackets Old Navy M Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90
Women Jackets Old Navy L Green Yellow Orange Red Pink Purple Brown Blue #002366 Grey Khaki $70 to $90


Men Pants CK 34 by 64 Straights & Baggy Denim Patches Blue #002366 Grey Khaki $40 to $60
Men Pants CK 34 by 64 Straights & Baggy Denim Faded & Plains Blue #002366 Grey Khaki $40 to $60

Men Pants CK 34 by 64 Slims & Bootcuts Mix Patches Blue #002366 Grey Khaki $40 to $60
Men Pants CK 34 by 64 Slims & Bootcuts Mix Faded & Plains Blue #002366 Grey Khaki $40 to $60

Men Pants CK 54 by 84 Straights & Baggy Denim Patches Blue #002366 Grey Khaki $40 to $60
Men Pants CK 54 by 84 Straights & Baggy Denim Faded & Plains Blue #002366 Grey Khaki $40 to $60
 
Men Pants CK 54 by 84 Slims & Bootcuts Mix Patches Blue #002366 Grey Khaki $40 to $60
Men Pants CK 54 by 84 Slims & Bootcuts Mix Faded & Plains Blue #002366 Grey Khaki $40 to $60

Men Pants Guess 34 by 64 Straights & Baggy Denim Patches Blue #002366 Grey Khaki $40 to $60
Men Pants Guess 34 by 64 Straights & Baggy Denim Faded & Plains Blue #002366 Grey Khaki $40 to $60

Men Pants Guess 34 by 64 Slims & Bootcuts Mix Patches Blue #002366 Grey Khaki $40 to $60
Men Pants Guess 34 by 64 Slims & Bootcuts Mix Faded & Plains Blue #002366 Grey Khaki $40 to $60

Men Pants Guess 54 by 84 Straights & Baggy Denim Patches Blue #002366 Grey Khaki $40 to $60
Men Pants Guess 54 by 84 Straights & Baggy Denim Faded & Plains Blue #002366 Grey Khaki $40 to $60
 
Men Pants Guess 54 by 84 Slims & Bootcuts Mix Patches Blue #002366 Grey Khaki $40 to $60
Men Pants Guess 54 by 84 Slims & Bootcuts Mix Faded & Plains Blue #002366 Grey Khaki $40 to $60

Men Pants Tommy 34 by 64 Straights & Baggy Denim Patches Blue #002366 Grey Khaki $40 to $60
Men Pants Tommy 34 by 64 Straights & Baggy Denim Faded & Plains Blue #002366 Grey Khaki $40 to $60

Men Pants Tommy 34 by 64 Slims & Bootcuts Mix Patches Blue #002366 Grey Khaki $40 to $60
Men Pants Tommy 34 by 64 Slims & Bootcuts Mix Faded & Plains Blue #002366 Grey Khaki $40 to $60

Men Pants Tommy 54 by 84 Straights & Baggy Denim Patches Blue #002366 Grey Khaki $40 to $60
Men Pants Tommy 54 by 84 Straights & Baggy Denim Faded & Plains Blue #002366 Grey Khaki $40 to $60

Men Pants Tommy 54 by 84 Slims & Bootcuts Denim Mix Patches Blue #002366 Grey Khaki $40 to $60
Men Pants Tommy 54 by 84 Slims & Bootcuts Denim Mix Faded & Plains Blue #002366 Grey Khaki $40 to $60

Men Pants American Eagle 34 by 64 Straights & Baggy Denim Patches Blue #002366 Grey Khaki $40 to $60
Men Pants American Eagle 34 by 64 Straights & Baggy Denim Faded & Plains Blue #002366 Grey Khaki $40 to $60
 
Men Pants American Eagle 34 by 64 Slims & Bootcuts Mix Patches Blue #002366 Grey Khaki $40 to $60
Men Pants American Eagle 34 by 64 Slims & Bootcuts Mix Faded & Plains Blue #002366 Grey Khaki $40 to $60
 
Men Pants American Eagle 54 by 84 Straights & Baggy Denim Patches Blue #002366 Grey Khaki $40 to $60
Men Pants American Eagle 54 by 84 Straights & Baggy Denim Faded & Plains Blue #002366 Grey Khaki $40 to $60
 
Men Pants American Eagle 54 by 84 Slims & Bootcuts Mix Patches Blue #002366 Grey Khaki $40 to $60
Men Pants American Eagle 54 by 84 Slims & Bootcuts Mix Faded & Plains Blue #002366 Grey Khaki $40 to $60

Men Pants Gap 34 by 64 Straights & Baggy Denim Patches Blue #002366 Grey Khaki $40 to $60
Men Pants Gap 34 by 64 Straights & Baggy Denim Faded & Plains Blue #002366 Grey Khaki $40 to $60

Men Pants Gap 34 by 64 Slims & Bootcuts Mix Patches Blue #002366 Grey Khaki $40 to $60 
Men Pants Gap 34 by 64 Slims & Bootcuts Mix Faded & Plains Blue #002366 Grey Khaki $40 to $60

Men Pants Gap 54 by 84 Straights & Baggy Denim Patches Blue #002366 Grey Khaki $40 to $60
Men Pants Gap 54 by 84 Straights & Baggy Denim Faded & Plains Blue #002366 Grey Khaki $40 to $60

Men Pants Gap 54 by 84 Slims & Bootcuts Mix Patches Blue #002366 Grey Khaki $40 to $60
Men Pants Gap 54 by 84 Slims & Bootcuts Mix Faded & Plains Blue #002366 Grey Khaki $40 to $60

Men Pants Old Navy 34 by 64 Straights & Baggy Denim Patches Blue #002366 Grey Khaki $40 to $60
Men Pants Old Navy 34 by 64 Straights & Baggy Denim Faded & Plains Blue #002366 Grey Khaki $40 to $60

Men Pants Old Navy 34 by 64 Slims & Bootcuts Mix Patches Blue #002366 Grey Khaki $40 to $60
Men Pants Old Navy 34 by 64 Slims & Bootcuts Mix Faded & Plains Blue #002366 Grey Khaki $40 to $60

Men Pants Old Navy 54 by 84 Straights & Baggy Denim Patches Blue #002366 Grey Khaki $40 to $60
Men Pants Old Navy 54 by 84 Straights & Baggy Denim Faded & Plains Blue #002366 Grey Khaki $40 to $60

Men Pants Old Navy 54 by 84 Slims & Bootcuts Mix Patches Blue #002366 Grey Khaki $40 to $60
Men Pants Old Navy 54 by 84 Slims & Bootcuts Mix Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants CK 14 by 46 Straights Denim Leather & Rexene Patches Blue #002366 Grey Khaki $40 to $60
Women Pants CK 14 by 46 Straights Denim Leather & Rexene Faded & Plains Blue #002366 Grey Khaki

Women Pants CK 14 by 46 Straights Cotton & Mix Patches Blue #002366 Grey Khaki $40 to $60
Women Pants CK 14 by 46 Straights Cotton & Mix Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants CK 14 by 46 Bell-Bottom & Apple Bottoms Denim Leather & Rexene Patches Blue #002366 Grey Khaki $40 to $60
Women Pants CK 14 by 46 Bell-Bottom & Apple Bottoms Denim Leather & Rexene Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants CK 14 by 46 Bell-Bottom & Apple Bottoms Cotton & Mix Patches Blue #002366 Grey Khaki $40 to $60
Women Pants CK 14 by 46 Bell-Bottom & Apple Bottoms Cotton & Mix Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants CK 14 by 46 Slims Bootcuts Denim Leather & Rexene Patches Blue #002366 Grey Khaki $40 to $60
Women Pants CK 14 by 46 Slims Bootcuts Denim Leather & Rexene Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants CK 14 by 46 Slims Bootcuts Cotton & Mix Patches Blue #002366 Grey Khaki $40 to $60
Women Pants CK 14 by 46 Slims Bootcuts Cotton & Mix Faded & Plains Blue #002366 Grey Khaki $40 to $60


Women Pants Guess 14 by 46 Straights Denim Leather & Rexene Patches Blue #002366 Grey Khaki $40 to $60
Women Pants Guess 14 by 46 Straights Denim Leather & Rexene Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants Guess 14 by 46 Straights Cotton & Mix Patches Blue #002366 Grey Khaki $40 to $60
Women Pants Guess 14 by 46 Straights Cotton & Mix Faded & Plains Blue #002366 Grey Khaki $40 to $60


Women Pants Guess 14 by 46 Bell-Bottom & Apple Bottoms Denim Leather & Rexene Patches Blue #002366 Grey Khaki $40 to $60
Women Pants Guess 14 by 46 Bell-Bottom & Apple Bottoms Denim Leather & Rexene Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants Guess 14 by 46 Bell-Bottom & Apple Bottoms Cotton & Mix Patches Blue #002366 Grey Khaki $40 to $60
Women Pants Guess 14 by 46 Bell-Bottom & Apple Bottoms Cotton & Mix Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants Guess 14 by 46 Slims Bootcuts Denim Leather & Rexene Patches Blue #002366 Grey Khaki $40 to $60
Women Pants Guess 14 by 46 Slims Bootcuts Denim Leather & Rexene Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants Guess 14 by 46 Slims Bootcuts Cotton & Mix Patches Blue #002366 Grey Khaki $40 to $60
Women Pants Guess 14 by 46 Slims Bootcuts Cotton & Mix Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants Tommy 14 by 46 Straights Denim Leather & Rexene Patches Blue #002366 Grey Khaki $40 to $60
Women Pants Tommy 14 by 46 Straights Denim Leather & Rexene Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants Tommy 14 by 46 Straights Cotton & Mix Patches Blue #002366 Grey Khaki $40 to $60
Women Pants Tommy 14 by 46 Straights Cotton & Mix Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants Tommy 14 by 46 Bell-Bottom & Apple Bottoms Denim Leather & Rexene Patches Blue #002366 Grey Khaki $40 to $60
Women Pants Tommy 14 by 46 Bell-Bottom & Apple Bottoms Denim Leather & Rexene Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants Tommy 14 by 46 Bell-Bottom & Apple Bottoms Cotton & Mix Patches Blue #002366 Grey Khaki $40 to $60
Women Pants Tommy 14 by 46 Bell-Bottom & Apple Bottoms Cotton & Mix Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants Tommy 14 by 46 Slims Bootcuts Denim Leather & Rexene Patches Blue #002366 Grey Khaki $40 to $60
Women Pants Tommy 14 by 46 Slims Bootcuts Denim Leather & Rexene Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants Tommy 14 by 46 Slims Bootcuts Cotton & Mix Patches Blue #002366 Grey Khaki $40 to $60
Women Pants Tommy 14 by 46 Slims Bootcuts Cotton & Mix Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants American Eagle 14 by 46 Straights Denim Leather & Rexene Patches Blue #002366 Grey Khaki $40 to $60
Women Pants American Eagle 14 by 46 Straights Denim Leather & Rexene Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants American Eagle 14 by 46 Straights Cotton & Mix Patches Blue #002366 Grey Khaki $40 to $60
Women Pants American Eagle 14 by 46 Straights Cotton & Mix Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants American Eagle 14 by 46 Bell-Bottom & Apple Bottoms Denim Leather & Rexene Patches Blue #002366 Grey Khaki $40 to $60
Women Pants American Eagle 14 by 46 Bell-Bottom & Apple Bottoms Denim Leather & Rexene Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants American Eagle 14 by 46 Bell-Bottom & Apple Bottoms Cotton & Mix Patches Blue #002366 Grey Khaki $40 to $60
Women Pants American Eagle 14 by 46 Bell-Bottom & Apple Bottoms Cotton & Mix Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants American Eagle 14 by 46 Slims Bootcuts Denim Leather & Rexene Patches Blue #002366 Grey Khaki $40 to $60
Women Pants American Eagle 14 by 46 Slims Bootcuts Denim Leather & Rexene Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants American Eagle 14 by 46 Slims Bootcuts Cotton & Mix Patches Blue #002366 Grey Khaki $40 to $60
Women Pants American Eagle 14 by 46 Slims Bootcuts Cotton & Mix Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants Gap 14 by 46 Straights Denim Leather & Rexene Patches Blue #002366 Grey Khaki $40 to $60
Women Pants Gap 14 by 46 Straights Denim Leather & Rexene Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants Gap 14 by 46 Straights Cotton & Mix Patches Blue #002366 Grey Khaki $40 to $60
Women Pants Gap 14 by 46 Straights Cotton & Mix Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants Gap 14 by 46 Bell-Bottom & Apple Bottoms Denim Leather & Rexene Patches Blue #002366 Grey Khaki $40 to $60
Women Pants Gap 14 by 46 Bell-Bottom & Apple Bottoms Denim Leather & Rexene Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants Gap 14 by 46 Bell-Bottom & Apple Bottoms Cotton & Mix Patches Blue #002366 Grey Khaki $40 to $60
Women Pants Gap 14 by 46 Bell-Bottom & Apple Bottoms Cotton & Mix Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants Gap 14 by 46 Slims Bootcuts Denim Leather & Rexene Patches Blue #002366 Grey Khaki $40 to $60
Women Pants Gap 14 by 46 Slims Bootcuts Denim Leather & Rexene Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants Gap 14 by 46 Slims Bootcuts Cotton & Mix Patches Blue #002366 Grey Khaki $40 to $60
Women Pants Gap 14 by 46 Slims Bootcuts Cotton & Mix Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants Old Navy 14 by 46 Straights Denim Leather & Rexene Patches Blue #002366 Grey Khaki $40 to $60
Women Pants Old Navy 14 by 46 Straights Denim Leather & Rexene Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants Old Navy 14 by 46 Straights Cotton & Mix Patches Blue #002366 Grey Khaki $40 to $60
Women Pants Old Navy 14 by 46 Straights Cotton & Mix Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants Old Navy 14 by 46 Bell-Bottom & Apple Bottoms Denim Leather & Rexene Patches Blue #002366 Grey Khaki $40 to $60
Women Pants Old Navy 14 by 46 Bell-Bottom & Apple Bottoms Denim Leather & Rexene Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants Old Navy 14 by 46 Bell-Bottom & Apple Bottoms Cotton & Mix Patches Blue #002366 Grey Khaki $40 to $60
Women Pants Old Navy 14 by 46 Bell-Bottom & Apple Bottoms Cotton & Mix Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants Old Navy 14 by 46 Slims Bootcuts Denim Leather & Rexene Patches Blue #002366 Grey Khaki $40 to $60
Women Pants Old Navy 14 by 46 Slims Bootcuts Denim Leather & Rexene Faded & Plains Blue #002366 Grey Khaki $40 to $60

Women Pants Old Navy 14 by 46 Slims Bootcuts Cotton & Mix Patches Blue #002366 Grey Khaki $40 to $60
Women Pants Old Navy 14 by 46 Slims Bootcuts Cotton & Mix Faded & Plains Blue #002366 Grey Khaki $40 to $60


*/














function RenderAll()
{
  

return <section>






  {/* start of 2nd child section */}
    <section> 
{/* Following can be adjused for bold as needed */}


{/* this is beginning of child div in this parent section */}
  <div id="height">


{/* NEXT: All this has to be fixed by commenting the scroll dive and writing things, exact names and percentages, then uncomment scroll div and start */}

{/* this heading div, also to be converted to a filter */}
<div id = "whiteSpaceClub">


    
<h3 id ="textHeadingStyle" style={{fontWeight: "bold", fontFamily: 'Outfit'}}>RenderAll-1</h3></div>



{/* this is scroll div which is be another flex for pic divs */}
{/* this is the actual parent div which has white space divs on both sides and grey div in middle */}
<div id= "scrollDivClub">

{/* left empty div */}
<div id = "whiteSpaceScrollClub">
  </div>

{/* middle div with scroll bar, this is the middle grey div, even this is another flex or parent div for below div*/}
<div id= "divSpaceScrollClub">

{/* this is child div of above parent div */}
<div id= "squareDivClub"></div>

  </div>
         
      
    {/* right empty div */}
    <div id ="whiteSpaceScrollClub">
      </div>

{/* this is end of scrollDiv */}
</div>



{/* this is end of child div in parent section */}
</div>

  </section>   
{/* end of 2nd child section */}








 {/* start of 3rd child section */}
 <section> 
{/* Following can be adjused for bold as needed */}


{/* this is beginning of child div in this parent section */}
  <div id="height">


{/* NEXT: All this has to be fixed by commenting the scroll dive and writing things, exact names and percentages, then uncomment scroll div and start */}

{/* this heading div, also to be converted to a filter */}
<div id = "whiteSpaceClub">


    
<h3 id ="textHeadingStyle" style={{fontWeight: "bold", fontFamily: 'Outfit'}}>RenderAll-2</h3></div>



{/* this is scroll div which is be another flex for pic divs */}
{/* this is the actual parent div which has white space divs on both sides and grey div in middle */}
<div id= "scrollDivClub">

{/* left empty div */}
<div id = "whiteSpaceScrollClub">
  </div>

{/* middle div with scroll bar, this is the middle grey div, even this is another flex or parent div for below div*/}
<div id= "divSpaceScrollClub">

{/* this is child div of above parent div */}
<div id= "squareDivClub"></div>

  </div>
         
      
    {/* right empty div */}
    <div id ="whiteSpaceScrollClub">
      </div>

{/* this is end of scrollDiv */}
</div>



{/* this is end of child div in parent section */}
</div>

  </section>   
{/* end of 3rd child section */}







 {/* start of 4th child section */}
 <section> 
{/* Following can be adjused for bold as needed */}


{/* this is beginning of child div in this parent section */}
  <div id="height">


{/* NEXT: All this has to be fixed by commenting the scroll dive and writing things, exact names and percentages, then uncomment scroll div and start */}

{/* this heading div, also to be converted to a filter */}
<div id = "whiteSpaceClub">


    
<h3 id ="textHeadingStyle" style={{fontWeight: "bold", fontFamily: 'Outfit'}}>RenderAll-3</h3></div>



{/* this is scroll div which is be another flex for pic divs */}
{/* this is the actual parent div which has white space divs on both sides and grey div in middle */}
<div id= "scrollDivClub">

{/* left empty div */}
<div id = "whiteSpaceScrollClub">
  </div>

{/* middle div with scroll bar, this is the middle grey div, even this is another flex or parent div for below div*/}
<div id= "divSpaceScrollClub">

{/* this is child div of above parent div */}
<div id= "squareDivClub"></div>

  </div>
         
      
    {/* right empty div */}
    <div id ="whiteSpaceScrollClub">
      </div>

{/* this is end of scrollDiv */}
</div>



{/* this is end of child div in parent section */}
</div>

  </section>   
{/* end of 4th child section */}











</section>



}




function Render1()
{
   
  return <section>






  {/* start of 2nd child section */}
    <section> 
{/* Following can be adjused for bold as needed */}


{/* this is beginning of child div in this parent section */}
  <div id="height">


{/* NEXT: All this has to be fixed by commenting the scroll dive and writing things, exact names and percentages, then uncomment scroll div and start */}

{/* this heading div, also to be converted to a filter */}
<div id = "whiteSpaceClub">


    
<h3 id ="textStyle" style={{fontWeight: "bold", fontFamily: 'Outfit'}}>RenderFilter-1</h3></div>



{/* this is scroll div which is be another flex for pic divs */}
{/* this is the actual parent div which has white space divs on both sides and grey div in middle */}
<div id= "scrollDivClub">

{/* left empty div */}
<div id = "whiteSpaceScrollClub">
  </div>

{/* middle div with scroll bar, this is the middle grey div, even this is another flex or parent div for below div*/}
<div id= "divSpaceScrollClub">

{/* this is child div of above parent div */}
<div id= "squareDivClub"></div>

  </div>
         
      
    {/* right empty div */}
    <div id ="whiteSpaceScrollClub">
      </div>

{/* this is end of scrollDiv */}
</div>



{/* this is end of child div in parent section */}
</div>

  </section>   
{/* end of 2nd child section */}







</section>



}


function Render2 ()
{



 {/* start of 3rd child section */}
return  <section> 
{/* Following can be adjused for bold as needed */}


{/* this is beginning of child div in this parent section */}
  <div id="height">


{/* NEXT: All this has to be fixed by commenting the scroll dive and writing things, exact names and percentages, then uncomment scroll div and start */}

{/* this heading div, also to be converted to a filter */}
<div id = "whiteSpaceClub">


    
<h3 id ="textStyle" style={{fontWeight: "bold", fontFamily: 'Outfit'}}>RenderFilter-2</h3></div>



{/* this is scroll div which is be another flex for pic divs */}
{/* this is the actual parent div which has white space divs on both sides and grey div in middle */}
<div id= "scrollDivClub">

{/* left empty div */}
<div id = "whiteSpaceScrollClub">
  </div>

{/* middle div with scroll bar, this is the middle grey div, even this is another flex or parent div for below div*/}
<div id= "divSpaceScrollClub">

{/* this is child div of above parent div */}
<div id= "squareDivClub"></div>

  </div>
         
      
    {/* right empty div */}
    <div id ="whiteSpaceScrollClub">
      </div>

{/* this is end of scrollDiv */}
</div>



{/* this is end of child div in parent section */}
</div>

  </section>   
{/* end of 3rd child section */}


}


function Render3 ()
{
   {/* start of 4th child section */}
 return <section> 
 {/* Following can be adjused for bold as needed */}
 
 
 {/* this is beginning of child div in this parent section */}
   <div id="height">
 
 
 {/* NEXT: All this has to be fixed by commenting the scroll dive and writing things, exact names and percentages, then uncomment scroll div and start */}
 
 {/* this heading div, also to be converted to a filter */}
 <div id = "whiteSpaceClub">
 
 
     
 <h3 id ="textStyle" style={{fontWeight: "bold", fontFamily: 'Outfit'}}>RenderFilter-3</h3></div>
 
 
 
 {/* this is scroll div which is be another flex for pic divs */}
 {/* this is the actual parent div which has white space divs on both sides and grey div in middle */}
 <div id= "scrollDivClub">
 
 {/* left empty div */}
 <div id = "whiteSpaceScrollClub">
   </div>
 
 {/* middle div with scroll bar, this is the middle grey div, even this is another flex or parent div for below div*/}
 <div id= "divSpaceScrollClub">
 
 {/* this is child div of above parent div */}
 <div id= "squareDivClub"></div>
 
   </div>
          
       
     {/* right empty div */}
     <div id ="whiteSpaceScrollClub">
       </div>
 
 {/* this is end of scrollDiv */}
 </div>
 
 
 
 {/* this is end of child div in parent section */}
 </div>
 
   </section>   
 {/* end of 4th child section */}
 

}





function FilterTest ()
{

return <h6>mission successful</h6>


}












  
  export default function ClubPage() {
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    if (setIsChecked)
    {
    console.log("setIsChecked");
    }
    else if (isChecked){
      console.log("isChecked");
    }


    const handleOnChange = () => {
      setIsChecked(!isChecked);
    };
    const handleOnChange1 = () => {
      setIsChecked1(!isChecked1);
    };
    const handleOnChange2 = () => {
      setIsChecked2(!isChecked2);
    };



    return (
      

<section>
  {/* beginning of parent section */}

  {/* start of 1st child section */}
<section>
{/* Following can be adjused for bold as needed */}


{/* this is beginning of child div in this parent section */}
  <div id="height">





{/* this is filter div which is be another flex for pic divs */}
{/* this is the actual parent div which has white space divs on both sides and grey div in middle */}
<div id= "filterClub">

{/* left empty div */}
<div id = "whiteSpaceScrollClub">
  </div>

{/* middle div, this is the middle grey div, even this is another flex or parent div for below div*/}
<div id= "divSpaceScrollClub">

{/* this is child div of above parent div */}
{/* this is the div can be multiplied in 9 divs */}

<div id= "squareDivClub">
  <h6 id = "textStyle" style={{fontWeight: "bold"}}>Product</h6>
<h6 id ="textStyle" style={{fontSize: "15px", fontFamily: 'Outfit'}}>



{/* test code begins */}
       

{/* test code ends */}

<input
            type="checkbox"
            checked={isChecked}
            onChange={handleOnChange}
          />
  Men, 
  <input
            type="checkbox"
            checked={isChecked1}
            onChange={handleOnChange1}
          />
  
  women, 
<br></br>
<input
            type="checkbox"
            checked={isChecked2}
            onChange={handleOnChange2}
          />

Jackets,Jewelry,
<br></br> 
Pants, Hats</h6>
</div>
<div id= "squareDivClub">

  <h6 id = "textStyle" style={{fontWeight: "bold"}}>Brand</h6>
<h6 id ="textStyle" style={{fontSize: "15px", fontFamily: 'Outfit'}}>CK, Guess, Tommy
<br></br>
American Eagle
<br></br> 
Gap, Old Navy</h6>
</div>

<div id= "squareDivClub">
  <h6 id = "textStyle" style={{fontWeight: "bold"}}>Sizes</h6>
  
<h6 id ="textStyle" style={{fontSize: "15px", fontFamily: 'Outfit'}}>S, M, L, Xl
<br></br>
<br></br>
XXL,XXXL
</h6>
</div>

<div id= "squareDivClub">
  <h6 id = "textStyle" style={{fontWeight: "bold"}}>Dimensions</h6>
<h6 id ="textStyle" style={{fontSize: "15px", fontFamily: 'Outfit'}}>14 by 46
<br></br>
34 by 64
<br></br> 
54 by 84
</h6>
</div>

<div id= "squareDivClub">
  <h6 id = "textStyle" style={{fontWeight: "bold"}}>Shape</h6>
<h6 id ="textStyle" style={{fontSize: "15px", fontFamily: 'Outfit'}}>
Straights, Baggy
<br></br>
Bell-bottom
<br></br> 
Apple-bottom
<br></br> 
Slims, Bootcuts
</h6>
</div>

<div id= "squareDivClub">
  <h6 id = "textStyle" style={{fontWeight: "bold"}}>Material</h6>
<h6 id ="textStyle" style={{fontSize: "15px", fontFamily: 'Outfit'}}>Denim, Leather
<br></br>
Mix, Rexene
<br></br> 
Cotton,Polyester</h6>
</div>

<div id= "squareDivClub">



  <h6 id = "textStyle" style={{fontWeight: "bold"}}>Print/pattern</h6>
<h6 id ="textStyle" style={{fontSize: "15px", fontFamily: 'Outfit'}}>Check, Plains
<br></br>
Patches, Dots
<br></br> 
Lines, Faded</h6>
</div>

<div id= "squareDivClub">
  <h6 id = "textStyle" style={{fontWeight: "bold"}}>Color</h6>
<h6 id ="textStyle" style={{fontSize: "15px", fontFamily: 'Outfit'}}>Red,Blue
<br></br>
Green,Purple 
<br></br> 
Orange,Yellow</h6>
</div>

<div id= "squareDivClub">
  <h6 id = "textStyle" style={{fontWeight: "bold"}}>Price</h6>
<h6 id ="textStyle" style={{fontSize: "15px", fontFamily: 'Outfit'}}>10,20,30

<br></br>
40,50,60 
<br></br>
70,80,90
</h6>
</div>



{/* 

There will be  9 divs horizontal and each have 6 options either 2:2:2 veritical OR 3:3 vertical each div,
there is a div selection for each click and they all will follow an order to be displayed, display will change
as soon somithing is clicked


*/}

{/* use selections check mark etc. based on options and get front end ideas online */}
  </div>
         

    {/* right empty div */}
    <div id ="whiteSpaceScrollClub">
      </div>

{/* this is end of filter Div */}
</div>




 {/* this is scroll div which is be another flex for pic divs */}
  {/* this is the actual parent div which has white space divs on both sides and grey div in middle */}
   <div id= "scrollDivClub">
  
  {/* left empty div */}
  <div id = "whiteSpaceScrollClub">
    </div>
  
  {/* middle div with scroll bar, this is the middle grey div, even this is another flex or parent div for below div*/}
  
  
  {/* this is child div of above parent div */}
  <div id= "divSpaceScrollClub">
  
  
  {/* HERE is you will put the for loop */}
  <div id= "squareDivClub">

  </div>
   
  
  </div>
       
      {/* right empty div */}
      <div id ="whiteSpaceScrollClub">
        </div>
  
  {/* this is end of scrollDiv */}
  </div>
  



{/* this is end of child div in parent section */}
</div>

  </section>   
{/* end of 1st child section */}




{/* Following is the renderALL and filter section sectioned under section */}

<section>



{ isChecked && isChecked1 && isChecked2 ? <FilterTest/> : isChecked ? <Render1/> : isChecked1 ? <Render2/> : isChecked2 ?  <Render3/> : <RenderAll/>} 



{/* use either <filter/> button or anoher fucntion logic that will create an array of all displays of renders */}
{/* that array will append with either the code of function/render itself, taht will be assgined as  */}
{/* filter function */}







{/* some adjustments can be made by developers in the future to make double click work and to append that 2nd clicked */}
{/* div under the first div, and so on */}



{/* HERE Add the  */}




</section>

{/* This category menu is choosing the listing of product for each category and is altering 
same thing on landing page, both needs to be independant, so create 2 seperate seeds
and 2 seperate products and categories for those 2 seperate seeds */}

<CategoryMenu />
      <ProductList />








</section> 
// end of parent section 




    );
  }



  