import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux';
// import store from './store'; // Your Redux store
// import StripeProvider from './StripeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <StripeProvider>
     <Provider store={store}> */}
    <App />
     {/* </Provider>
      
    </StripeProvider> */}
  </React.StrictMode>
)
