//Here is an example of how your inventory page will look like, it will take some details from 
//useQuery using defined queries from back end and show what is needed, this has to be 
//connected to landing page in beginning, later filer, as a seperate component with CSS

import { QUERY_INVENTORY } from "../../utils/queries";



const inventoryDetail = ( ) => {

    const { id: _id } = useParams();
    
    const { loading, data, error  } = useQuery(QUERY_INVENTORY,{
        variables: { id: _id },
        pollInterval: 10000 // query every 10 seconds
      });
    
      if( loading ){
        return (
          <Loading />
        )
      }
    
      if( error ){
        return (
          <ErrorMessage />
        )
      }
    
        // check to see if logged in user is the owner
    //the following we are not using as we dont need to make sure logged in just to access inventory
        // const checkUserIsOwner = Auth.getProfile().data._id === data.inventory.ownerId
     
     
     
    
     
      return (
        <>
         
            <div>
                {/* display here what is needed */}
            </div>
        </>
      );
    };
    export default inventoryDetail;