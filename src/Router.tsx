//Third Party Imports
import { BrowserRouter, Routes } from 'react-router-dom';
//Local Imports
import { userAuthStore } from 'store';
import { IAuthState } from 'store/userAuthStore';
import { NavHistory } from 'components/NavHistory';
import * as ROUTES from 'routes';
import { UserTypes } from 'enums';

export const Router = () => {
  const loginDetails = userAuthStore((state: IAuthState) => state);
  const scope = loginDetails.auth.scope
    ? loginDetails.auth.scope
    : UserTypes.Guest;

  return (
    <BrowserRouter>
      <NavHistory>
        <Routes>
          {scope.indexOf(UserTypes.VMI) > -1 && ROUTES.VMIRoutes()}
          {scope.indexOf(UserTypes.Admin) > -1 && ROUTES.AdminRoutes()}
          {scope.indexOf(UserTypes.Broker) > -1 && ROUTES.BrokerRoutes}
          {ROUTES.PublicRoutes}
          {ROUTES.ErrorRoutes}
        </Routes>
      </NavHistory>
    </BrowserRouter>
  );
};
