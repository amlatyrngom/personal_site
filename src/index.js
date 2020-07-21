// React
import React from 'react';
import ReactDOM from 'react-dom';

// MUI
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// Local
import App from './components/App';
import "./index.css";
import {unregister} from './registerServiceWorker';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#32681d',
      contrastText: "#fff",
    },
    secondary: {
      main: '#1b5e20',
      contrastText: "#fff",
    },
    textPrimary: "#ffffff",
    textSecondary: "#ffffff",
  },
})


ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </MuiThemeProvider>
  , document.getElementById('root'));
unregister();