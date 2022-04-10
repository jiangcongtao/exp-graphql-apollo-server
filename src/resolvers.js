const resolvers = {
  Query: {
    me() {
      return {
        email: 'a@mail.com',
        avatar: 'http://www.png',
        friends: [
          {
            email: 'a1@mail.com',
            avatar: 'http://www.pnga1',
            friends: [],
          },
          {
            email: 'a2@mail.com',
            avatar: 'http://www.pnga2',
            friends: [],
          },
          {
            email: 'a3@mail.com',
            avatar: 'http://www.pnga3',
            friends: [],
          },
        ],
      };
    },
  },
};

module.exports = { resolvers };
