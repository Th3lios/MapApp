import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {
  signInAnalytics,
  signInFailAnalytics,
  signUpAnalytics,
  signUpFailAnalytics,
} from '../../../utils/analytics';
import {
  SHOW_LOADING,
  SHOW_MESSAGE_BY_CODE,
  CLEAR_MESSAGE,
} from '../../reducers/feedbackReducer/feedbackReducer';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOG_OUT = 'LOG_OUT';

export const signIn = (email, password) => {
  return (dispatch) => {
    dispatch({type: SHOW_LOADING, data: true});
    dispatch({type: CLEAR_MESSAGE});
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
        if (response) {
          dispatch({
            type: LOGIN_SUCCESS,
            data: {auth: true, user_id: response.user.uid},
          });
          dispatch({type: SHOW_LOADING, data: false});
          signInAnalytics(response.user.uid);
        }
      })
      .catch((err) => {
        console.log(
          `[authAction.js:signIn()] err.code: "${err.code}" - "${err.message}"`,
        );
        signInFailAnalytics();
        dispatch({type: SHOW_LOADING, data: false});
        dispatch({type: SHOW_MESSAGE_BY_CODE, data: err.code});
      });
  };
};

export const signUp = (username, email, password) => {
  return (dispatch) => {
    dispatch({type: SHOW_LOADING, data: true});
    dispatch({type: CLEAR_MESSAGE});
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response);
        if (response) {
          dispatch({
            type: LOGIN_SUCCESS,
            data: {auth: true, user_id: response.user.uid},
          });
          dispatch({type: SHOW_LOADING, data: false});
          signUpAnalytics(response.user.uid);
          addUser({
            uid: response.user.uid,
            email: email,
            username: username,
          });
        }
      })
      .catch((err) => {
        console.log(
          `[authAction.js::signUp()] err.code: "${err.code}" - "${err.message}"`,
        );
        signUpFailAnalytics();
        dispatch({type: SHOW_LOADING, data: false});
        dispatch({type: SHOW_MESSAGE_BY_CODE, data: err.code});
      });
  };
};

export const addUser = (user) => {
  firebase
    .firestore()
    .collection('users')
    .add({
      uid: user.uid,
      email: user.email,
      username: user.username,
      createAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .catch((err) => console.log(err));
};

export const signOut = () => {
  return (dispatch) =>
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({type: LOG_OUT});
      });
};
