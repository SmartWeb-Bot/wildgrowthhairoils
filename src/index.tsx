import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Ensure the element exists and is not null before passing it to ReactDOM
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

