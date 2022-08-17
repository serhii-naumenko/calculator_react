import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { App } from './App';
import store from './redux/store';

const rootElement = document.getElementById('root');
const Root = createRoot(rootElement!);

Root.render(
  <Provider store={store}>
    <StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </StrictMode>
  </Provider>,
);
