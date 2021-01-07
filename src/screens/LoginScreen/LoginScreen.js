import React, {useState, useRef} from 'react';
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
} from 'react-native';
import {useDispatch} from 'react-redux';
import {login} from '../../../store/actions/authAction';
import styles from './LoginScreenStyles';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
//import { getUsers, login } from '../../firebase/Firebase'
import {TouchableOpacity} from 'react-native-gesture-handler';

const LoginScreen = (props) => {
  const inputPass = useRef(null);
  const [emailState, setEmailState] = useState({
    email: '',
  });
  const [passwordState, setPasswordState] = useState({
    password: '',
  });
  const [seePasswordState, setSeePasswordState] = useState(true);

  const dispatch = useDispatch();

  const loginHandle = () => {
    dispatch(login(emailState.email.toLowerCase(), passwordState.password));
  };

  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: 'black'}} />
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.content}>
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
                  <Text style={styles.language}>English (Chile)</Text>
                </View>

                <View style={styles.middle}>
                  <View style={styles.logo}>
                    <Image
                      source={require('../../../assets/images/instagram.png')}
                      style={styles.image}
                    />
                  </View>
                  <View style={styles.inputsContainer}>
                    <TextInput
                      style={styles.inputEmail}
                      placeholder="Correo electrónico"
                      placeholderTextColor="rgba(0,0,0,0.5)"
                      keyboardType="email-address"
                      underlineColorAndroid="transparent"
                      onChangeText={(email) => setEmailState({email})}
                    />
                    <View style={styles.passwordContainer}>
                      <TextInput
                        ref={inputPass}
                        style={styles.inputPassword}
                        placeholder="Contraseña"
                        placeholderTextColor="rgba(0,0,0,0.5)"
                        secureTextEntry={seePasswordState}
                        underlineColorAndroid="transparent"
                        onChangeText={(password) =>
                          setPasswordState({password})
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
                    <TouchableOpacity style={styles.button}>
                      <Text style={styles.textButton}>Log In</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.forgotPass}>
                    <Text style={styles.forgotText}>
                      Forgot your login details?{' '}
                      <Text style={styles.bold}>Get help signing in.</Text>
                    </Text>
                  </View>
                  <View style={styles.divisor}>
                    <View style={styles.line} />
                    <Text style={styles.or}> OR </Text>
                    <View style={styles.line} />
                  </View>
                  <View style={styles.multiLogin}>
                    <Icon name="logo-facebook" size={30} color="#335089" />
                    <Text style={styles.multiLoginText}>
                      Log in with Facebook
                    </Text>
                  </View>
                </View>

                <View style={styles.bottom}>
                  <Text style={styles.bottomText}>
                    Don't have an account?{' '}
                    <Text style={styles.bold}>Sign up.</Text>
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;
