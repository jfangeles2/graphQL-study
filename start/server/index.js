const {ApolloServer, gql} = require ('apollo-server');
const {typeDefs} = require ('./schema');
const {mainCards, animals, categories} = require ('./db');
const {Animal} = require ('./resolvers/Animal');
const {Category} = require ('./resolvers/Category');
const {Query} = require ('./resolvers/Query');

/**
 * The ApolloServer constructorr requires 2 parameters and an optional but recommended parameter
 * 1. The schema
 * 2. The resolvers for the queries and mutations defined in the schema
 * 3. Context to allow the resolvers to access necessary data without importing them from each ./resolver/<resolver>.js
 */

// Values can be given by using :{}
const server = new ApolloServer ({
  typeDefs,
  resolvers: {
    Animal,
    Category,
    Query,
  },
  context: {
    mainCards,
    animals,
    categories,
  },
});

// The `listen` method launches a web server.
server.listen ().then (({url}) => {
  console.log (`🚀  Server ready at ${url}`);
});
