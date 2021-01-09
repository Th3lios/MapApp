import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/actions/authAction/authAction';
import MapView from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import Geolocation from 'react-native-geolocation-service';
Icon.loadFont();
const {width, height} = Dimensions.get('screen');
const MapScreen = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    if (Platform.OS === 'ios') {
      Geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLocation({
            latitude: latitude,
            longitude: longitude,
          });
          console.log(position);
        },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }

    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'ReactNativeCode Location Permission',
          message: 'ReactNativeCode App needs access to your location ',
        },
      );
      if (granted) {
        Geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            setLocation({
              latitude: latitude,
              longitude: longitude,
            });
            console.log(position);
          },
          (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: false, timeout: 30000},
        );
      }
    }
  };

  const findMyLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLocation({
          latitude: latitude,
          longitude: longitude,
        });
        console.log(position, Location);
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: false, timeout: 30000},
    );
  };

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
      />
      <TouchableOpacity onPress={logOut} style={styles.button}>
        <View style={styles.logOutWrapper}>
          <Icon name="log-out" size={20} color="white" />
          <Text style={styles.text}>Logout </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={findMyLocation} style={styles.myLocation}>
        <View style={styles.logOutWrapper}>
          <Icon name="compass-outline" size={24} color="white" />
          <Text style={styles.text} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logOutWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#3333',
    borderRadius: 10,
    position: 'absolute',
    top: 20,
    right: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: '700',
  },
  map: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: height,
    width: width,
  },
  myLocation: {
    backgroundColor: '#3333',
    borderRadius: 24,
    position: 'absolute',
    bottom: 50,
    right: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MapScreen;
