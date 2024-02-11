import './termPage.scss';
//import './App.scss';
import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import $ from 'jquery';


function termPage() {
    return (
        <section>
      <MDBContainer id="size">
         
    {/* Following can be adjused for bold as needed */}
    <div id="height1"><h3 id ="textStyle" style={{fontWeight: "bold", fontFamily: 'Outfit'}}>This is Term Page</h3>
</div>
    </MDBContainer >  
    </section>    
    )
}

export default termPage()