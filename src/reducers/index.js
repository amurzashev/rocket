/* @flow */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import home from './home';
import feed from './feed';

const reducers = {
  home,
  feed,
};

export default history => combineReducers({ router: connectRouter(history), ...reducers });
