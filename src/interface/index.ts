export interface IBrokerStats {
  _id: string;
  name: string;
  avgSession: number;
  totalSessions: number;
  plansSent: number;
  mostViewedPlan: string;
  lastActivity: string;
}

export interface IProject {
  _id: string | null;
  name: string;
}

export interface IOrganisationWrite {
  _id: string | null;
  name: string;
  projects: string[];
}

export interface IUser {
  _id: string | null;
  name: string;
  email: string;
  scope: string;
  organisation: string;
  projects: IProject[];
}

export interface IUserWrite {
  _id: string | null;
  name: string;
  email: string;
  scope: string;
  organisation: string;
  projects: string[];
}

export interface IOrganisationRead {
  _id: string | null;
  name: string;
  projects: IProject[];
}

export interface IRouterContext {
  ctxUser: [IUser, (values: IUser | null) => void];
  ctxOrg: [IOrganisationRead, (values: IOrganisationRead | null) => void];
  ctxProject: [IProject, (values: IProject | null) => void];
}
