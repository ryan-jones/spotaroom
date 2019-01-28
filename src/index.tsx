import * as React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.scss';
import configureStore from './store';
import { Provider } from 'react-redux';

const root = document.getElementById('root') as HTMLElement

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(
      <Provider store={store}>
        <NextApp />
      </Provider>,
      root
    );
  });
}