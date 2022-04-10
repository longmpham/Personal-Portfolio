import React from 'react';
// import ReactDOM from 'react-dom'; // react 17
import { createRoot } from "react-dom/client" // react 18

import './index.css';
import App from './App';

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);