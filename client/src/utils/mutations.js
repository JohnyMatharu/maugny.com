import { gql } from '@apollo/client';

//You have to check if there is a need to put cartId instead of _id in reference to all ids 
//connected to cart and then make changes accordingly after checking graphQl. Change interior
//brackets _id to cartID, add in inventory model, change typedef and resolvers, queries

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;





//The following is used for sign up

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const CHANGE_PASSWORD = gql`
  mutation updatePassword($currentPassword: String!, $newPassword: String!){
    updatePassword(currentPassword: $currentPassword, newPassword: $newPassword){
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_CART = gql`
  mutation addCart($_id: ID!, $title: String!, $description: String!, $price: Int!, $quantity: Int!, $image: String!) {
    addCart(_id: $_id, title; $title, description: $description, price: $price, quantity: $quantity, image: $image) {
      _id
      title
      description
      price
      quantity
      image
      {
       _id
      title
      description
      price
      quantity
      image
      }
      priceCount
    }
  }
`;


export const REMOVE_CART = gql`
  mutation removeCart($_id: String!) {
    removeCart(_id: $_id) {
      _id
      title
      description
      price
      quantity
      image
      {
      _id
      title
      description
      price
      quantity
      image
      }
      priceCount
    }
  }
`;