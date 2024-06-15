const { ApolloServer, gql } = require("apollo-server");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// Define your GraphQL schema

const resolvers = {
  Query: {
    userQuery: () => ({}),
    taskQuery: () => ({}),
    tagsQuery: () => ({}),
    questionQuery: () => ({}),
  },
  UsersQuery: {
    users: async () => {
      return await prisma.user.findMany({});
    },
    user: async (_, { id }) => {
      return await prisma.user.findUnique({ where: { id } });
    },
  },

  TaskQuery: {
    tasks: async () => {
      return prisma.task.findMany({include : {question: true,tags:true}});
    },
    task: async (_, { id }) => {
      return prisma.task.findMany({ where: { id } });
    },
    taskByTag: async (_, { tag }) => {
      return prisma.task.findMany({
        where: {
          tags: {
            some: {
              id: tag,
            },
          },
        },
      });
    },
  },

  TagsQuery: {
    tags: async () => {
      return await prisma.tags.findMany({});
    },
    tag: async (_, { id }) => {
      return await prisma.tags.findUnique({ where: { id } });
    },
  },

  QuestionQuery : {
    questions : async()=>{
      return await prisma.question.findMany({})
    }
  },

  Mutation: {
    tagsMutation: () => ({}),
    taskMutation: () => ({}),

  },
  TagsMutation: {
    createTag: async (_, { id, name }) => {
      const data = await prisma.tags.create({
        data: {
          id,
          name,
        },
      });
      return data;
    },
  },

  TaskMutation: {
    createTask: async (
      _,
      {
        title,
        taskId,
        userId,
        location,
        status,
        Bid,
        description,
        amenties,
        amount,
        imageurl,
        tags,
        questions,
      }
    ) => {
      
      console.log("coming");
      return await prisma.task.create({
        data: {
          title,
          taskId,
          userId,
          location,
          status,
          Bid,
          description,
          amenties,
          amount,
          imageurl,
          tags: {
            connect: tags.map((tagId) => ({ id: tagId })),
          },
          question: {
            create: questions.map((question) => ({
              question: question,
              
            })),
            
          },
        },
        include: {
          tags: true,
          question: true,
        },
      });
     
    },
  },
};

module.exports = resolvers;
