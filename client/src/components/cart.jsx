import React, {useEffect, useState} from 'react';
import { REMOVE_CART } from '../utils/mutations';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import Auth from '../utils/auth';
import { useParams } from "react-router-dom";
import { QUERY_CART } from '../utils/queries'



function removeCart () {
  //this part may need revision, as userData was used here in useState which is not deleted for error)
  const [setUserData] = useState({});
// use this to determine if `useEffect()` hook needs to run
//check syntax 
const{ id: _id  } = useParams();
//here, We may not need data back in a case like this

const [removeCart, {error}] = useMutation(REMOVE_CART); 


const { loading, data } = useQuery(GET_ME);

const userData = data?.me || {};
console.log(userData)

//HERE we are using the Auth for cart 



  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        if (!token) {
          return false;
        }

        //this line was modified needs checking
        const response = await userData(token);
        if (!response.ok) {
          throw new Error('something went wrong!');
        }
        const user = await response.json();
        setUserData(user)
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, []);

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleRemoveCart = async (_id) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }

//Use the useMutation() Hook to execute the REMOVE_BOOK mutation in the handleDeleteBook() function instead of the deleteBook() function that's imported from API file. (Make sure you keep the removeBookId() function in place!)
//reminder to check login and signup arguments 
    try {

      const {data} = await removeCart ({ variables
        : { id: _id }});

//this part may need revision as are calling mutation here which will return us user info, we need to render
//this info as updated info, current rederring is userData and specifically we need userData.saveBooks 


//an updated userData should be rederred by GET_ME
//check if we need to assign this data to userData here to update the userData with new data, or do we need this
//userData = data? || {};

//check following response

if (data.error) {
        throw new Error('something went wrong!');
      }
   
    } catch (err) {
      console.error(err);
    }
  };
  // if data isn't here yet, say so
  if (!userDataLength) {
    return <h2>LOADING...</h2>;
  }

//need to check rendering data through front end check and assignment sample gif

  return (              
                  
                  <button onClick={() => handleRemoveCart(_id)}>
                    Delete this item!
                  </button>
       
)
};




export default function Cart () {

  //   const [savedInventoryIds, setSavedInventoryIds] = useState(getSavedInventoryIds());
  //   const [Cart] = useMutation(CART); 
  const { id: _id } = useParams();
      
      const {data} = useQuery(QUERY_CART,{
          variables: { id: _id },
          pollInterval: 10000 // query every 10 seconds
        });
      
        console.log(data)
        return (
          <>
           
              <div>
              
                
               {data}
  {data._id}         


{/* 
The goal here is to add the delete button on this listing of cart data that will call the above
function removeCart() and pass the _id of the item in the list of cart to that function
as an argument to delete that item. Please make sure this entire section only works when loggedIn
*/}

              </div>
          </>
        );
      };