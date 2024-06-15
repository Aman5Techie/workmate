const { ApolloServer } = require("apollo-server");
const resolvers = require("./resolver");
const typeDefs = require("./schema");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { prisma },
});

// Start the server
module.exports = server;
