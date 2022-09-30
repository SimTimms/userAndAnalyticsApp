import gql from 'graphql-tag';

export const CREATE_ORG_MUTATION = gql`
  mutation OrganisationCreateOrg($name: String!, $projects: [MongoID]) {
    organisationCreateOrg(name: $name, projects: $projects)
  }
`;

export const UPDATE_ORG_MUTATION = gql`
  mutation OrganisationUpdateOrg(
    $name: String!
    $id: MongoID!
    $projects: [MongoID]
  ) {
    organisationUpdateOrg(name: $name, _id: $id, projects: $projects)
  }
`;

export const DELETE_ORG_MUTATION = gql`
  mutation OrganisationDeleteOrg($id: MongoID!) {
    organisationDeleteOrg(_id: $id)
  }
`;
