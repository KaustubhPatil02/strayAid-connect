import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './pages/Donation/store'; // Your Redux store
import StripeProvider from './pages/Donation/StripeProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <StripeProvider>
     <Provider store={store}>
    <App />
    </Provider>
    </StripeProvider>
  </React.StrictMode>
);
