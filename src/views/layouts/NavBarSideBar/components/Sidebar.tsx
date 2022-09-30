import { SideBarStyle, SideBarButtonStyle } from './styles';
import { ISidebarButton } from '../INavBarSideBar';
import { Typography } from '@mui/material';

export function StyledSideBar(props: { buttons?: ISidebarButton[] }) {
  const { buttons } = props;
  return (
    <SideBarStyle>
      {buttons &&
        buttons.map((button, index) => (
          <SideBarButtonStyle
            onClick={() => button.onClickEvent()}
            key={`btn_${index}`}
          >
            <Typography variant="body2">{button.title}</Typography>
          </SideBarButtonStyle>
        ))}
    </SideBarStyle>
  );
}
