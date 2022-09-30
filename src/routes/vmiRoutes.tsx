import {
  VMIDashboardPage,
  VMICreateUser,
  VMICreateOrg,
  VMICreateProject,
  VMISummary,
  VMIUsers,
  VMIOrganisations,
  VMINoticePage,
  VMIProjects,
} from '../views/pages';
import { Route } from 'react-router-dom';

export function VMIRoutes(): JSX.Element[] {
  return [
    <Route path="dashboard" element={<VMIDashboardPage />} key="am_dash">
      <Route path="summary" element={<VMISummary />} />
      <Route path="users" element={<VMIUsers />} />
      <Route path="create-user" element={<VMICreateUser />} />
      <Route path="organisations" element={<VMIOrganisations />} />
      <Route path="create-org" element={<VMICreateOrg />} />,
      <Route path="projects" element={<VMIProjects />} />
      <Route path="create-project" element={<VMICreateProject />} />
      <Route
        path="reset-email-sent"
        element={
          <VMINoticePage
            str="Password Reset Email Sent"
            backTo="/dashboard/users"
          />
        }
      />
      <Route
        path="user-deleted"
        element={<VMINoticePage str="User Deleted" backTo="/dashboard/users" />}
      />
    </Route>,
  ];
}
