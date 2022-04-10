const gql = require('graphql-tag');
const { builtinModules } = require('module');

const typeDefs = gql`
  type User {
    email: String!
    avatar: String
    friends: [User!]!
  }

  type Query {
    me: User!
  }
`;

module.exports = { typeDefs };
