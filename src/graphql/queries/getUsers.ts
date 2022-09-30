import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query UserMany {
    userMany {
      name
      _id
      scope
      email
      organisation
      projects {
        _id
        name
      }
    }
  }
`;
