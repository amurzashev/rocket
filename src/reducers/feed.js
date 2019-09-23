import {
  READY_STATUS_AWAIT,
  READY_STATUS_LOADING,
  FEED_LOADING_BEGIN,
  FEED_LOADING_SUCCESS,
  READY_STATUS_SUCCESS,
  FEED_LOADING_ERROR,
  READY_STATUS_ERROR,
  FEED_IMAGE_LOADING_SUCCESS,
} from '../actions/types';

const initialState = {
  readyStatus: READY_STATUS_AWAIT,
  items: [],
  pos: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FEED_LOADING_BEGIN:
      return { ...state, readyStatus: READY_STATUS_LOADING };
    case FEED_LOADING_SUCCESS:
      return {
        ...state,
        readyStatus: READY_STATUS_SUCCESS,
        items: action.items,
        pos: action.pos,
      };
    case FEED_LOADING_ERROR:
      return { ...state, readyStatus: READY_STATUS_ERROR };
    case FEED_IMAGE_LOADING_SUCCESS:
      return { ...state, items: [...state.items, action.image] };
    default:
      return state;
  }
};
