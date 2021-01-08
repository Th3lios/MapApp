import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/actions/authAction/authAction';

const MapScreen = () => {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(logout());
  };
  return (
    <TouchableOpacity onPress={logOut}>
      <Text>Log Out </Text>
    </TouchableOpacity>
  );
};

export default MapScreen;
