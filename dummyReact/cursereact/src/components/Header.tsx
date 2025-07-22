import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import styled from 'styled-components';

const HeaderContainer = styled(Box)`
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLeft = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const HeaderRight = styled(Box)`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const UserInfo = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <Typography variant="h4" color="primary" sx={{ fontWeight: 600, mb: 0.5 }}>
          Dashboard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          last updated 15 Jul 2025 18:13
        </Typography>
      </HeaderLeft>
      
      <HeaderRight>
        <UserInfo>
          <Typography variant="body2" sx={{ fontWeight: 500, fontSize: '0.875rem' }}>
            Wade Warren
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Admin
          </Typography>
        </UserInfo>
        <Avatar 
          sx={{ 
            width: 40, 
            height: 40,
            bgcolor: '#f3f4f6',
            color: '#374151',
            fontSize: '0.875rem',
            fontWeight: 500,
          }}
        >
          WW
        </Avatar>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;