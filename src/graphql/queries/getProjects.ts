import { gql } from '@apollo/client';

export const GET_PROJECTS = gql`
  query ProjectMany($limit: Int) {
    projectMany(limit: $limit) {
      name
      _id
      createdAt
    }
  }
`;
