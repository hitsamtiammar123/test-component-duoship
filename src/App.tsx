import React from 'react';
import './App.scss';
import { Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Header, SearchBar, Body } from './layout';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#6F6AF8'
    },
    info: {
      main: '#ffffff'
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Container>
          <Header/>
          <SearchBar />
          <Body />
        </Container>
    </ThemeProvider>
  );
}

export default App;
