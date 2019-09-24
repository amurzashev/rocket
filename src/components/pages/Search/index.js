/* @flow */
import React from 'react';
import loadable from '@loadable/component';

const Search = loadable(() => import('./Search'));

export default props => <Search {...props} />;
