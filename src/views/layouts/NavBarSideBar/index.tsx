import {
  StyledPageWrapper,
  StyledNavBar,
  StyledRow,
  StyledSideBar,
  StyledContent,
} from './components';
import { INavBarSideBar } from './INavBarSideBar';

export const NavBarSideBarLayout = (props: INavBarSideBar) => {
  const { children, breadcrumbs, title, sidebarButtons } = props;
  return (
    <StyledPageWrapper>
      <StyledNavBar breadcrumbs={breadcrumbs} title={title} />
      <StyledRow>
        <StyledSideBar buttons={sidebarButtons}></StyledSideBar>
        <StyledContent>{children}</StyledContent>
      </StyledRow>
    </StyledPageWrapper>
  );
};
