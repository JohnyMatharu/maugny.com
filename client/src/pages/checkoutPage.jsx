//This page will incorporate cart component on left and payment on right, icon total qty display 



import './checkoutPage.scss';
import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Cart from '../components/Cart';


export default function checkoutPage(props) {
    console.log(props)
    return (
        <section>
      <MDBContainer id="size">
         
    {/* Following can be adjused for bold as needed */}
    <div id="height1"><h3 id ="textStyle" style={{fontWeight: "bold", fontFamily: 'Outfit'}}>This is checkout Page</h3>
</div>
{props.children}
    </MDBContainer >  
    <Cart/>
    </section>    
    )
}

