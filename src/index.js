import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainRoutes } from '../src/routes';
import { GlobalStyles } from './styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <MainRoutes/>
  </React.StrictMode>,
);
