/* eslint-disable import/prefer-default-export */
import { apiRequest } from './axios';
import { FEED_LOADING_BEGIN, FEED_LOADING_SUCCESS, FEED_LOADING_ERROR } from './types';

export const loadFeed = () => (
  async (dispatch, getState) => {
    dispatch({
      type: FEED_LOADING_BEGIN,
    });
    const { feed } = getState();
    try {
      const { data } = await apiRequest.get(`list?pos=${feed.pos}`);
      const { items } = data;
      dispatch({
        type: FEED_LOADING_SUCCESS,
        items,
        pos: feed.pos + 1,
      });
    } catch (error) {
      dispatch({
        type: FEED_LOADING_ERROR,
      });
    }
  }
);

export const shouldLoadFeed = () => (
  (dispatch, getState) => {
    const { feed } = getState();
    if (feed.items < 10) {
      dispatch(loadFeed());
    }
    return false;
  }
);
