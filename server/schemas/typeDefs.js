//this section has to match with queries and mutations client side, models must match to anything 
// here this needs complete revision, go one by one, first inventory, then cart, then login then 
// logged in cart and then order history

const { gql } = require( 'apollo-server-express' );

const typeDefs = gql`

  type orderHistory {
    _id: ID
    purchaseDate: String
    Cart: [Cart]
  }

  input inventoryInput {
    title: String!
    description: String!
    : Int
   
}

input cartInput {
    cartId: ID!
 
   
}

type User {
    _id: ID
    username: String
    email: String
    auctions: [Auction]
    bids: [Bid]
    bidsStore: [Auction]
}

type Checkout {
    session: ID
}

type Auth {
    token: ID!
    user: User
}

type Inventory {
    _id: ID
    title: String!
    description: String!

}

type Cart {
    _id: ID
    title: String!
    description: String!
}

type Order {
    _id: ID
    cartId: ID!
    createdAt: String
    userId: ID!
}


type Query {
    me: User
    user(username: String!): User
    inventory: [Inventory]
    cart(id: ID!): Cart
    order(_id: ID!): Order
    checkout(cart: [ID]!): Checkout
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    updatePassword(currentPassword: String!, newPassword: String!): Auth
    addInventory(input: InventoryInput!): User
    updateInventory(_id: ID!, input: InventoryInput!): Inventory
    deleteInventory(_id: ID!): User
    addCart(input: addInput!): Cart
    updateCart(_id: ID!): Cart
    deleteCart(_id: ID!): Cart
    addOrder(Order: [ID]!): Order
    updatePaid(ids: [ID!]): [Order]
}
`;

module.exports = typeDefs;