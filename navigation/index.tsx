/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Colors from "../constants/Colors";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import ForgetPasswordScreen from "../screens/auth/ForgetPasswordScreen";
import VerifyOTPScreen from "../screens/auth/VerifyOTPScreen";
import ResetPasswordScreen from "../screens/auth/ResetPasswordScreen";

import Welcome from "../screens/WelcomeScreen";

import DashboardScreen from "../screens/home/DashboardScreen";
import ProfilScreen from "../screens/home/ProfilScreen";

import { RootStackParamList } from "../types";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: Colors.background,
    },
};

export default function Navigation() {
    return (
        <NavigationContainer theme={theme}>
            <RootNavigator />
        </NavigationContainer>
    );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
            <Stack.Screen name="VerifyOTP" component={VerifyOTPScreen} 
                // initialParams={{ phoneNumber: "somePhoneNumber" }} 
            />
            <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
            
            <Stack.Screen name="Profil" component={ProfilScreen} />
            <Stack.Screen name="Dashboard" component={DashboardScreen} 
                // options={{
                //     headerShown: true,
                //     title: "Dashboard",
                // }} 
            />
        </Stack.Navigator>
    );
}