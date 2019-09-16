/* @flow */
import React from 'react';
import loadable from '@loadable/component';

const Image = loadable(() => import('./Image'), {
  fallback: <p>pic</p>,
});

export default props => <Image {...props} />;
