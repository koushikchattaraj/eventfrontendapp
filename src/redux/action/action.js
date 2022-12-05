import { SET_LANDING_PAGE,SET_BUSINESS_CATEGORY } from "../action/actionTypes";

export const setLandingStatus = () => {
  return {
    type: SET_LANDING_PAGE,
  };
};

export const setBusinessCategory = (businessCategory) => {
  return {
    type: SET_BUSINESS_CATEGORY,
    payload:businessCategory
  };
};
