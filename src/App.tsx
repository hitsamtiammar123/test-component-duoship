import React from 'react';
import './App.scss';
import { Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Header } from './layout';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#6F6AF8'
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Container>
          <Header/>
        </Container>
    </ThemeProvider>
  );
}

export default App;
