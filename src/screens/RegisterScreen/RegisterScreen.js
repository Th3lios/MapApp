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
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {signUp} from '../../redux/actions/authAction/authAction';
import Loading from '../../components/Modal/Loading';
import styles from './RegisterScreenStyles';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
//import { getUsers, login } from '../../firebase/Firebase'
import {TouchableOpacity} from 'react-native-gesture-handler';

const RegisterScreen = (props) => {
  const dispatch = useDispatch();
  const inputPass = useRef(null);
  const loading = useSelector((state) => state.feed.loading);
  const [seePasswordState, setSeePasswordState] = useState(true);
  const [account, setAccount] = useState({
    username: '',
    email: '',
    password: '',
  });

  const loginHandle = () => {
    if (
      (account.email === '', account.email === '' || account.password === '')
    ) {
      Alert.alert('Los campos no pueden estar vacíos');
    } else {
      console.log(account);
      dispatch(
        signUp(account.username, account.email.toLowerCase(), account.password),
      );
    }
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
                  <Text style={styles.language} />
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
                      placeholder="Username"
                      placeholderTextColor="rgba(0,0,0,0.5)"
                      underlineColorAndroid="transparent"
                      onChangeText={(username) =>
                        setAccount({
                          ...account,
                          username: username,
                        })
                      }
                    />
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
                  <View style={styles.button}>
                    <TouchableOpacity
                      style={styles.registerButton}
                      onPress={loginHandle}>
                      <Text style={styles.textRegisterButton}>Sign up</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.bottom}>
                  <Text style={styles.bottomText}>
                    Already have an account?
                    <TouchableWithoutFeedback
                      onPress={() => props.navigation.goBack()}>
                      <Text style={styles.bold}> Sign in.</Text>
                    </TouchableWithoutFeedback>
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

export default RegisterScreen;
