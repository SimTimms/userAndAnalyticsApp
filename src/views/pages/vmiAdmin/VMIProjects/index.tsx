//Third Party Imports
import { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useNavigate, useOutletContext } from 'react-router-dom';

//Local Imports
import { StyledButton, StyledDataTable, ErrorZone } from 'views/components/';
import { IRouterContext } from 'interface';
import { GET_PROJECTS } from 'graphql/queries/getProjects';

export function VMIProjects(props: { children?: any }) {
  let navigate = useNavigate();
  const { data, loading, error, refetch } = useQuery(GET_PROJECTS, {
    variables: { limit: 50 },
  });
  const { ctxProject } = useOutletContext<IRouterContext>();
  const [project, setProject] = ctxProject;

  useEffect(() => {
    //Refetch data on mount
    refetch();
  }, [refetch]);

  if (error) return <ErrorZone>{error.message}</ErrorZone>;
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div style={{ maxHeight: '60%', overflow: 'auto' }}>
        <StyledDataTable
          setData={setProject}
          navigateTo={'/dashboard/create-project'}
          data={data ? data.projectMany : null}
          loading={loading}
        />
      </div>
      <div style={{ maxWidth: 400, width: '100%', margin: 'auto' }}>
        <StyledButton
          title="Create Project"
          onClick={() => {
            setProject(null);
            navigate('/dashboard/create-project');
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
