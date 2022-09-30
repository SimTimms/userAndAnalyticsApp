//Third Party Imports
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';

//Local Imports
import { CREATE_ORG_MUTATION } from 'graphql/mutations/organisation';
import { StyledButton } from 'views/components/';
import { IOrganisationWrite } from 'interface';

export const SaveButton = (props: { formData: IOrganisationWrite }) => {
  const navigate = useNavigate();

  const { name, projects } = props.formData;

  const [saveEvent, { data, loading, error }] = useMutation(
    CREATE_ORG_MUTATION,
    {
      variables: {
        name: name,
        projects: projects,
      },
      onCompleted: (data) => {
        const response = data.organisationCreateOrg;

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
