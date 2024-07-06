import { gql } from "@apollo/client";

export const getUser = gql`
  query {
    userQuery {
      users {
        id
      }
    }
  }
`;

export const tempcheck = gql`
  mutation ($aaaId: Int!, $alk: Int!) {
    aKJSNJDSN {
      aaa(id: $aaaId, alk: $alk) {
        id
      }
    }
  }
`;

export const gettags = gql`
  query {
    tagsQuery {
      tags {
        name
        id
      }
    }
  }
`;

export const CREATEPOSTAPI = gql`
  mutation (
    $title: String!
    $city: String!
    $userId: String!
    $location: String!
    $status: String!
    $mode: String!
    $description: String!
    $amount: Int!
    $imageurl: String!
    $amenties: [Int!]!
    $tags: [Int!]!
    $questions: [String!]!
    $state: String!
    $latitide: String
    $longitude: String
    $city_district: String
  ) {
    taskMutation {
      createTask(
        title: $title
        userId: $userId
        location: $location
        status: $status
        mode: $mode
        description: $description
        amount: $amount
        imageurl: $imageurl
        amenties: $amenties
        tags: $tags
        questions: $questions
        city: $city
        state: $state
        latitide: $latitide
        longitude: $longitude
        city_district: $city_district
      ) {
        id
      }
    }
  }
`;

export const GET_TASK_INFO_BY_ID = gql`
  query ($taskIdoftask: ID!) {
    taskQuery {
      task(id: $taskIdoftask) {
        title
        createdAt
        state
        city
        status
        mode
        tags {
          name
        }
        description
        amenties
        questions {
          id
          question
        }
        userinfo {
          username
          email
        }
        imageurl
        amount
        location
        taskId

        city_district
      }
    }
  }
`;

export const SUBMIT_ANSWER = gql`
  mutation (
    $questions: [String!]!
    $answers: [String!]!
    $userid: String!
    $taskid: String!
    $amount: Int!
  ) {
    answerMutation {
      createAnswer(
        questions: $questions
        answers: $answers
        userid: $userid
        taskid: $taskid
        amount: $amount
      ) {
        id
      }
    }
  }
`;

