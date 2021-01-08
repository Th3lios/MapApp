import * as actionTypes from '../../actions/authAction/authAction';

const initialState = {
  auth: undefined,
  currUser: undefined,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        auth: action.data,
      };
    case actionTypes.LOG_OUT:
      return {
        ...state,
        auth: action.data,
      };
    default:
      return state;
  }
};
