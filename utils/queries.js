//this will be used for type def and resolvers too and modufy them according


import { gql } from '@apollo/client';

//this is main query for creating session id with stripe for front end, need all product ids to 
//submit 
export const QUERY_CHECKOUT = gql`
  query getCheckout($auctions: [ID]!) {
    checkout(auctions: $auctions) {
      session
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
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
`;

//for inventory component (this could be more than one)
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


//for cart component
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

//for filter component (may require this more than one)
export const QUERY_FILTER = gql`
  query Filter {
      _id
      title
      description
      price
      quantity
      image
  }
`;


