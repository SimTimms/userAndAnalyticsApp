//Third Party Imports
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';

//Local Imports
import { SEND_PASSWORD_RESET_LINK } from 'graphql/mutations/user';
import { StyledButton } from 'views/components/';
import { IUserWrite } from 'interface';

export const ResetPasswordButton = (props: { formData: IUserWrite }) => {
  const navigate = useNavigate();

  const { email } = props.formData;

  const [saveEvent, { data, loading, error }] = useMutation(
    SEND_PASSWORD_RESET_LINK,
    {
      variables: {
        email: email,
      },
      onCompleted: (data) => {
        const success = data.userPasswordToken;
        success && navigate('/dashboard/reset-email-sent');
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
          ? 'Reset Password'
          : data
          ? 'Success'
          : 'Reset Password'
      }
      onClick={() => {
        saveEvent();
      }}
    />
  );
};
