/* @flow */

import { feedAction } from './actions';
import App from './app';
import { Home, Image, NotFound } from './components/pages';

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home, // Add your route here
        loadData: () => [
          feedAction.loadFeed(),
          // Add other pre-fetched actions here
        ],
      },
      {
        path: '/images/:id',
        exact: true,
        component: Image,
        // loadData: () => [usersAction.fetchUsersIfNeeded()],
      },
      {
        component: NotFound,
      },
    ],
  },
];
