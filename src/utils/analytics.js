import firebase from '@react-native-firebase/app';
import analytics from '@react-native-firebase/analytics';

export const signInAnalytics = async (user_id) => {
  await analytics().logEvent('event_signin', {user_id: user_id});
};

export const signInFailAnalytics = async () => {
  await analytics().logEvent('event_signin_fail');
};

export const signUpAnalytics = async (user_id) => {
  await analytics().logEvent('event_signup', {user_id: user_id});
};

export const signUpFailAnalytics = async () => {
  await analytics().logEvent('event_signup_fail');
};

export const homeAnalytics = async (user_id) => {
  await analytics().logEvent('event_home', {user_id: user_id});
};

export const changeLocationAnalytics = async (address) => {
  await analytics().logEvent('event_change_location', {address: address});
};
