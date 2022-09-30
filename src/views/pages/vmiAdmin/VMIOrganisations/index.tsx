//Third Party Imports
import { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useNavigate, useOutletContext } from 'react-router-dom';

//Local Imports
import { StyledButton, StyledDataTable, ErrorZone } from 'views/components/';
import { IRouterContext } from 'interface';
import { GET_ORGANISATIONS } from 'graphql/queries/getOrganisations';

export function VMIOrganisations(props: { children?: any }) {
  let navigate = useNavigate();
  const { data, loading, error, refetch } = useQuery(GET_ORGANISATIONS, {
    variables: { limit: 50 },
  });
  const { ctxOrg } = useOutletContext<IRouterContext>();
  const [org, setOrg] = ctxOrg;

  useEffect(() => {
    //Refetch data on mount
    refetch();
  }, [refetch]);

  if (error) return <ErrorZone>{error.message}</ErrorZone>;
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div style={{ maxHeight: '60%', overflow: 'auto' }}>
        <StyledDataTable
          setData={setOrg}
          navigateTo={'/dashboard/create-org'}
          data={data ? data.organisationMany : null}
          loading={loading}
        />
      </div>
      <div style={{ maxWidth: 400, width: '100%', margin: 'auto' }}>
        <StyledButton
          title="Create Organisation"
          onClick={() => {
            setOrg(null);
            navigate('/dashboard/create-org');
          }}
        />
        <StyledButton
          title="Back"
          onClick={() => {
            navigate('/dashboard/summary');
          }}
        />
      </div>
    </div>
  );
}
