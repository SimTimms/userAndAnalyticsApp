import {
  AdminDashboardPage,
  AdminSummary,
  VMIUsers,
  AdminCreateUser,
} from 'views/pages';
import { Route } from 'react-router-dom';

export function AdminRoutes(): JSX.Element[] {
  return [
    <Route path="/dashboard" element={<AdminDashboardPage />} key="route_admin">
      <Route path="summary" element={<AdminSummary />} />
      <Route path="users" element={<VMIUsers />} />
      <Route path="create-user" element={<AdminCreateUser />} />
    </Route>,
  ];
}
