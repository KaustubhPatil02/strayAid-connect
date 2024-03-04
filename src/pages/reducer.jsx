// reducer.js

import { RESET_DONATION_PROGRESS, SET_ADMIN_STATUS } from './actions';

const initialState = {
  isAdmin: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_DONATION_PROGRESS:
      return {
        ...state,
        donationProgress: 0,
      };
    case SET_ADMIN_STATUS:
      return {
        ...state,
        isAdmin: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
