//Third Pary Imports
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//Local Imports
import { navStore } from 'store';
import { INavState } from 'store/navStore';

export const NavHistory = (props: { children: any }) => {
  const nav = navStore((state: INavState) => state);
  const location = useLocation();
  useEffect(() => {
    const lastHistory = nav.navHistory[nav.navHistory.length - 1];
    if (lastHistory !== location.pathname && location.pathname !== '/') {
      nav.setNavHistory({ historyStr: location.pathname });
    }
  }, [location, nav]);
  return props.children;
};

//README: A wrapper that records each route change in the navStore to create a history of the user's navigation
