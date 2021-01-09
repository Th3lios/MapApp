import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
const Stack = createStackNavigator();

// screens
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import MapScreen from '../screens/MapScreen/MapScreen';

const AppNavigator = () => {
  const auth = useSelector((state) => state.auth.auth);

  if (auth) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Map"
            component={MapScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default AppNavigator;
