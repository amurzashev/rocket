/* eslint-disable import/prefer-default-export */
import { apiRequest } from './axios';
import { FEED_LOADING_BEGIN, FEED_LOADING_SUCCESS, FEED_LOADING_ERROR } from './types';

export const loadFeed = () => (
  (dispatch, getState) => {
    dispatch({
      type: FEED_LOADING_BEGIN,
    });
    const { feed } = getState();
    apiRequest.get(`list?pos=${feed.pos}`)
      .then(response => {
        dispatch({
          type: FEED_LOADING_SUCCESS,
          items: response.data.items,
          pos: feed.pos + 1,
        });
      })
      .catch(error => {
        console.log(error.response);
        dispatch({
          type: FEED_LOADING_ERROR,
        });
      });
  }
);
