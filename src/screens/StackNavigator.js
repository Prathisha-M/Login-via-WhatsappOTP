import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import otpScreen from './otpScreen';
import styles from '../Styles/navigatorStyles';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="otpScreen" component={otpScreen} />
    </Stack.Navigator>
  );
}
