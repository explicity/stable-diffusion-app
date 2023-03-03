import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, Flows } from '../screens';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Group
        screenOptions={{
          animation: 'slide_from_bottom',
          presentation: 'card',
          headerShown: false,
        }}
      >
        <Stack.Screen name='Flows' component={Flows} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainNavigator;
