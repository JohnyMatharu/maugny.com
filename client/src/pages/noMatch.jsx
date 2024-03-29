import React from "react";
import Jumbotron from "../components/Jumbotron";
import './noMatch.scss';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";



function NoMatch() {
    return (
        <section>
      <MDBContainer id="size">
         
    {/* Following can be adjused for bold as needed */}
    <div id="height1">

    <div>
      <Jumbotron>
        <h1>404 Page Not Found</h1>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
        </h1>
      </Jumbotron>
    </div>

</div>
    </MDBContainer >  
    </section>    
    )
}

export default NoMatch()



