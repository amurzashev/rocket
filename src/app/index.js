/* @flow */

import React from 'react';
import { renderRoutes } from 'react-router-config';
import Helmet from 'react-helmet';
import { hot } from 'react-hot-loader';

import config from '../config';
import 'normalize.css/normalize.css'; // eslint-disable-line import/first

type Props = { route: Object };

const App = ({ route }: Props) => (
  <div>
    <Helmet {...config.app} />
    {/* Child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
);

export default hot(module)(App);
