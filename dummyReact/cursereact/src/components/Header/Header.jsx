import React from 'react';
import logo from '../../logo.svg';
import {
  HeaderContainer,
  Logo,
  HeaderText,
  CodeHighlight,
  InstallButton,
  HeaderLink,
  InfoSection
} from './Header.styles';

const Header = ({ 
  showInstallPrompt, 
  onInstallClick,
  title = "Edit src/App.js and save to reload.",
  linkText = "Hey buddy ! Learn React using this and that ....",
  linkUrl = "https://reactjs.org"
}) => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="logo" />
      <HeaderText>
        Edit <CodeHighlight>src/App.js</CodeHighlight> and save to reload.
      </HeaderText>
      
      {showInstallPrompt && (
        <InstallButton onClick={onInstallClick}>
          📱 Add to Homescreen
        </InstallButton>
      )}
      
      <HeaderLink
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {linkText}
      </HeaderLink>
      
      <InfoSection>
        <p>🏠 This app can be installed on your homescreen!</p>
        <p>On mobile: Use browser menu → "Add to Home screen"</p>
        <p>On desktop: Look for install icon in address bar</p>
      </InfoSection>
    </HeaderContainer>
  );
};

export default Header;