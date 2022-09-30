//Third Party Imports
import { useQuery } from '@apollo/react-hooks';
import { useNavigate } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
//Local Imports
import {
  StyledButton,
  StyledDataTable,
  StyledPlaceholderRound,
} from 'views/components/';
import { IRouterContext } from 'interface';
import { GET_USERS } from 'graphql/queries/getUsers';
import { GET_SESSIONS } from 'graphql/queries/getSessions';
import { GET_ORGANISATIONS } from 'graphql/queries/getOrganisations';

export function VMISummary(props: { children?: any }) {
  let navigate = useNavigate();
  const { data, loading, error } = useQuery(GET_USERS);
  const { data: dataA } = useQuery(GET_SESSIONS);
  const { data: dataO } = useQuery(GET_ORGANISATIONS);

  const { ctxUser } = useOutletContext<IRouterContext>();
  const [user, setUser] = ctxUser;
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          marginBottom: 30,
        }}
      >
        <StyledPlaceholderRound
          title="Total Users"
          value={data ? data.userMany.length : 0}
          hueRotation={0}
        />
        <StyledPlaceholderRound
          value={dataO ? dataO.organisationMany.length : 0}
          title="Organisations"
          hueRotation={90}
        />
        <StyledPlaceholderRound
          title="Avg. Session Time"
          value={dataA ? dataA.length : 0}
        />
        <StyledPlaceholderRound title="Avg. Session Time" value={1} />
      </div>
      <div style={{ height: '30%' }}>
        <StyledDataTable
          setData={setUser}
          navigateTo={'/dashboard/create-user'}
          data={data ? data.userMany : null}
          loading={loading}
        />
      </div>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
        }}
      ></div>
      <StyledButton
        title="Create Organisation"
        onClick={() => navigate('/dashboard/create-org')}
      />
      <StyledButton
        title="Create Project"
        onClick={() => navigate('/create-project')}
      />
      <StyledButton
        title="Create User"
        onClick={() => navigate('/dashboard/create-user')}
      />
    </div>
  );
}
