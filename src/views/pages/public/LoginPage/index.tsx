//Third Party Imports
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//Local Imports
import { StyledButton, StyledInput } from 'views/components/';
import { CentralPanelLayout } from 'views/layouts';
import { userAuthStore } from 'store';
import { IAuthState } from 'store/userAuthStore';
import { ILogin } from './interface';
import { LoginButton, EmailAddress, Password } from './inputs';

export function LoginPage(props: {
  children?: any;
  title?: string;
  description?: string;
}) {
  const auth = userAuthStore((state: IAuthState) => state);
  const userTypes = ['VMI', 'Admin', 'Broker', 'No User'];
  const [loginDetails, setLoginDetails] = useState<ILogin>({
    email: '',
    password: '',
  });
  let navigate = useNavigate();
  return (
    <CentralPanelLayout title="Login" description="Please Login">
      <EmailAddress
        loginDetails={loginDetails}
        setLoginDetails={setLoginDetails}
      />
      <Password loginDetails={loginDetails} setLoginDetails={setLoginDetails} />
      <LoginButton loginDetails={loginDetails} />

      {userTypes.map((userType, index) => (
        <StyledButton
          title={userType}
          key={`type_${index}`}
          onClick={() => {
            auth.setDetails({
              userId: 'UserId',
              accessToken: 'Access',
              refreshToken: 'Refresh',
              scope: [userType],
              organisation: '',
            });
            navigate('/dashboard/summary');
          }}
        />
      ))}
    </CentralPanelLayout>
  );
}
