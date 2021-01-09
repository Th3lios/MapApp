import React, {useEffect, useState} from 'react';
import firebase from '@react-native-firebase/app';
import {homeAnalytics, changeLocationAnalytics} from '../../utils/analytics';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
import {useDispatch} from 'react-redux';
import {signOut} from '../../redux/actions/authAction/authAction';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import Geolocation from 'react-native-geolocation-service';
import Search from '../../components/Search/Search';
import {useSelector} from 'react-redux';
import {requestLocationPermission} from '../../utils/permissions';
import styles from '../MapScreen/MapScreenStyle';
Icon.loadFont();
const MapScreen = () => {
  const dispatch = useDispatch();
  const user_id = useSelector((state) => state.auth.user_id);
  const [region, setRegion] = useState(null);
  const [initialLocation, setInitialLocation] = useState(null);
  useEffect(() => {
    setInitialLocation(true);
    homeAnalytics(user_id);
    Platform.OS === 'android'
      ? requestLocationPermission().then((response) => {
          console.log(response);
          if (response === 'granted') {
            getLocation();
          }
        })
      : getLocation();
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
    setInitialLocation(false);
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
    changeLocationAnalytics(data.description);
  };

  const logOut = () => {
    dispatch(signOut());
  };

  return (
    <View style={styles.container}>
      <MapView
        region={region}
        showsUserLocation
        loadingEnable
        followUserLocation
        provider={PROVIDER_GOOGLE}
        style={styles.map}>
        {region && !initialLocation && (
          <Marker
            image={require('../../assets/images/home.png')}
            coordinate={region}
          />
        )}
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

export default MapScreen;
