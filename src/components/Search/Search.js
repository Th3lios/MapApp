import React from 'react';
import {StyleSheet, Platform, Dimensions} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_API_KEY} from "../../config/config";
const {width, height} = Dimensions.get('screen');
const Search = ({onLocationSelected}) => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Where?"
      placeholderTextColor="#333"
      onPress={onLocationSelected}
      query={{
        key: GOOGLE_MAPS_API_KEY,
        language: 'en',
      }}
      textInputProps={{
        autoCapitalize: 'none',
        toCorrect: false,
      }}
      fetchDetails
      enablePoweredByContainer={false}
      styles={{
        container: {
          position: 'absolute',
          top: Platform.select({ios: 60, android: 40}),
          left: 0,
          width: width,
          padding: 40,
        },
        textInputContainer: {
          flex: 1,
          backgroundColor: 'transparent',
        },
        textInput: {
          borderRadius: 2,
          elevation: 3,
        },
        listView: {},
        description: {},
        row: {},
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Search;
