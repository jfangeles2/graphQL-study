/**
 * In schema.js, you just define what the data should look like
 * Example: type OBJECT has fields          name: String!
 * There are no seperation delimeters on fields and types
 * type names shold be in PascalCase and are singular
 * For object ids there is a specific type named ID as first seen in type Animal, field id: ID!
 * Having a bang (!) at the end of the type means that it is non-nullable
 */

const {gql} = require ('apollo-server');

const typeDefs = gql`

    type MainCard{
        title: String!
        image: String!
    }

    type Animal{
        id: ID!
        image: String!
        title: String!
        rating: Float
        price: Float!
        description: [String!]!
        stock: Int
        slug: String
        category: category!
    }

    type Catergory{
        id: ID!
        image: String!
        category: String!
        slug: String!
        animals: [Animal]
    }

    type Query{
        mainCards: [MainCard]
        animals: [Animal]
        categories: [Category]
    }
`;

module.exports = typeDefs;
