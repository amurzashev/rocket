/* @flow */

import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Export this for unit testing more easily
/* istanbul ignore next */
export const fetchUser = (
  userId,
  URL = API_URL,
) => async (dispatch) => {
  dispatch({ type: 'USER_REQUESTING', userId });

  try {
    const { data } = await axios.get(`${URL}/${userId}`);

    /* istanbul ignore next */
    dispatch({ type: 'USER_SUCCESS', userId, data });
  } catch (err) {
    /* istanbul ignore next */
    dispatch({ type: 'USER_FAILURE', userId, err: err.message });
  }
};

/* istanbul ignore next */
const shouldFetchUser = (state, userId) => {
  const userInfo = state.userInfo[userId];

  if (userInfo && userInfo.readyStatus === 'USER_SUCCESS') return false;

  return true;
};

/* istanbul ignore next */
export const fetchUserIfNeeded = (userId) => (
  dispatch,
  getState,
) => {
  /* istanbul ignore next */
  if (shouldFetchUser(getState(), userId)) return dispatch(fetchUser(userId));

  /* istanbul ignore next */
  return null;
};
