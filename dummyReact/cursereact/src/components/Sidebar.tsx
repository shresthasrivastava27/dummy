import React from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import styled from 'styled-components';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BusinessIcon from '@mui/icons-material/Business';
import GroupIcon from '@mui/icons-material/Group';
import CategoryIcon from '@mui/icons-material/Category';

const SidebarContainer = styled(Box)`
  width: 240px;
  background-color: white;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
`;

const BrandLogo = styled(Box)`
  background-color: #10b981;
  color: white;
  padding: 16px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.125rem;
`;

const NavigationContainer = styled(Box)`
  flex: 1;
  padding: 16px 0;
`;

const StyledListItem = styled(ListItem)<{ active?: boolean }>`
  margin: 4px 12px;
  border-radius: 8px;
  background-color: ${props => props.active ? '#dcfce7' : 'transparent'};
  color: ${props => props.active ? '#059669' : '#6b7280'};
  
  &:hover {
    background-color: #f3f4f6;
  }
  
  .MuiListItemIcon-root {
    color: ${props => props.active ? '#059669' : '#6b7280'};
    min-width: 40px;
  }
`;

interface NavigationItem {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}

const navigationItems: NavigationItem[] = [
  { label: 'Dashboard', icon: <DashboardIcon />, active: true },
  { label: 'Tests', icon: <AssignmentIcon /> },
  { label: 'Registered companies', icon: <BusinessIcon /> },
  { label: 'Industries', icon: <CategoryIcon /> },
  { label: 'User management', icon: <GroupIcon /> },
];

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <BrandLogo>
        BRANDLOGO
      </BrandLogo>
      
      <NavigationContainer>
        <List component="nav">
          {navigationItems.map((item, index) => (
            <StyledListItem key={index} active={item.active}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: '0.875rem',
                  fontWeight: item.active ? 500 : 400,
                }}
              />
            </StyledListItem>
          ))}
        </List>
      </NavigationContainer>
    </SidebarContainer>
  );
};

export default Sidebar;