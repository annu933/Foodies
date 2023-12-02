import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WelcomeScreens } from './src/screens/LoginSignuScreen/WelcomeScreens';
import { LoginScreens } from './src/screens/LoginSignuScreen/LoginScreens';
import { RootNavigation } from './src/RootNavigation';

export default function App() {
  return (
    <RootNavigation />
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
