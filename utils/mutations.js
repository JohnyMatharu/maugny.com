import { gql } from '@apollo/client';

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

/*
//this here needs to be checked for argument names
//This to be checked before use   
export const UPDATE_PAID = gql`
  mutation updatePaid($ids: [ID!]) {
    updatePaid(ids: $ids) {
      _id
      paid
      title
      description
    }
  }
`;
*/



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


export const ADD_INVENTORY = gql`
  mutation addInventory($input: inventoryInput!) {
    addInventory(input: $input) {
      _id
      Inventory{
        _id
        title
        description
        price
        quantity
        image
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

export const UPDATE_CART = gql`
  mutation updateCart($_id: ID!, $input: cartInput!) {
    updateCart(_id: $_id, input: $input) {
      _id
      {
      _id
      title
      description
      price
      quantity
      image
      }
    }
  }
`;