import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { useFlipper } from '@react-navigation/devtools';

import { Startup } from '../screens';
import MainNavigator from './Main';

const Stack = createStackNavigator();

const ApplicationNavigator = () => {
  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar barStyle={'light-content'} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Startup' component={Startup} />
        <Stack.Screen name='Main' component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default ApplicationNavigator;
