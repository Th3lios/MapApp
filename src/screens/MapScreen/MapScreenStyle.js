import {StyleSheet, Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('screen');
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
  locationButton: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 2,
    position: 'absolute',
    bottom: Platform.select({ios: 100, android: 80}),
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

export default styles;
