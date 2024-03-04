// actions.js

// Action types
export const RESET_DONATION_PROGRESS = 'RESET_DONATION_PROGRESS';
export const SET_ADMIN_STATUS = 'SET_ADMIN_STATUS';

// Action creators
export const resetDonationProgress = () => ({
  type: RESET_DONATION_PROGRESS,
});

export const setAdminStatus = (isAdmin) => ({
  type: SET_ADMIN_STATUS,
  payload: isAdmin,
});
