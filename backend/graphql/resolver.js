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
    getallAnswers : async (_)=>{
      return await prisma.answer.findMany();
    }
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
        userId,
        location,
        status,
        mode,
        description,
        amenties,
        amount,
        imageurl,
        tags,
        questions,
        state,
        city,
        city_district,
        latitide,
        longitude,
      }
    ) => {
      const random_id = Math.floor(Math.random() * 900000) + 100000;
      
      return await prisma.task.create({
        data: {
          title,
          mode,
          taskId: random_id.toString(),
          userId,
          location,
          status,
          description,
          amenties,
          amount,
          imageurl,
          state,
          city,
          city_district,
          latitide,
          longitude,
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
    createAnswer: async (_, { answers, userid, taskid, questions,amount }) => {
      
      return await prisma.answer.create({
        data: {
          answers,
          userid,
          taskid,
          questions,
          amount
        },
      });

     

    },
  },
  //################################################{INDIVISUAL FEATURES}#################################################################

  Task: {
    questions: async (parent) => {
      return prisma.question.findMany({ where: { taskId: parent.id } });
    },
    userinfo : async (parent)=>{
      return prisma.user.findFirst({where : {id : parent.userId} })
    },
    answersofpost : async ( parent ) => {
      return  prisma.answer.findMany({ where: { taskid: parent.id } });
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










// const tags = [
//   "Cleaning",
//   "Gardening",
//   "Repairs",
//   "Delivery",
//   "Assembly",
//   "Painting",
//   "Writing",
//   "Tutoring",
//   "Moving",
//   "Pet Care",
//   "Shopping",
//   "Data Entry",
//   "Graphic Design",
//   "Event Planning",
//   "Personal Assistant",
//   "Plumbing",
//   "Electrical",
//   "Web Development",
//   "Photography",
//   "Marketing",
//   "OTHER",
// ];



// prisma.tags.createMany({data : tags.map((name,index)=>({name,id:index}))}).then(a=>console.log(a))
// prisma.tags.deleteMany({}).then(a=>console.log(a))

module.exports = resolvers;
