//Third Party Imports
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
//Local Imports
import { StyledButton, StyledInput } from 'views/components/';
import { ILogin } from './interface';
import { LOGIN_MUTATION } from 'graphql/mutations/login';
import { userAuthStore } from 'store';
import { IAuthState } from 'store/userAuthStore';

export const EmailAddress = (props: {
  loginDetails: ILogin;
  setLoginDetails: (props: ILogin) => void;
}) => (
  <StyledInput
    value={props.loginDetails.email}
    name="emailAddress"
    onChange={(e) =>
      props.setLoginDetails({ ...props.loginDetails, email: e.target.value })
    }
    placeholder="Email"
  />
);

export const Password = (props: {
  loginDetails: ILogin;
  setLoginDetails: (props: ILogin) => void;
}) => (
  <StyledInput
    value={props.loginDetails.password}
    name="password"
    onChange={(e) =>
      props.setLoginDetails({ ...props.loginDetails, password: e.target.value })
    }
    placeholder="Password"
    type="password"
  />
);

export const LoginButton = (props: { loginDetails: ILogin }) => {
  const navigate = useNavigate();
  const auth = userAuthStore((state: IAuthState) => state);

  const [loginEvent, { data, loading, error }] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: props.loginDetails.email,
      password: props.loginDetails.password,
    },
    onCompleted: (data) => {
      const { _id, token, scope, organisation } = data.userLogin;
      localStorage.setItem('token', token);
      auth.setDetails({
        userId: _id,
        accessToken: token,
        refreshToken: '',
        scope: scope,
        organisation: organisation,
      });
      navigate('/dashboard/summary');
    },
  });

  return (
    <StyledButton
      title={
        loading
          ? '...'
          : error
          ? 'Error'
          : data && !data.userLogin.token
          ? 'Try Again'
          : data && data.userLogin.token
          ? 'Success'
          : 'Login'
      }
      onClick={() => {
        loginEvent();
      }}
    />
  );
};
