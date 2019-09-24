/* eslint-disable import/prefer-default-export */
import { apiRequest } from './axios';
import {
  FEED_LOADING_BEGIN,
  FEED_LOADING_SUCCESS,
  FEED_LOADING_ERROR,
  FEED_IMAGE_LOADING_ERROR,
  FEED_IMAGE_LOADING_SUCCESS,
} from './types';

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
        // pos: feed.pos + 1, infinite scroll set up
        pos: feed.pos,
      });
    } catch (error) {
      dispatch({
        type: FEED_LOADING_ERROR,
      });
    }
  }
);

export const loadImage = id => (
  async (dispatch) => {
    dispatch({
      type: FEED_LOADING_BEGIN,
    });
    try {
      const { data } = await apiRequest.get(`images/${id}`);
      const { image } = data;
      dispatch({
        type: FEED_IMAGE_LOADING_SUCCESS,
        image,
      });
    } catch (error) {
      dispatch({
        type: FEED_IMAGE_LOADING_ERROR,
      });
    }
  }
);

export const shouldLoadImage = id => (
  (dispatch, getState) => {
    const { feed } = getState();
    const image = feed.items.find(img => img.id === id);
    if (!image) return dispatch(loadImage(id));
    return false;
  }
);

export const shouldLoadFeed = () => (
  (dispatch, getState) => {
    const { feed } = getState();
    if (feed.items.length < 10) {
      dispatch(loadFeed());
    }
    return false;
  }
);
