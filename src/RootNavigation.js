import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { AuthNavigation } from './screens/LoginSignuScreen/AuthNavigation';

export const RootNavigation = () => {
  return (
    <NavigationContainer>
        <AuthNavigation />
    </NavigationContainer>
  )
}
