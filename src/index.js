import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(rootReducer);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
