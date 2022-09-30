//Third Party Imports
import { useState, useEffect } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
//Local Imports
import { StyledButton, StyledInput, DangerZone } from 'views/components/';
import { IProject, IRouterContext } from 'interface';
import { SaveButton, UpdateButton, DeleteButton } from './inputs';

export function VMICreateProject() {
  let navigate = useNavigate();
  const [formData, setFormData] = useState<IProject>({
    name: '',
    _id: null,
  });
  const { ctxProject } = useOutletContext<IRouterContext>();
  const [project, setProject] = ctxProject;

  function handleChange(e: any) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  useEffect(() => {
    if (project) {
      setFormData({
        _id: project._id,
        name: project.name,
      });
    }
  }, [project]);

  return (
    <div style={{ maxWidth: 400 }}>
      <StyledInput
        value={formData.name}
        name="name"
        placeholder="Name"
        onChange={(e: any) => handleChange(e)}
      />

      {formData && !formData._id && <SaveButton formData={formData} />}
      {formData && formData._id && <UpdateButton formData={formData} />}

      {project && project._id && (
        <DangerZone>
          <DeleteButton formData={formData} />{' '}
        </DangerZone>
      )}

      <StyledButton
        title="Back"
        onClick={() => {
          setProject(null);
          navigate('/dashboard/projects');
        }}
      />
    </div>
  );
}
