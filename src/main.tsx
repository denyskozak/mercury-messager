import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppBootstrap } from '@app/bootstrap';
import './shared/ui/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppBootstrap />
  </React.StrictMode>
);
