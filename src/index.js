import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import ShopContextProvider from './context/ShopContext'; // Adjust this path if needed


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </React.StrictMode>
);

// Measure performance: pass a function to log results
// Example: reportWebVitals(console.log)
// reportWebVitals();
//reportWebVitals();
