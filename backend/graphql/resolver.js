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
    answerQuery: () => ({}),
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
      return prisma.task.findMany({ include: { question: true, tags: true } });
    },
    task: async (_, { id }) => {
      return prisma.task.findUnique({
        where: { id },
        include: { question: true, tags: true },
      });
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
      return await prisma.tags.findMany({ include: { task: true } });
    },
    tag: async (_, { id }) => {
      return await prisma.tags.findUnique({
        where: { id },
        include: { task: true },
      });
    },
  },

  QuestionQuery: {
    questions: async () => {
      return await prisma.question.findMany({});
    },
  },

  AnswerQuery: {
    getAnswers: async (_, { taskid }) => {
      return await prisma.answer.findMany({ where: { taskid: taskid } });
    },
  },
  // ################################################{MUTATION}#################################################################
  Mutation: {
    tagsMutation: () => ({}),
    taskMutation: () => ({}),
    answerMutation: () => ({}),
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

  AnswerMutation: {
    createAnswer: (_, { answers, userid, taskid, questions }) => {
      return prisma.answer.create({
        data: {
          answers,
          userid,
          taskid,
          questions,
        },
      });
    },
  },
  //################################################{INDIVISUAL FEATURES}#################################################################

  Task: {
    questions: async (parent) => {
      return prisma.question.findMany({ where: { taskId: parent.id } });
    },
  },

  User: {
    task: async (parent) => {
      const a = await prisma.task.findMany({ where: { userId: parent.id } });
      return a;
    },
  },

  Answer: {
    user: async (parent) => {
      return await prisma.user.findUnique({ where: { id: parent.userid } });
    },
  },
};

// prisma.answer.deleteMany({}).then(a=>console.log(a))

module.exports = resolvers;
