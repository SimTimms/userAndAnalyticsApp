//Third Party Imports
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';

//Local Imports
import { CREATE_USER_MUTATION } from 'graphql/mutations/user';
import { StyledButton } from 'views/components/';
import { IUserWrite } from 'interface';
import { generateRandomPassword } from 'helpers';

export const SaveButton = (props: { formData: IUserWrite }) => {
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
          scope: scope,
          organisation: organisation,
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
