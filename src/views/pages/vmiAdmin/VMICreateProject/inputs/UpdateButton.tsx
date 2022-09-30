//Third Party Imports
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';

//Local Imports
import { UPDATE_PROJECT_MUTATION } from 'graphql/mutations/project';
import { StyledButton } from 'views/components/';
import { IProject } from 'interface';

export const UpdateButton = (props: { formData: IProject }) => {
  const navigate = useNavigate();

  const { name, _id } = props.formData;

  const [saveEvent, { data, loading, error }] = useMutation(
    UPDATE_PROJECT_MUTATION,
    {
      variables: {
        id: _id,
        name: name,
      },
      onCompleted: (data) => {
        const response = data.projectUpdateProject;
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
