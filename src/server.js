const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  async context({req}) {
    // check the 'Authorization' header in `req`
  
    return { ver: '1.0.0' };
  },
});

server.listen(4000).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
