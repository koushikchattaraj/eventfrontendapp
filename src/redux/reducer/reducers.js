import { SET_LANDING_PAGE,SET_BUSINESS_CATEGORY } from "../action/actionTypes";

const initialState = {
  ladndingPageStatus: false,
  businessCategory : ['Wedding','Cattering','Photography','Decoration','Sound & Light','Makeup Artist','Vanue Management','Fooding','Loadiging']
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANDING_PAGE:
      return {
        ...state,
        ladndingPageStatus: false,
      };
      case SET_BUSINESS_CATEGORY:
      return {
        ...state,
        businessCategory: action.payload,
      };
    default:
      return state;
  }
};
