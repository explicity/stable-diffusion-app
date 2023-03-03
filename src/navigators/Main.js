import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Example } from '../screens';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Example} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
