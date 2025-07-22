import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const ChartCard = styled(Card)`
  border-radius: 12px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border: 1px solid #f3f4f6;
  height: 400px;
`;

const ChartHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Legend = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const LegendDot = styled(Box)`
  width: 12px;
  height: 12px;
  background-color: #10b981;
  border-radius: 50%;
`;

// Sales data that matches the chart in the image
const salesData = [
  { month: 'Jan', sales: 4500 },
  { month: 'Feb', sales: 12500 },
  { month: 'Mar', sales: 1800 },
  { month: 'Apr', sales: 5200 },
  { month: 'May', sales: 9800 },
  { month: 'Jun', sales: 5500 },
  { month: 'Jul', sales: 6200 },
  { month: 'Aug', sales: 12800 },
  { month: 'Sep', sales: 7200 },
  { month: 'Oct', sales: 4800 },
  { month: 'Nov', sales: 1200 },
  { month: 'Dec', sales: 1400 },
];

const SalesChart: React.FC = () => {
  return (
    <ChartCard>
      <CardContent sx={{ p: 3, height: '100%' }}>
        <ChartHeader>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Sales
          </Typography>
          <Legend>
            <LegendDot />
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
              Sales
            </Typography>
          </Legend>
        </ChartHeader>
        
        <Box sx={{ width: '100%', height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={salesData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              barCategoryGap="20%"
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6b7280' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6b7280' }}
                tickFormatter={(value) => {
                  if (value >= 1000) {
                    return `${value / 1000}k`;
                  }
                  return value.toString();
                }}
              />
              <Bar 
                dataKey="sales" 
                fill="#10b981" 
                radius={[4, 4, 0, 0]}
                maxBarSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </ChartCard>
  );
};

export default SalesChart;