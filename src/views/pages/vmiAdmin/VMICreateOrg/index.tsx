//Third Party Imports
import { useState, useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useQuery } from '@apollo/client';
//Local Imports
import {
  StyledButton,
  StyledInput,
  DangerZone,
  DropDown,
} from 'views/components/';
import { IOrganisationWrite, IRouterContext } from 'interface';
import { SaveButton, UpdateButton, DeleteButton } from './inputs';
import { GET_PROJECTS } from 'graphql/queries/getProjects';
import * as HELPERS from './helpers';

export function VMICreateOrg() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState<IOrganisationWrite>({
    name: '',
    _id: null,
    projects: [],
  });
  const { ctxOrg } = useOutletContext<IRouterContext>();
  const [org, setOrg] = ctxOrg;

  const { data, loading, error, refetch } = useQuery(GET_PROJECTS, {
    variables: { limit: 50 },
  });

  function handleChange(e: any) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  useEffect(() => {
    if (org) {
      setFormData({
        _id: org._id,
        name: org.name,
        projects: org.projects.map((item) => item._id || ''),
      });
    }
  }, [org]);
  return (
    <div style={{ maxWidth: 400, minWidth: 300 }}>
      <StyledInput
        value={formData.name}
        name="name"
        placeholder="Name"
        onChange={(e: any) => handleChange(e)}
      />
      <DropDown
        value={formData.projects}
        data={
          data && data.projectMany
            ? data.projectMany.map((item: any) => [item._id, item.name])
            : null
        }
        onClick={(id: string, name: string) =>
          HELPERS.handleClickChange(setFormData, formData, 'projects', id)
        }
        multi={true}
      />
      {formData && !formData._id && <SaveButton formData={formData} />}
      {formData && formData._id && <UpdateButton formData={formData} />}

      {org && org._id && (
        <DangerZone>
          <DeleteButton formData={formData} />
        </DangerZone>
      )}

      <StyledButton
        title="Back"
        onClick={() => {
          setOrg(null);
          navigate('/dashboard/organisations');
        }}
      />
    </div>
  );
}
