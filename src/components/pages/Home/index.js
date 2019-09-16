/* @flow */
import React from 'react';
import loadable from '@loadable/component';

const Home = loadable(() => import('./Home'), {
  fallback: <p>hello</p>,
});

export default props => <Home {...props} />;
