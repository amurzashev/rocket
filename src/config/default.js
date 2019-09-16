/* @flow */

export default {
  host: process.env.NODE_HOST || 'localhost', // Define your host from 'package.json'
  port: process.env.PORT || '8080',
  app: {
    htmlAttributes: { lang: 'en' },
    title: 'RocketFirm Unsplash API',
    titleTemplate: 'RocketFirm Unsplash API - %s',
    meta: [
      {
        name: 'description',
        content: 'The best react universal starter boilerplate in the world.',
      },
    ],
  },
};
