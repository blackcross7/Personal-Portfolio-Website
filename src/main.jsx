import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';      // <--- THIS IMPORT IS REQUIRED

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
