import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { useFlipper } from '@react-navigation/devtools';

import { Startup } from '../screens';
import { useTheme } from '../hooks';
import MainNavigator from './Main';

const Stack = createStackNavigator();

const ApplicationNavigator = () => {
  const { darkMode, NavigationTheme } = useTheme();
  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Startup' component={Startup} />
          <Stack.Screen name='Main' component={MainNavigator} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};
export default ApplicationNavigator;
