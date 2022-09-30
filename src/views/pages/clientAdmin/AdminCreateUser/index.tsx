//Third Party Imports
import { useState, useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useQuery } from '@apollo/client';
//Local Imports
import { StyledButton, StyledInput, DangerZone } from 'views/components/';
import { IUserWrite, IRouterContext } from 'interface';
import * as INPUTS from './inputs';
import { GET_ORGANISATIONS } from 'graphql/queries/getOrganisations';
import { DropDown } from 'views/components/DropDown';
import * as HELPERS from './helpers';
import { GET_PROJECTS } from 'graphql/queries/getProjects';

export function AdminCreateUser() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState<IUserWrite>(
    HELPERS.formDataDefaults
  );
  const { ctxUser } = useOutletContext<IRouterContext>();
  const [user, setUser] = ctxUser;

  const { data, loading, error, refetch } = useQuery(GET_ORGANISATIONS, {
    variables: { limit: 50 },
  });

  const {
    data: dataP,
    loading: loadingP,
    error: errorP,
    refetch: refetchP,
  } = useQuery(GET_PROJECTS, {
    variables: { limit: 50 },
  });

  useEffect(() => {
    if (user) {
      setFormData({
        _id: user._id,
        name: user.name,
        email: user.email,
        scope: 'Assigned On Save',
        organisation: 'Assigned On Save',
        projects: user.projects
          ? user.projects.map((item) => item._id || '')
          : [],
      });
    }
  }, [user]);

  return (
    <div style={{ maxWidth: 400 }}>
      <StyledInput
        value={formData.name}
        name="name"
        placeholder="Name"
        onChange={(e: any) => HELPERS.handleChange(e, setFormData, formData)}
      />
      <StyledInput
        value={formData.email}
        name="email"
        placeholder="Email"
        onChange={(e: any) => HELPERS.handleChange(e, setFormData, formData)}
      />

      <DropDown
        value={formData.projects}
        placeholder="Projects"
        data={
          dataP && dataP.projectMany
            ? dataP.projectMany.map((item: any) => [item._id, item.name])
            : null
        }
        onClick={(id: string, name: string) =>
          HELPERS.handleClickChange(setFormData, formData, 'projects', id, true)
        }
        multi={true}
      />
      {formData && !formData._id && <INPUTS.SaveButton formData={formData} />}
      {formData && formData._id && <INPUTS.UpdateButton formData={formData} />}
      {user && user._id && <INPUTS.ResetPasswordButton formData={formData} />}

      {user && user._id && (
        <DangerZone>
          <INPUTS.DeleteUserButton formData={formData} />{' '}
        </DangerZone>
      )}

      <StyledButton
        title="Back"
        onClick={() => {
          setUser(null);
          navigate('/dashboard/users');
        }}
      />
    </div>
  );
}
