//Cookies and session logout timings can be controlled from this file, check DotEnv here 

const express = require( 'express' );
const { ApolloServer } = require( 'apollo-server-express' );
const db = require( './config/connection' );
const { authMiddleware } = require('./utils/auth');
const path = require('path');

const { typeDefs, resolvers } = require( './schemas' );

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer( {
  typeDefs,
  resolvers,
  context: authMiddleware
} );



async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}
startServer();



app.use(express.urlencoded({ extended: false }));
app.use(express.json());


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log( `API server running on port ${ PORT }!` );
    console.log( `Use GraphQL at http://localhost:${ PORT }${ server.graphqlPath }` );
  });
});
