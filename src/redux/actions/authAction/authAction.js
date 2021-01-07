import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import {
  SHOW_LOADING,
  SHOW_MESSAGE,
  SHOW_MESSAGE_BY_CODE,
} from '../../reducers/feedbackReducer/feedbackReducer';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const login = (email, password) => {
  return (dispatch) => {
    dispatch({type: SHOW_LOADING, data: true});
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
        if (response) {
          dispatch({type: LOGIN_SUCCESS, data: true});
        }
      })
      .catch((err) => {
        console.log(
          `[authAction.js::login()] err.code: "${err.code}" - "${err.message}"`,
        );
        dispatch({type: SHOW_LOADING, data: false});
        dispatch({type: SHOW_MESSAGE_BY_CODE, data: err.code});
      });
  };
};

export const logout = () => {
  return (dispatch) =>
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({type: 'LOG_OUT'});
      });
};
