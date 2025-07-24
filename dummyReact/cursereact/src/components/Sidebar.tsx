import React from 'react';
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Group as GroupIcon,
  Assessment as AssessmentIcon,
} from '@mui/icons-material';
import {
  Sidebar as SidebarContainer,
  SidebarIcon,
  UserAvatarContainer,
  StyledAvatar,
} from '../styles/styles';

const Sidebar: React.FC = () => {
  return (
    <>
      <SidebarContainer>
        <SidebarIcon>
          <DashboardIcon sx={{ color: 'white', fontSize: 24 }} />
        </SidebarIcon>
        <SidebarIcon active>
          <PeopleIcon sx={{ color: 'white', fontSize: 24 }} />
        </SidebarIcon>
        <SidebarIcon>
          <GroupIcon sx={{ color: 'white', fontSize: 24 }} />
        </SidebarIcon>
        <SidebarIcon>
          <AssessmentIcon sx={{ color: 'white', fontSize: 24 }} />
        </SidebarIcon>
      </SidebarContainer>
      
      <UserAvatarContainer>
        <StyledAvatar>U</StyledAvatar>
      </UserAvatarContainer>
    </>
  );
};

export default Sidebar;