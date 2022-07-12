import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainRoutes } from '../src/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainRoutes/>
  </React.StrictMode>,
);
