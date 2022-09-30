import { CentralPanelLayout } from 'views/layouts';
import { StyledButton } from 'views/components/';
import { useNavigate } from 'react-router-dom';

export function ErrorPage() {
  let navigate = useNavigate();
  return (
    <CentralPanelLayout
      title="Whoops"
      description="Something went wrong. Please try again"
    >
      <StyledButton
        title="Back"
        onClick={() => {
          navigate('/');
        }}
      />
    </CentralPanelLayout>
  );
}
