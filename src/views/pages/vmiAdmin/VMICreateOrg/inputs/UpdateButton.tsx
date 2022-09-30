//Third Party Imports
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';

//Local Imports
import { UPDATE_ORG_MUTATION } from 'graphql/mutations/organisation';
import { StyledButton } from 'views/components/';
import { IOrganisationWrite } from 'interface';

export const UpdateButton = (props: { formData: IOrganisationWrite }) => {
  const navigate = useNavigate();

  const { name, _id, projects } = props.formData;

  const [updateEvent, { data, loading, error }] = useMutation(
    UPDATE_ORG_MUTATION,
    {
      variables: {
        id: _id,
        name: name,
        projects: projects,
      },
      onCompleted: (data) => {
        const response = data.organisationUpdateOrg;
        response && navigate('/dashboard/organisations');
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
        updateEvent();
      }}
    />
  );
};
