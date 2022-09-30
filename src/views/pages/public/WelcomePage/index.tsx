import { StyledButton } from 'views/components/';
import { CentralPanelLayout } from 'views/layouts';
import { useNavigate } from 'react-router-dom';

export function WelcomePage(props: {
  children?: any;
  title?: string;
  description?: string;
}) {
  let navigate = useNavigate();
  return (
    <CentralPanelLayout
      title="Welcome to Luna Platform"
      description="This is a prototype workflow. Please login to continue"
    >
      <StyledButton title="Login" onClick={() => navigate('/login')} />
      {props.children}
    </CentralPanelLayout>
  );
}
