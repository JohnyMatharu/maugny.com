

const { gql } = require( 'apollo-server-express' );

const typeDefs = gql`


type Inventory {
    _id: ID
    title: String!
    description: String!
    price: Int!
    quantity: Int! 
    image: String! 
}

type User {
    _id: ID
    username: String
    email: String
    cart: [Cart]
    priceCount: Int
}


type Auth {
    token: ID!
    user: User
}


type Query {
    me: User
    user(username: String!): User
    inventory: [Inventory]
    product(_id: ID!): Inventory
    cart: [Cart] 
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    updatePassword(currentPassword: String!, newPassword: String!): Auth
    addCart(_id: ID!, title: String!, description: String!, price: Int!, quantity: Int!, image: String!): User
    removeCart(_id: ID!): User
}
`;




module.exports = typeDefs;