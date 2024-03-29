//Impertitive programming is changing the memory of state. Try to understand every inch of code
//leave notes, every section. It is using useStoreContext which has updated state values from global state management. What
//actually needs to be updated in actions and by how much will be covered here and will each update
//be labelled by an action. productPage - action - reducer - global state - useStoreContext - productPage
//Main goal of reducers is to update the quantity connected to the carts on every quantity click

import Nav from '../components/Nav';
import './productPage.scss';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';


import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';

// useStoreContext has been passed to state, not to be confused with the actual react hook.
// This state has been passed to products. With useEffect everytime there will be an event
// to add or remove product from cart, the setCurrentProduct will update the value of 
// currentProduct with new value for each product. The second part of else if (data) will
// using the actions UPDATE_PRODUCTS which will automatically update the quantity count on
// backend server. This useEffect will only work when there have been updates on existing cart
// ,dispatch is a function that will actually display the updated state. We got both state and
// dispatch from global state using useStoreContext which will have updated values and dispatch
// will help dipatch/ditribute this information. We have to keep in mind query products will 
// bring all products but when products has lenght then we are finding individual product based 
// on the id and using find method example: products.find((product) => product._id === id)); 

export default function ProductPage() {

    const [state, dispatch] = useStoreContext();
    const { id } = useParams();

  
    const [currentProduct, setCurrentProduct] = useState({});
   

    const { loading, data } = useQuery(QUERY_PRODUCTS);
    //this data is from backend

  
    const { products, cart } = state;
    
  
    useEffect(() => {
      
      if (products.length) {
        setCurrentProduct(products.find((product) => product._id === id));
     
      }
      // retrieved from backend data
      else if (data) {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: data.products,
        });
  
        data.products.forEach((product) => {
          idbPromise('products', 'put', product);
        });
      }
      // get cache from idb
      else if (!loading) {
        idbPromise('products', 'get').then((indexedProducts) => {
          dispatch({
            type: UPDATE_PRODUCTS,
            products: indexedProducts,
          });
        });
      }
    }, [products, data, loading, dispatch, id]);
   
//The following is to add to cart once we have items in cart only then, if we press add to cart
//it will increase that quantity by 1 and it will use the UPDATE_CART_QUANTITY action, on other
// side ADD_TO_CART is actually adding product with quantity 1 to the cart, uses currentProduct



  
    const addToCart = () => {
      const itemInCart = cart.find((cartItem) => cartItem._id === id);
      if (itemInCart) {
        dispatch({
          type: UPDATE_CART_QUANTITY,
          _id: id,
          purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
        });
        idbPromise('cart', 'put', {
          ...itemInCart,
          purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
        });
      } else {
        dispatch({
          type: ADD_TO_CART,
          product: { ...currentProduct, purchaseQuantity: 1 },
        });
        idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
      }
    };
  
//This is to remove from cart a product regardless of quantity using currentProduct _id
//uses currentProduct


    const removeFromCart = () => {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: currentProduct._id,
      });
  
      idbPromise('cart', 'delete', { ...currentProduct });
    };
  



    return (
        <section>
      <MDBContainer id="size">
         
   
    <div id="height1">
<Nav/>

    {currentProduct && cart ?



    
    (
        <div className="container my-1">
          <Link to="/">← Back to Products{currentProduct.name}</Link>

          <h2>{currentProduct.name}</h2>

          <p>{currentProduct.description}</p>

          <p>
            <strong>Price:</strong>${currentProduct.price}{' '}

{/* These buttons are calling functions explained above  */}



            <button onClick={addToCart}>Add to Cart</button>
            <button
              disabled={!cart.find((p) => p._id === currentProduct._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>
          </p>

          <img
            src={`/images/${currentProduct.image}`}
            alt={currentProduct.name}
          />
        </div>
      ) : null}
      {loading ? <img alt="loading" /> : null}



</div>
    </MDBContainer >  
    </section>    
    )
}