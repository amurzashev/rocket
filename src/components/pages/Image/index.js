/* @flow */
import React from 'react';
import loadable from '@loadable/component';

const Image = loadable(() => import('./Image'));

export default props => <Image {...props} />;
