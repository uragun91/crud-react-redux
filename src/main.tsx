import { AppThemeProvider } from './themes/AppThemeProvider';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import React from 'react';
import App from './App';
import './main.scss';

const root = document.createElement('div');
document.body.insertAdjacentElement('afterbegin', root);

ReactDOM.createRoot(root as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </Provider>
  </React.StrictMode>,
);
