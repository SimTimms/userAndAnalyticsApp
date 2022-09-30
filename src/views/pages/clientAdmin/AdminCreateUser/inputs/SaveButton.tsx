//Third Party Imports
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';

//Local Imports
import { CREATE_USER_MUTATION } from 'graphql/mutations/user';
import { StyledButton } from 'views/components/';
import { IUserWrite } from 'interface';
import { generateRandomPassword } from 'helpers';
import { UserTypes } from 'enums';
import { userAuthStore } from 'store';
import { IAuthState } from 'store/userAuthStore';

export const SaveButton = (props: { formData: IUserWrite }) => {
  const auth = userAuthStore((state: IAuthState) => state);
  const navigate = useNavigate();

  const { email, scope, name, organisation, projects } = props.formData;

  const [saveEvent, { data, loading, error }] = useMutation(
    CREATE_USER_MUTATION,
    {
      variables: {
        record: {
          password: generateRandomPassword(),
          name: name,
          email: email,
          scope: UserTypes.Broker, //TODO: This should be set on the API
          organisation: auth.auth.organisation, //TODO: This should be set on the API
          projects: projects,
        },
      },
      onCompleted: (data) => {
        const { _id } = data.userCreateOne.record;
        _id && navigate('/dashboard/users');
      },
    }
  );

  return (
    <StyledButton
      title={
        loading
          ? '...'
          : error
          ? 'Error'
          : data && !data.userCreateOne.record._id
          ? 'Try Again'
          : data && data.userCreateOne.record._id
          ? 'Success'
          : 'Save & Invite'
      }
      onClick={() => {
        saveEvent();
      }}
    />
  );
};
