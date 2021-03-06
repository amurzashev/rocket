/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* @flow */

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { renderRoutes } from 'react-router-config';
import { loadableReady } from '@loadable/component';
import { ThemeProvider } from 'emotion-theming';
import theme from './utils/theme';
import configureStore from './utils/configureStore';
import routes from './routes';

// Get the initial state from server-side rendering
const initialState = window.__INITIAL_STATE__;
const { store, history } = configureStore({ initialState });

const render = Routes => {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;

  renderMethod(
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            {renderRoutes(Routes)}
          </ConnectedRouter>
        </Provider>
      </AppContainer>
    </ThemeProvider>,
    // $FlowFixMe: isn't an issue
    document.getElementById('app-container-content'),
  );
};

// loadable-component setup
loadableReady(() => {
  render(routes);
});

if (module.hot) {
  // Enable webpack hot module replacement for routes
  module.hot.accept('./routes', () => {
    try {
      const nextRoutes = require('./routes').default;
      render(nextRoutes);
    } catch (error) {
      console.error(`==> 😭  Routes hot reloading error ${error}`);
    }
  });
}
