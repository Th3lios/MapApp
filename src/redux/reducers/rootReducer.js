import AsyncStorage from '@react-native-community/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';

// reducers
import {authReducer} from './authReducer/authReducer';

export default combineReducers({
  auth: persistReducer(
    {
      key: 'auth',
      storage: AsyncStorage,
    },
    authReducer,
  ),
});
