import './footer.css';

export default function Footer() {
    return (
        <div id = "footer">
       
       {/* this is div above 1st level start */}
       <div id = "firstLevel">

       <div class= "space" id = "Mail">
       <a href='mailto: jaani.matharu@gmail.com'><i class="fas fa-envelope" style={{ fontSize: '18px' }}></i></a>  
       </div>


<div class= "space" id = "Mail">
<a href='mailto: jaani.matharu@gmail.com'><i class="fas fa-envelope" style={{ fontSize: '18px' }}></i></a>  
</div>




       <div class= "space" id = "Mail">
       <a href='mailto: jaani.matharu@gmail.com'><i class="fas fa-envelope" style={{ fontSize: '18px' }}></i></a>  
       </div>



       </div>
{/* this is div above 1st level end */}

{/* this is div below second level beginning*/}
<div id = "secondLevel">
       
       <div class= "space" id = "Facebook">
      
  
     {/* <br> */}
       {/* </br> */}
       {/* <br> */}
       {/* </br> */}
       <a href='https://www.facebook.com/GoHelpPal/'>Terms of Use</a>
     



           
       </div>
       <div class= "space" id ="Linkedin">
       
       {/* <br> */}
       {/* </br> */}
       {/* <br> */}
       {/* </br> */}
       <a href='https://www.linkedin.com/in/johny-matharu-0b0973115/'>Privacy Policy</a>
     
       </div>
       <div class= "space" id ="Github">
      
       {/* <br> */}
       {/* </br> */}
       {/* <br> */}
       {/* </br> */}
       Copyright 2022
       </div>
       
       
       </div>
{/* this is end of div below second level */}

{/* this is end of main footer div */}
        </div>
    )
}


// Icons Mail and phone a bit higher and smaller and rest at bottom a bit bigger
//Make sure copyright sign and other term of use or privacy etc. if necessary
