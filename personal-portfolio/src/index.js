import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom'

const routing = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
ReactDOM.render(routing, document.getElementById('root'));
=======
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter } from 'react-router-dom'


// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    , document.getElementById('root'));







>>>>>>> ba78b4b899409e4b4ff96bc06b776d9a7bc3d54c

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
