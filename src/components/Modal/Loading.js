import React from 'react';
import {View, ActivityIndicator, StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen');
const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#3D98F6" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    width: width,
    backgroundColor: 'rgba(1,1,1,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default Loading;
