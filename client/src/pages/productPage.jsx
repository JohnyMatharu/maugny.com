import './productPage.scss';
import Inventory from '../components/inventory';
import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import $ from 'jquery';

// this page is not connected yet, check the diagrams to make sure

function productPage() {
    return (
        <section>
      <MDBContainer id="size">
         
    {/* Following can be adjused for bold as needed */}
    <div id="height1"><h3 id ="textStyle" style={{fontWeight: "bold", fontFamily: 'Outfit'}}>This is Product Page</h3>
</div>
    </MDBContainer >  
    </section>    
    )
}

export default productPage()