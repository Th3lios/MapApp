import React, {useState, useRef, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {signIn} from '../../redux/actions/authAction/authAction';
import Loading from '../../components/Modal/Loading';
import styles from './LoginScreenStyles';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
//import { getUsers, login } from '../../firebase/Firebase'
import {TouchableOpacity} from 'react-native-gesture-handler';

const LoginScreen = (props) => {
  const dispatch = useDispatch();
  const inputPass = useRef(null);
  const loading = useSelector((state) => state.feed.loading);
  const message = useSelector((state) => state.feed.message);
  const [seePasswordState, setSeePasswordState] = useState(true);
  const [account, setAccount] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (message !== undefined) {
      Alert.alert(message.title, message.text);
    }
  }, [message]);

  const loginHandle = () => {
    if (account.email === '' || account.password === '') {
      Alert.alert('Fields cannot be empty');
    } else {
      console.log(account);
      dispatch(signIn(account.email.toLowerCase(), account.password));
    }
  };

  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: 'black'}} />
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.content}
        testID='app-root'
        accessibilityLabel='app-root'
      >
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : ''}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
            }}
            keyboardShouldPersistTaps="always">
            <TouchableWithoutFeedback>
              <View style={styles.section}>
                <View style={styles.top}>
                  <Text style={styles.language}>E.A.D</Text>
                </View>

                <View style={styles.middle}>
                  <View style={styles.logo}>
                    <Image
                      source={require('../../assets/images/home.png')}
                      style={styles.image}
                    />
                  </View>
                  <View style={styles.inputsContainer}>
                    <TextInput
                      style={styles.inputEmail}
                      placeholder="Email"
                      placeholderTextColor="rgba(0,0,0,0.5)"
                      keyboardType="email-address"
                      underlineColorAndroid="transparent"
                      onChangeText={(email) =>
                        setAccount({
                          ...account,
                          email: email,
                        })
                      }
                    />
                    <View style={styles.passwordContainer}>
                      <TextInput
                        ref={inputPass}
                        style={styles.inputPassword}
                        placeholder="Password"
                        placeholderTextColor="rgba(0,0,0,0.5)"
                        secureTextEntry={seePasswordState}
                        underlineColorAndroid="transparent"
                        onChangeText={(password) =>
                          setAccount({
                            ...account,
                            password: password,
                          })
                        }
                      />
                      <TouchableOpacity
                        style={{justifyContent: 'center'}}
                        onPress={() => {
                          setSeePasswordState(!seePasswordState);
                        }}>
                        <Icon
                          name={!seePasswordState ? 'ios-eye' : 'ios-eye-off'}
                          size={25}
                          color="#cccc"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.loginButton}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={loginHandle}
                      testID='login-button'
                      accessibilityLabel='login-button'
                      >
                      <Text style={styles.textButton}>Log In</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.forgotPass}>
                    <Text style={styles.forgotText}>
                      Forgot your login details?{' '}
                      <Text style={styles.bold}>We can't help you :(.</Text>
                    </Text>
                  </View>
                </View>

                <View style={styles.bottom}>
                  <Text style={styles.bottomText}>
                    Don't have an account?{' '}
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate('Register')}
                      testID='register-button'
                      accessibilityLabel='register-button'
                      style={styles.bold}>
                      <Text>Sign up.</Text>
                    </TouchableOpacity>
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
      {loading && <Loading />}
    </>
  );
};

export default LoginScreen;
