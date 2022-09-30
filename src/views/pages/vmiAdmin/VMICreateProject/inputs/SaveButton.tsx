//Third Party Imports
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';

//Local Imports
import { CREATE_PROJECT_MUTATION } from 'graphql/mutations/project';
import { StyledButton } from 'views/components/';
import { IProject } from 'interface';

export const SaveButton = (props: { formData: IProject }) => {
  const navigate = useNavigate();

  const { name } = props.formData;

  const [saveEvent, { data, loading, error }] = useMutation(
    CREATE_PROJECT_MUTATION,
    {
      variables: {
        name: name,
      },
      onCompleted: (data) => {
        const response = data.projectCreateProject;

        response && navigate('/dashboard/projects');
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
          : 'Save'
      }
      onClick={() => {
        saveEvent();
      }}
    />
  );
};
