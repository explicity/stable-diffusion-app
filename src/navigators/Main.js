import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, Flows } from '../screens';

const Stack = createNativeStackNavigator();

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
