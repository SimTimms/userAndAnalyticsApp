//Third Party Imports
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';

//Local Imports
import { DELETE_USER_BY_ADMIN_MUTATION } from 'graphql/mutations/user';
import { StyledButton } from 'views/components/';
import { IUserWrite } from 'interface';

export const DeleteUserButton = (props: { formData: IUserWrite }) => {
  const navigate = useNavigate();
  const [youSure, setYouSure] = useState(false);
  const { email } = props.formData;

  const [deleteUserEvent, { data, loading, error }] = useMutation(
    DELETE_USER_BY_ADMIN_MUTATION,
    {
      variables: {
        email: email,
      },
      onCompleted: (data) => {
        const success = data.userAdminDeleteAccount;
        success && navigate('/dashboard/users');
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
