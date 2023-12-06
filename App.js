import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WelcomeScreens } from './src/screens/LoginSignuScreen/WelcomeScreens';
import { LoginScreens } from './src/screens/LoginSignuScreen/LoginScreens';
import { SignupScreens } from './src/screens/LoginSignuScreen/SignupScreens';
import HomeScreen from './src/screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
