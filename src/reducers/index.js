/* @flow */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import feed from './feed';

const reducers = {
  feed,
};

export default history => combineReducers({ router: connectRouter(history), ...reducers });
