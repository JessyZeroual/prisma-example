const { prisma } = require("../prisma/server/generated/prisma-client");
const { GraphQLServer } = require("graphql-yoga");

const Subscription = require('./resolvers/Subscription')
const { Mutation } = require('./resolvers/Mutation')
const { Query } = require('./resolvers/Query')

const resolvers = {
  Query,
  Mutation,
  Subscription
};

const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers,
  context: {
    prisma
  }
});
server.start(() => console.log("Server is running on http://localhost:4000"));
