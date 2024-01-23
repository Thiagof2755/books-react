import React, { createFactory } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden; /* Remove a barra de rolagem horizontal */
    }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
    }

    li {
      list-style: none;
    }

    ::-webkit-scrollbar {
      width: 10px;
    }
    
    ::-webkit-scrollbar-track {
      background-color: #6b6b6b;
    }
    
    ::-webkit-scrollbar-thumb {
      background-color: #585858;
      border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background-color: #424242;
    }
`

// ...
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);