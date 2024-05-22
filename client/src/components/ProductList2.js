//This is atually updating product list according to category chosen. useStoreContext stored in
//state which brings currentCategory, when category is changed by clicking on category, it 
//only displays those products under filterProduct function. The data from query products is 
//used to update the product list products using useEffect with UPDATE_PRODUCTS as
//actions, to get most updated list 



import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import './style.scss'
// import spinner from '../../assets/spinner.gif';

/*
<div id= "divSpaceScroll">
    <div id="heightDiv"> 
  <a href='/products/1'><img id ="picSp" src={'https://i.ebayimg.com/images/g/Sl4AAOSwustkGCJX/s-l1200.jpg'}>
   </img></a></div>
    <div id="heightDiv">
    <a href='/products/2'><img id ="picSp" src={'https://i.ebayimg.com/images/g/9U8AAOSwjVVV0v09/s-l1600.jpg'}>
    </img></a></div>
   
   
   
    <div id="heightDiv"> 
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic3" src={pic3}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic1" src={pic1}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic2" src={pic2}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic3" src={pic3}></img></a></div>
    <div id="heightDiv">
    <a href='https://mybid-live.herokuapp.com/'><img id ="pic1" src={pic1}></img></a></div>
    </div>

*/







function ProductList2() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      console.log(state.products)
      return state.products.filter( (product) =>
        // product.name === 'Custom Monogram Signet Ring'
        product.displayNumber === 3
     
        // product.category === 'Signet Rings'
       
       
        );
    }



    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

// console.log(state.products[0]._id)

  return (
    <div className="my-2">
    
      
      {state.products.length ? (
       <div id= "divSpaceScroll">
          {filterProducts().map((product) => (
                  

 <a id="heightDiv"
            key={product._id}
            _id={product._id}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            // style = {{fontSize: "15px"}}
            // onClick={() => Auth.logout()}
            >
        
              
          <Link to={`/products/${product._id}`}>  
             
      <img id ="picSp" src={product.image}>
         </img> 
      </Link>   
    
  




            </a>
         
          
      
      
      
         
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img  alt="loading" /> : null}
    </div>
  );
}

export default ProductList2;

