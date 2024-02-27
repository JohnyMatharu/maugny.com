//this is for PDP page single product display calling single product query

import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { QUERY_PRODUCT } from "../utils/queries";
import { ADD_CART } from '../utils/mutations';
import { useParams } from "react-router-dom";


export default Product = () => {
    const [id, setId] = useState (JSON.parse(localStorage.getItem('_id'))||'');
//our goal is to get the id from local storage once the pic is clicked on inventory component
//useEffect there will store that id in local storage and brought here. same id will be passed
//to both mutation addCart and product query, you have to change the format test each one by one 


      const { id: _id } = useParams();
      const [addCart] = useMutation(ADD_CART({id})); 
        console.log(addCart)
        
        const handleAddCart = (_id) => {
                const { cartData } = addCart({
                variables: { id: _id }
              });
              console.log(cartData)
            }
        
        const { loading, data, error  } = useQuery(QUERY_PRODUCT({id}),{
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
        
          console.log(data)
          
          return (
            <>
             
                <div>
                    
                  
                 {data}
                    
                </div>
                
                          <button
                            onClick={() => handleAddCart(_id)}>
                          Add to cart 
                         </button>
            </>
          );
        };
    
















