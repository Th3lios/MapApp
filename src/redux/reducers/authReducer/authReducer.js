import * as actionTypes from '../../actions/authAction/authAction';

const initialState = {
  auth: undefined,
  user_id: undefined,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        auth: action.data.auth,
        user_id: action.data.user_id,
      };
    case actionTypes.LOG_OUT:
      return {
        ...state,
        auth: false,
        user_id: undefined,
      };
    default:
      return state;
  }
};
