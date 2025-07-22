import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import styled from 'styled-components';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const BreakdownCard = styled(Card)`
  border-radius: 12px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border: 1px solid #f3f4f6;
  height: 400px;
`;

const ChartContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const LegendContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

const LegendItem = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LegendLabel = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LegendDot = styled(Box)<{ color: string }>`
  width: 12px;
  height: 12px;
  background-color: ${props => props.color};
  border-radius: 50%;
`;

// Sales breakdown data
const breakdownData = [
  { name: 'Test sales', value: 123000, color: '#10b981' },
  { name: 'Platform sales', value: 101000, color: '#4ade80' },
];

const SalesBreakdown: React.FC = () => {
  return (
    <BreakdownCard>
      <CardContent sx={{ p: 3, height: '100%' }}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 3 }}>
          Sales breakdown
        </Typography>
        
        <ChartContainer>
          <Box sx={{ width: 200, height: 200, position: 'relative' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={breakdownData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  startAngle={90}
                  endAngle={450}
                  dataKey="value"
                  stroke="none"
                >
                  {breakdownData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            
            {/* Center label */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 600, color: '#10b981' }}>
                $123,000
              </Typography>
            </Box>
          </Box>
          
          <LegendContainer>
            {breakdownData.map((item, index) => (
              <LegendItem key={index}>
                <LegendLabel>
                  <LegendDot color={item.color} />
                  <Typography variant="body2" sx={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    {item.name} (${(item.value / 1000).toFixed(0)},000)
                  </Typography>
                </LegendLabel>
              </LegendItem>
            ))}
          </LegendContainer>
        </ChartContainer>
      </CardContent>
    </BreakdownCard>
  );
};

export default SalesBreakdown;