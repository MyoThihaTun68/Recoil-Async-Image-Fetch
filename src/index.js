// src/main.jsx (or index.js)

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil'; // <--- MUST be imported
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 🔑 This is the ABSOLUTE MUST-HAVE wrapper 🔑 */}
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);