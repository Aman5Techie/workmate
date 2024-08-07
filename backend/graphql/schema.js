const { gql } = require("apollo-server");

// Define your GraphQL schema
const typeDefs = gql`
  ############################################################### MODEL BELOW ############################################

  enum role {
    proposer
    bidder
  }

  type User {
    id: String!
    username: String!
    email: String!
    password: String!
    role: role!
    createdAt: String!
    task: [Task!]!
  }

  type Task {
    id: String!
    title: String!
    taskId: String!
    userId: String!
    location: String!
    status: String!
    description: String!
    amenties: [Int!]!
    amount: Int!
    imageurl: String!
    state: String
    city: String
    city_district: String
    latitide: String
    longitude: String
    createdAt: String
    userinfo: User!
    mode: String
    tags: [Tags!]!
    questions: [Question!]!
    answersofpost: [Answer!]!
  }

  type Question {
    id: ID!
    question: String
    taskId: String
    task: Task
  }

  type Tags {
    id: ID!
    name: String!
    task: [Task!]!
  }

  type Answer {
    id: Int!
    questions: [String!]!
    answers: [String!]!
    userid: String!
    amount: Int!
    createdAt: Int!
    taskid: String!
    user: User
  }

  ############################################################### QUERY BELOW ############################################
  type AnswerQuery {
    getAnswers(taskid: String!): [Answer!]!
    getallAnswers: [Answer!]!
  }

  # Users Query
  type UsersQuery {
    users: [User!]! # Get All Users
    user(id: ID!): User # get users by id
  }

  # Tags Query
  type TagsQuery {
    tag(id: Int!): Tags!
    tags: [Tags!]!
  }

  # Task Query
  type TaskQuery {
    tasks: [Task!]!
    task(id: ID!): Task!
    taskByTag(tag: ID!): [Task!]!
  }

  # Question Query
  type QuestionQuery {
    questions: [Question]!
  }

  # Main Query
  type Query {
    userQuery: UsersQuery
    taskQuery: TaskQuery
    tagsQuery: TagsQuery
    questionQuery: QuestionQuery
    answerQuery: AnswerQuery
  }
  ####################################### MUTATION ######################################################################################
  type TagsMutation {
    createTag(id: Int!, name: String!): Tags!
  }

  type TaskMutation {
    createTask(
      title: String!
      userId: String!
      location: String!
      status: String!
      mode: String!
      description: String!
      amount: Int!
      imageurl: String!
      state: String
      city: String
      city_district: String
      latitide: String
      longitude: String
      amenties: [Int!]!
      tags: [Int!]!
      questions: [String!]!
    ): Task!
  }

  type AnswerMutation {
    createAnswer(
      questions: [String!]!
      answers: [String!]!
      userid: String!
      taskid: String!
      amount: Int!
    ): Answer!
  }

  type Mutation {
    tagsMutation: TagsMutation
    taskMutation: TaskMutation
    answerMutation: AnswerMutation
  }
`;

module.exports = typeDefs;
