import * as actionTypes from '../../actions/authAction/authAction';

const initialState = {
  auth: undefined,
  currUser: undefined,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_AUTHENTICATION:
      return {
        ...state,
        auth: true,
        currUser: action.data,
      };
    default:
      return state;
  }
};
