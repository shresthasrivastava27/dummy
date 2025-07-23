import React from 'react';
import { HeaderContainer } from './components';
import { AppContainer } from './components/Header/Header.styles';
import { GlobalStyles } from './styles';

function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <HeaderContainer />
      </AppContainer>
    </>
  );
}

export default App;
