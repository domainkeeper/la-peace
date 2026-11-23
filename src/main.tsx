import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import App from './App';
// @ts-ignore
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster
        position="top-right"
        toastOptions={{
          className: 'bg-gray-900 text-white border-none rounded-xl font-medium shadow-xl',
          duration: 3000,
          iconTheme: {
            primary: '#000',
            secondary: '#fff',
          },
        }}
      />
    </BrowserRouter>
  </React.StrictMode>,
);