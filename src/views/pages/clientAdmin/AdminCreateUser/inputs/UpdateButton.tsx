//Third Party Imports
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';

//Local Imports
import { UPDATE_USER_MUTATION } from 'graphql/mutations/user';
import { StyledButton } from 'views/components/';
import { IUserWrite } from 'interface';
import { UserTypes } from 'enums';
import { userAuthStore } from 'store';
import { IAuthState } from 'store/userAuthStore';

export const UpdateButton = (props: { formData: IUserWrite }) => {
  const auth = userAuthStore((state: IAuthState) => state);
  const navigate = useNavigate();

  const { email, scope, name, organisation, _id, projects } = props.formData;

  const [saveEvent, { data, loading, error }] = useMutation(
    UPDATE_USER_MUTATION,
    {
      variables: {
        userId: _id,
        name: name,
        email: email,
        scope: UserTypes.Broker, //TODO: This should be set on the API
        organisation: auth.auth.organisation, //TODO: This should be set on the API
        projects: projects,
      },
      onCompleted: (data) => {
        const success = data.userUpdate;
        success && navigate('/dashboard/users');
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
          : !data
          ? 'Update'
          : data
          ? 'Success'
          : 'Update'
      }
      onClick={() => {
        saveEvent();
      }}
    />
  );
};
