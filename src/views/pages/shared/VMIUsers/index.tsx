//Third Party Imports
import { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useNavigate, useOutletContext } from 'react-router-dom';

//Local Imports
import { StyledButton, StyledDataTable, ErrorZone } from 'views/components/';
import { IRouterContext } from 'interface';
import { GET_USERS } from 'graphql/queries/getUsers';

export function VMIUsers(props: { children?: any }) {
  let navigate = useNavigate();
  const { data, loading, error, refetch } = useQuery(GET_USERS);
  const { ctxUser } = useOutletContext<IRouterContext>();
  const [user, setUser] = ctxUser;
  useEffect(() => {
    refetch();
  }, []);

  if (error) return <ErrorZone>{error.message}</ErrorZone>;
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div style={{ maxHeight: '60%', overflow: 'auto' }}>
        <StyledDataTable
          setData={setUser}
          navigateTo={'/dashboard/create-user'}
          data={data ? data.userMany : null}
          loading={loading}
        />
      </div>
      <div style={{ maxWidth: 400, width: '100%', margin: 'auto' }}>
        <StyledButton
          title="Create User"
          onClick={() => {
            setUser(null);
            navigate('/dashboard/create-user');
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
