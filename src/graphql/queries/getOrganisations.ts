import { gql } from '@apollo/client';

export const GET_ORGANISATIONS = gql`
  query OrganisationMany($limit: Int) {
    organisationMany(limit: $limit) {
      name
      _id
      createdAt
      projects {
        _id
        name
      }
    }
  }
`;
