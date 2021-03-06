import {
  CLEAR_MESSAGE,
  SHOW_MESSAGE,
  SHOW_MESSAGE_BY_CODE,
  VIEW_IS_LOADING,
  SHOW_LOADING,
} from '../../reducers/feedbackReducer/feedbackReducer';

export function showMessage(message) {
  return (dispatch) => dispatch({type: SHOW_MESSAGE, data: message});
}

export function showLoading() {
  return (dispatch) => dispatch({type: SHOW_LOADING, data: true});
}

export function showMessageByCode(messageCode) {
  return (dispatch) =>
    dispatch({type: SHOW_MESSAGE_BY_CODE, data: messageCode});
}
export function clearMessage() {
  return (dispatch) => dispatch({type: CLEAR_MESSAGE});
}
export function setViewLoading() {
  return (dispatch) => dispatch({type: VIEW_IS_LOADING, data: true});
}
