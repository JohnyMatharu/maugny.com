//this will be used for type def and resolvers too and modufy them according


import { gql } from '@apollo/client';

//this is main query for creating session id with stripe for front end, need all product ids to 
//submit 



export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
        _id
        username
        email
        cart{
          _id
          title
          description
          quantity
          price
          createdAt
          paid
        }  
      }
    }
`;


//This will be Me details could be used for order history
export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      cart{
        _id
        title
        description
        quantity
        price
        createdAt
        paid
      }  
    }
  }
`;

//for inventory component (this could be more than one), or like one GET request to display 
//all inventory seed data, the query may not need the id parts
export const QUERY_INVENTORY = gql`
  query Inventory {
      _id
      title
      description
      price
      quantity
      image
  }
`;

//this is for PDP page one query of one product

export const QUERY_PRODUCT = gql`
  query Product {
      _id
      title
      description
      price
      quantity
      image
  }
`;


//for cart component, may not need the id part
export const QUERY_CART = gql`
  query Cart {
      _id
      title
      description
      price
      quantity
      image
  }
`;



/*
//for filter component (may require this more than one)
export const QUERY_FILTER = gql`
  query Filter {
      title
      description
      price
      quantity
      image
  }
`;
*/

