import { ErrorPage } from '../views/pages';
import { Route } from 'react-router-dom';

export const ErrorRoutes: JSX.Element[] = [
  <Route path="*" element={<ErrorPage />} key="err_route" />,
];
