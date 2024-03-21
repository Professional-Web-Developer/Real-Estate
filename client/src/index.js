import React from 'react';
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom/client';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import {BrowserRouter} from 'react-router-dom'
import { persistor, store } from './redux/Store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>

    </PersistGate>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);
