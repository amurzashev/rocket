/* @flow */

import React from 'react';
import { renderRoutes } from 'react-router-config';
import Helmet from 'react-helmet';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import Nav from '../components/molecules/Nav';

import config from '../config';
import 'normalize.css/normalize.css'; // eslint-disable-line import/first

const App = ({ route }) => (
  <>
    <Helmet {...config.app} />
    <Nav />
    {renderRoutes(route.routes)}
  </>
);

App.propTypes = {
  route: PropTypes.shape({
    routes: PropTypes.array.isRequired,
  }).isRequired,
};

export default hot(module)(App);
