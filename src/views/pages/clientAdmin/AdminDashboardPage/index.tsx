import { useState, useRef } from 'react';
import { NavBarSideBarLayout } from 'views/layouts';
import { navStore } from 'store';
import { INavState } from 'store/navStore';
import { IOrganisationRead, IUser, IProject } from 'interface';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function AdminDashboardPage(props: {
  children?: any;
  title?: string;
  description?: string;
}) {
  const nav = navStore((state: INavState) => state);
  const [user, setUser] = useState<IUser | null>(null);
  const [organisation, setOrganisation] = useState<IOrganisationRead | null>(
    null
  );
  const [project, setProject] = useState<IProject | null>(null);
  const navigate = useNavigate();
  const sidebarButtons = [
    { title: 'Users', onClickEvent: () => navigate('/dashboard/users') },
    {
      title: 'Settings',
      onClickEvent: () => navigate('/dashboard/settings'),
    },
    { title: 'Logout', onClickEvent: () => navigate('logout') },
  ];
  return (
    <NavBarSideBarLayout
      breadcrumbs={nav.navHistory}
      width={300}
      title="Client Dashboard"
      sidebarButtons={sidebarButtons}
    >
      <Outlet
        context={{
          ctxUser: [user, setUser],
          ctxOrg: [organisation, setOrganisation],
          ctxProject: [project, setProject],
        }}
      />
      {props.children}
    </NavBarSideBarLayout>
  );
}
