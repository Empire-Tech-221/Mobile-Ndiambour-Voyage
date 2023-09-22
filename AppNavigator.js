import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './src/auth/screens/LoginScreen';
import RegisterScreen from './src/auth/screens/RegisterScreen';
import ForgotPasswordScreen from './src/auth/screens/ForgotPasswordScreen';
import VerifyOTPScreen from './src/auth/screens/VerifyOTPScreen';
import ResetPasswordScreen from './src/auth/screens/ResetPasswordScreen';

import DashboardScreen from './src/dashboard/screens/DashboardScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Inscription"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VerifyOTP"
        component={VerifyOTPScreen}
        initialParams={{ phoneNumber: phoneNumber }}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}
        initialParams={{ phoneNumber: phoneNumber }}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;