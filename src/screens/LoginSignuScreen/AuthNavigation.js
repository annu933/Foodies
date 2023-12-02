import React from 'react'
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreens } from './WelcomeScreens';
import { LoginScreens } from './LoginScreens';
import { SignupScreens } from './SignupScreens';
import HomeScreen from '../HomeScreen';


const Stack = createNativeStackNavigator();
export const AuthNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='welcomePage'>
                <Stack.Screen name="welcomePage" component={WelcomeScreens} 
                options={{headerShown:false}}
                />
                <Stack.Screen name="signup" component={SignupScreens} 
                options={{headerShown:false}}
                />
                <Stack.Screen name="login" component={LoginScreens} 
                options={{headerShown:false}}
                />
                <Stack.Screen name="home" component={HomeScreen} 
                options={{headerShown:false}}
                />
        </Stack.Navigator>
    )
}

