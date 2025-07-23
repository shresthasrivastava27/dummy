import React from 'react';
import { HeaderContainer } from '../../components';
import { AppContainer } from '../../components/Header/Header.styles';

const About = () => {
  return (
    <AppContainer>
      <HeaderContainer 
        linkText="Learn more about React and its ecosystem"
        linkUrl="https://reactjs.org/docs/getting-started.html"
      />
      {/* Additional page content can go here */}
    </AppContainer>
  );
};

export default About;