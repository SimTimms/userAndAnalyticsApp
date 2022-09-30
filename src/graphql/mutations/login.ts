import gql from 'graphql-tag';

export const LOGIN_MUTATION = gql`
  mutation UserLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      token
      scope
      _id
      organisation
    }
  }
`;
