import React from 'react';
import { Box, Grid } from '@mui/material';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Header from './Header';
import StatsCards from './StatsCards';
import SalesChart from './SalesChart';
import SalesBreakdown from './SalesBreakdown';

const DashboardContainer = styled(Box)`
  display: flex;
  min-height: 100vh;
  background-color: #f9fafb;
`;

const MainContent = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ContentArea = styled(Box)`
  flex: 1;
  padding: 24px;
`;

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <Sidebar />
      <MainContent>
        <Header />
        <ContentArea>
          <Grid container spacing={3}>
            {/* Stats Cards */}
            <Grid item xs={12}>
              <StatsCards />
            </Grid>
            
            {/* Charts Section */}
            <Grid item xs={12} lg={8}>
              <SalesChart />
            </Grid>
            
            <Grid item xs={12} lg={4}>
              <SalesBreakdown />
            </Grid>
          </Grid>
        </ContentArea>
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;