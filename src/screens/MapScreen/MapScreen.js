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
import MapView, {Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import Geolocation from 'react-native-geolocation-service';
import Search from '../../components/Search/Search';
Icon.loadFont();
const {width, height} = Dimensions.get('screen');
const MapScreen = () => {
  const dispatch = useDispatch();
  const [region, setRegion] = useState(null);
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    Geolocation.getCurrentPosition(
      ({coords: {latitude, longitude}}) => {
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      (error) => {
        console.log(error.code, error.message);
      },
      {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000,
      },
    );
  };

  const handleLocationSelected = (data, {geometry}) => {
    const {
      location: {lat: latitude, lng: longitude},
    } = geometry;
    setRegion({
      latitude,
      longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      title: data.structured_formatting.main_text,
    });
    console.log(data);
  };

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <MapView
        region={region}
        showsUserLocation
        loadingEnable
        followUserLocation
        style={styles.map}>
        {region && <Marker coordinate={region} />}
      </MapView>
      <TouchableOpacity onPress={logOut} style={styles.button}>
        <View style={styles.logOutWrapper}>
          <Icon name="log-out" size={20} color="rgba(1,1,1,0.5)" />
          <Text style={styles.text}>Logout </Text>
        </View>
      </TouchableOpacity>
      <Search onLocationSelected={handleLocationSelected} />
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
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 2,
    position: 'absolute',
    bottom: Platform.select({ios: 40, android: 10}),
    right: Platform.select({ios: 10, android: 10}),
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // ios
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.15,
    shadowRadius: 9.51,
    // android
    //elevation: 1,
  },
  text: {
    color: 'rgba(1,1,1,0.5)',
    fontWeight: '700',
  },
  map: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: height,
    width: width,
  },
});

export default MapScreen;
