import gql from 'graphql-tag';

export const CREATE_USER_MUTATION = gql`
  mutation UserCreateOne($record: CreateOneUserInput!) {
    userCreateOne(record: $record) {
      record {
        _id
      }
    }
  }
`;

export const UPDATE_USER_MUTATION = gql`
  mutation UserUpdate(
    $userId: MongoID!
    $email: String
    $name: String
    $organisation: String
    $scope: [String]
    $projects: [String]
  ) {
    userUpdate(
      userId: $userId
      email: $email
      name: $name
      organisation: $organisation
      scope: $scope
      projects: $projects
    )
  }
`;

export const DELETE_USER_BY_ADMIN_MUTATION = gql`
  mutation UserAdminDeleteAccount($email: String!) {
    userAdminDeleteAccount(email: $email)
  }
`;

export const SEND_PASSWORD_RESET_LINK = gql`
  mutation UserPasswordToken($email: String) {
    userPasswordToken(email: $email)
  }
`;
