import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
  },
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  top: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  language: {
    color: '#252525',
    opacity: 0.5,
  },
  middle: {
    width: width * 0.85,
  },
  logo: {
    width: '100%',
    height: 75,
  },
  inputsContainer: {},
  inputEmail: {
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
    height: height * 0.07,
    borderWidth: 1,
    borderColor: '#cccc',
    borderRadius: 3,
    width: '100%',
    paddingHorizontal: 10,
    textAlignVertical: 'center',
    paddingVertical: 0,
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cccc',
    backgroundColor: '#FAFAFA',
    borderRadius: 3,
  },
  inputPassword: {
    backgroundColor: '#FAFAFA',
    height: height * 0.07,
    width: '90%',
    paddingLeft: 10,
    textAlignVertical: 'center',
    paddingVertical: 0,
  },
  seePass: {
    position: 'absolute',
    right: '3%',
  },
  image: {
    resizeMode: 'contain',
    height: 60,
    width: '100%',
  },
  loginButton: {},
  button: {
    backgroundColor: '#3D98F6',
    width: '100%',
    height: height * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  textButton: {
    color: 'white',
    fontWeight: '700',
  },
  forgotPass: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  forgotText: {
    fontSize: 12,
    color: '#252525',
    opacity: 0.5,
  },
  bold: {
    fontWeight: '700',
  },
  divisor: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#9999',
    width: '45%',
  },
  or: {
    color: '#9999',
    textAlignVertical: 'bottom',
    paddingBottom: 0,
    fontSize: 14,
    fontWeight: '700',
  },
  multiLogin: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  multiLoginText: {
    paddingLeft: 5,
    color: '#335089',
    fontWeight: '700',
  },
  bottom: {
    borderTopWidth: 1,
    borderTopColor: '#cccc',
    width: width,
    alignItems: 'center',
    paddingVertical: 15,
  },
  bottomText: {
    fontSize: 12,
    color: '#252525',
    opacity: 0.5,
  },
});

export default styles;
