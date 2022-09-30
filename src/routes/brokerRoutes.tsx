import { WelcomePage } from '../views/pages';
import { Route } from 'react-router-dom';

export const BrokerRoutes: JSX.Element[] = [
  <Route path="/dashboard" element={<WelcomePage />} key="brk_route" />,
];
