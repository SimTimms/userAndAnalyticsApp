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
import { GET_PROJECTS } from 'graphql/queries/getProjects';

export function AdminSummary(props: { children?: any }) {
  let navigate = useNavigate();
  const { data, loading, error } = useQuery(GET_USERS);
  const { data: dataP } = useQuery(GET_PROJECTS);
  const { data: dataS } = useQuery(GET_SESSIONS);

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
          title="Brokers"
          value={data ? data.userMany.length : 0}
          hueRotation={0}
        />
        <StyledPlaceholderRound
          value={dataP ? dataP.projectMany.length : 0}
          title="Projects"
          hueRotation={0}
        />
        <StyledPlaceholderRound
          title="Broker Sessions"
          value={dataS ? dataS.getSessions.length : 0}
          hueRotation={0}
        />
        <StyledPlaceholderRound
          title="Avg. Session Time"
          value={1}
          hueRotation={0}
        />
      </div>
      <div style={{ maxHeight: '30%', overflow: 'auto' }}>
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
        title="Create User"
        onClick={() => navigate('/dashboard/create-user')}
      />
    </div>
  );
}
