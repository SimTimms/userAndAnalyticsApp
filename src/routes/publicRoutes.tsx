import { WelcomePage, LoginPage } from '../views/pages';
import { Route } from 'react-router-dom';

export const PublicRoutes: JSX.Element[] = [
  <Route path="/" element={<WelcomePage />} key="home_route" />,
  <Route path="/login" element={<LoginPage />} key="login_route" />,
];
