import { gql } from '@apollo/client';

export const GET_SESSIONS = gql`
  query GetSessions {
    getSessions {
      _id
    }
  }
`;
