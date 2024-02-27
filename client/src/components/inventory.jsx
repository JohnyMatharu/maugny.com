import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_INVENTORY } from '../utils/queries'
import { useParams } from "react-router-dom";

//this may need revision, this is complete algorithm, setup mongodb first, create inventory seed 
//and test, create the folders and backend to test graphql, test all queries and resolvers,
//there will be way to create a link from this component to product when clicked on image and 
//it goes to product component where the product query will be called based on click as
//once clicked the info will go to local storage and then once on that product page
//the getlocalstorage will be used to use that id/title to call Product query from backend
//that product page will have add to cart button which will do addCart mutation and results
//of such mutation could be seen on cart page when went there will call cart query
//you may have to setup login and out first to reach to cart 


export default function Inventory () {

//   const [savedInventoryIds, setSavedInventoryIds] = useState(getSavedInventoryIds());
//   const [Cart] = useMutation(CART); 
const { id: _id } = useParams();
    
    const {data} = useQuery(QUERY_INVENTORY,{
        variables: { id: _id },
        pollInterval: 10000 // query every 10 seconds
      });
    
      console.log(data)
      return (
        <>
         
            <div>
            
              
             {data}

{/* our goal is to pass each id local storage once the pic is clicked, use useEffect will 
store that id in local storage and hypelink will link to product page where same id will be passed
to both mutation addCart and product query, you have to change the format test each one by one 
 */}
{/* save the following when clicked */}
{data._id}             
            </div>
        </>
      );
    };
