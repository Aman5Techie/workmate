const { gql } = require("apollo-server");

// Define your GraphQL schema
const typeDefs = gql`
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
    title: String
    taskId: String
    userId: String
    location: String
    status: String
    Bid: String
    createdAt: String
    description: String
    amenties: String
    amount: Int
    imageurl: String
    tags: [Tags!]!
    questions: [Question!]!
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
  type QuestionQuery{
    questions : [Question]!
  }

  # Main Query
  type Query {
    userQuery: UsersQuery
    taskQuery: TaskQuery
    tagsQuery: TagsQuery
    questionQuery :QuestionQuery
  }

  type TagsMutation {
    createTag(id: Int!, name: String!): Tags!
  }

  type TaskMutation {
    createTask(
      title: String!
      taskId: String!
      userId: String!
      location: String!
      status: String!
      Bid: String!
      description: String!
      amenties: String!
      amount: Int!
      imageurl: String!
      tags: [Int!]!
      questions: [String!]!
    ): Task!
  }

  type Mutation {
    tagsMutation: TagsMutation
    taskMutation: TaskMutation
  }
`;

module.exports = typeDefs;