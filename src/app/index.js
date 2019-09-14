/* @flow */

import React from 'react';
import { renderRoutes } from 'react-router-config';
import Helmet from 'react-helmet';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';

import config from '../config';
import 'normalize.css/normalize.css'; // eslint-disable-line import/first

const App = ({ route }) => (
  <>
    <nav>navigation</nav>
    <div id="root">
      <Helmet {...config.app} />
      {/* Navbar here??? */}
      {/* Child routes won't render without this */}
      {renderRoutes(route.routes)}
    </div>
  </>
);

App.propTypes = {
  route: PropTypes.shape({
    routes: PropTypes.array.isRequired,
  }).isRequired,
};

export default hot(module)(App);
