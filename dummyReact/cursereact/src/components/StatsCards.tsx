import React from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import styled from 'styled-components';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AssignmentIcon from '@mui/icons-material/Assignment';

const StatsCard = styled(Card)`
  border-radius: 12px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border: 1px solid #f3f4f6;
`;

const CardHeader = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`;

const IconWrapper = styled(Box)<{ color: string }>`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.color};
`;

const ValueContainer = styled(Box)`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

const PercentageChange = styled(Typography)<{ positive: boolean }>`
  color: ${props => props.positive ? '#059669' : '#dc2626'};
  font-size: 0.75rem;
  font-weight: 500;
`;

interface StatCardData {
  icon: React.ReactNode;
  iconColor: string;
  title: string;
  value: string;
  change: string;
  positive: boolean;
}

const statsData: StatCardData[] = [
  {
    icon: <PeopleIcon />,
    iconColor: '#10b981',
    title: 'Total customers',
    value: '112,398',
    change: '+4%',
    positive: true,
  },
  {
    icon: <BusinessIcon />,
    iconColor: '#3b82f6',
    title: 'Total platform owners',
    value: '57,097',
    change: '+5%',
    positive: true,
  },
  {
    icon: <MonetizationOnIcon />,
    iconColor: '#10b981',
    title: 'Total sales',
    value: '$278,021',
    change: '+6.5%',
    positive: true,
  },
  {
    icon: <AssignmentIcon />,
    iconColor: '#10b981',
    title: 'Total tests',
    value: '203',
    change: '+12',
    positive: true,
  },
];

const StatsCards: React.FC = () => {
  return (
    <Grid container spacing={3}>
      {statsData.map((stat, index) => (
        <Grid item xs={12} sm={6} lg={3} key={index}>
          <StatsCard>
            <CardContent sx={{ p: 3 }}>
              <CardHeader>
                <IconWrapper color={stat.iconColor}>
                  {stat.icon}
                </IconWrapper>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                  {stat.title}
                </Typography>
              </CardHeader>
              
              <ValueContainer>
                <Typography variant="h4" sx={{ fontWeight: 600, fontSize: '1.75rem' }}>
                  {stat.value}
                </Typography>
                <PercentageChange positive={stat.positive}>
                  {stat.change}
                </PercentageChange>
              </ValueContainer>
            </CardContent>
          </StatsCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatsCards;