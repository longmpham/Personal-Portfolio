import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#629749',
      main: '#33691e',
      dark: '#003d00',
      contrastText: '#fff',
    },
    secondary: {
      light: '#e6ceff',
      main: '#b39ddb',
      dark: '#836fa9',
      contrastText: '#000',
    },
  },
});


const routing = (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider> 
    </BrowserRouter>
  );
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
