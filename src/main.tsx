import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store.ts';
import ReactDOM from 'react-dom/client';
import App from './components/App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
