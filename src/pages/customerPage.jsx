import './customerPage.scss';
import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import $ from 'jquery';


function customerPage() {
    return (
        <section>
      <MDBContainer id="size">
         
    {/* Following can be adjused for bold as needed */}
    <div id="height1"><h3 id ="textStyle" style={{fontWeight: "bold", fontFamily: 'Outfit'}}>This is Customer Page</h3>
</div>
    </MDBContainer >  
    </section>    
    )
}

export default customerPage()