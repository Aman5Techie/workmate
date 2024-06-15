const { ApolloServer, gql } = require("apollo-server");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Define your GraphQL schema

const typeDefs = gql`
  enum Role {
    PROPOSER
    BIDDER
  }

  type User {
    id: ID!
    username: String!
    email: String!
    role: Role!
    createdAt: String!
    orders: [Order!]!
  }

  type Order {
    id: ID!
    orderNumber: String!
    tags: [Tag!]!
  }

  type Tag {
    id: ID!
    name: String!
    orders: [Order!]!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    orders: [Order!]!
    tags: [Tag!]!
  }

  type Mutation {
    createUser(username: String!, email: String!, role: Role!): User!
    createOrder(orderNumber: String!, tagIds: [ID!]!): Order!
    createTag(name: String!): Tag!
  }
`;

// resolvers.js

const resolvers = {
  Query: {
    users: async () => {
      return await prisma.user.findMany({
        include: {
          orders: true, // Include associated orders for each user
        },
      });
    },
    user: async (_, { id }) => {
      return await prisma.user.findUnique({
        where: { id: parseInt(id) },
        include: {
          orders: true,
        },
      });
    },
    orders: async () => {
      return await prisma.order.findMany({
        include: {
          tags: true, // Include associated tags for each order
        },
      });
    },
    tags: async () => {
      return await prisma.tag.findMany({
        include: {
          orders: true, // Include associated orders for each tag
        },
      });
    },
  },
  Mutation: {
    createUser: async (_, { username, email, role }) => {
      return await prisma.user.create({
        data: {
          username,
          email,
          role,
        },
      });
    },
    createOrder: async (_, { orderNumber, tagIds }) => {
      return await prisma.order.create({
        data: {
          orderNumber,
          tags: {
            connect: tagIds.map((tagId) => ({ id: parseInt(tagId) })),
          },
        },
      });
    },
    createTag: async (_, { name }) => {
      return await prisma.tag.create({
        data: {
          name,
        },
      });
    },
  },
  User: {
    orders: async (parent) => {
      return await prisma.order.findMany({
        where: {
          userId: parent.id,
        },
      });
    },
  },
  Order: {
    tags: async (parent) => {
      return await prisma.tag.findMany({
        where: {
          orders: {
            some: {
              id: parent.id,
            },
          },
        },
      });
    },
  },
  Tag: {
    orders: async (parent) => {
      return await prisma.order.findMany({
        where: {
          tags: {
            some: {
              id: parent.id,
            },
          },
        },
      });
    },
  },
};

// Create the Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { prisma },
});

// Start the server
server.listen(6952).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
