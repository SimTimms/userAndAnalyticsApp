//Third Party Imports
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';

//Local Imports
import { DELETE_ORG_MUTATION } from 'graphql/mutations/organisation';
import { StyledButton } from 'views/components/';
import { IOrganisationWrite } from 'interface';

export const DeleteButton = (props: { formData: IOrganisationWrite }) => {
  const navigate = useNavigate();
  const [youSure, setYouSure] = useState(false);
  const { _id } = props.formData;

  const [deleteUserEvent, { data, loading, error }] = useMutation(
    DELETE_ORG_MUTATION,
    {
      variables: {
        id: _id,
      },
      onCompleted: (data) => {
        const success = data.organisationDeleteOrg;
        success && navigate('/dashboard/organisations');
      },
    }
  );

  return (
    <div style={{ width: '100%', display: 'flex' }}>
      {youSure && (
        <StyledButton
          title="No"
          onClick={() => {
            setYouSure(false);
          }}
          isDanger={true}
          style={{ marginTop: 0 }}
        />
      )}
      <StyledButton
        title={
          loading
            ? '...'
            : error
            ? 'Error'
            : !youSure
            ? 'Delete'
            : 'Are you sure?'
        }
        onClick={() => {
          !youSure ? setYouSure(true) : setYouSure(false);
        }}
        isDanger={true}
        style={{ marginTop: 0 }}
      />
      {youSure && (
        <StyledButton
          title="Yes"
          onClick={() => {
            youSure && deleteUserEvent();
          }}
          style={{ marginTop: 0 }}
        />
      )}
    </div>
  );
};
