import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String!
    leads: [Lead!]!
  }

  type Lead {
    id: ID!
    businessName: String!
  }

  type Mutation {
    createLead(businessName: String!): Lead!
  }
`;
