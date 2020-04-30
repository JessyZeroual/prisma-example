const { prisma } = require("../prisma/generated/prisma-client");
const { GraphQLServer } = require("graphql-yoga");
const { Mutation } = require("./resolvers/mutation");
const { Query } = require("./resolvers/query");
const { Relation } = require("./resolvers/relation");

const resolvers = {
  Mutation,
  Query,
  ...Relation,
};

const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers,
  context: {
    prisma,
  },
});
server.start(() =>
  console.log("Server is running on http://localhost:4000 🚀")
);
