import React from 'react';
import {
  MainContainer,
  LeftPanel,
  RightPanel,
  BottomDescription,
  DescriptionTitle,
  DescriptionText,
  DotsIndicator,
  Dot,
} from '../styles/styles';
import UserManagement from '../components/UserManagement';
import Sidebar from '../components/Sidebar';
import SignupForm from '../components/SignupForm';

const Home: React.FC = () => {
  return (
    <MainContainer>
      <LeftPanel>
        <Sidebar />
        <UserManagement />
        <BottomDescription>
          <DescriptionTitle>
            User Management
          </DescriptionTitle>
          <DescriptionText>
            Effortlessly manage user profiles and permissions across your platform
          </DescriptionText>
          <DotsIndicator>
            <Dot active />
            <Dot />
            <Dot />
          </DotsIndicator>
        </BottomDescription>
      </LeftPanel>

      <RightPanel>
        <SignupForm />
      </RightPanel>
    </MainContainer>
  );
};

export default Home;