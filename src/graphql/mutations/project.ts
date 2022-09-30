import gql from 'graphql-tag';

export const CREATE_PROJECT_MUTATION = gql`
  mutation ProjectCreateProject($name: String!) {
    projectCreateProject(name: $name)
  }
`;

export const UPDATE_PROJECT_MUTATION = gql`
  mutation ProjectUpdateProject($name: String!, $id: MongoID!) {
    projectUpdateProject(name: $name, _id: $id)
  }
`;

export const DELETE_PROJECT_MUTATION = gql`
  mutation ProjectDeleteProject($id: MongoID!) {
    projectDeleteProject(_id: $id)
  }
`;
