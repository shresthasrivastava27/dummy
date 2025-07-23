import styled, { keyframes } from 'styled-components';

// Animation for the logo spin
const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// Header container styled component
export const HeaderContainer = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  text-align: center;
`;

// Logo styled component
export const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
  
  @media (prefers-reduced-motion: no-preference) {
    animation: ${logoSpin} infinite 20s linear;
  }
`;

// Text paragraph styled component
export const HeaderText = styled.p`
  margin: 20px 0;
`;

// Code highlight styled component
export const CodeHighlight = styled.code`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
`;

// Install button styled component
export const InstallButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #61dafb;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 20px 0;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #4fa8c5;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(97, 218, 251, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

// Link styled component
export const HeaderLink = styled.a`
  color: #61dafb;
  text-decoration: none;
  margin: 20px 0;
  transition: color 0.3s ease;
  
  &:hover {
    color: #4fa8c5;
    text-decoration: underline;
  }
  
  &:visited {
    color: #61dafb;
  }
`;

// Info section styled component
export const InfoSection = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: #999;
  max-width: 600px;
  
  p {
    margin: 8px 0;
    line-height: 1.4;
  }
`;

// Container wrapper for the entire app
export const AppContainer = styled.div`
  text-align: center;
  min-height: 100vh;
`;