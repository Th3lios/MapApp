import {PermissionsAndroid} from 'react-native';

export const requestLocationPermission = async () => {
  return await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  );
};
