// createContext is to create this context which will be connected to StoreContext, then StoreProvider
// function which will be initializing imported reducer with null values and then actually passing
// the updated values through props and saving all in state. Then it returns provider that has 
// most updated values. Because Provider is storeContext (is a context) its accessed by useStoreContext
// which actually passess it to Detail page with updated values. Store provider is actual function
// that updates the values using imported reducer, this functionality will be passed to app.js
// to span it accross all pages to get same functionality to be used all across components. 
// React Context is a way to manage state globally. It can be used together with the useState Hook 
// to share state between deeply nested components more easily than with useState alone. This way 
// state can be updated without any props drilling. It allows you to share state between components 
// without having to pass props down through multiple levels of the component tree. For example
// cart is sharing data from many components and updates are needed on adjustments. This global 
// file is actually a center of updating using reducer and sending data to different levels.    


import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers'

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;

};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };




//UFT Class notes
//The goal of state is to pass a state to various components because useState is not designed to share the state
//unless we use the props from parent to child. Global State store (GlobalState.js) passes values to various components
//this is called Redux. Redux is an open-source JavaScript library for managing and centralizing application state.
//Action is user interaction, a button click, API call, an effect that will cascade through application. Recducer
//will return single output state object that will update the original state. Component will reload
//with the new state right after an action we discussed before was made. Action will only trigger
//the relevant part of the the reducer which matches under switch statement. The idea behind StoreProvider
//is that any component that is wrapped around it is a child to this provider, and will be provided access to this
//global state object that is context. createContext will define the global store. This will be split into 2 parts
//one which is const Store provider where that can take props and its initial state is set to be empty
//once updates it will provide updates state by returning <Provider/> as shown (this to create boudaries of access)
//Dispatch is like a function that will flow the actions to the reducer.  dispatch({type: UPDATE_PRODUCTS,
//products: data.products,}); is an example from checkOut page. We will use the useContext to access Global State object 
//useContext will be used to initialize the new context created