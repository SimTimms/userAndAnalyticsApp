export interface ISidebarButton {
  title?: string;
  onClickEvent: () => void;
}

export interface INavBarSideBar {
  children?: any;
  breadcrumbs?: string[];
  width?: number;
  isOpen?: boolean;
  title?: string;
  sidebarButtons?: ISidebarButton[];
}
