import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SingUp } from '../pages/SingUp';
import { MainScreen } from '../pages/MainScreen';
import { theme } from '../global/styles/theme';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator>
      <Screen name="SingUp" options={{ headerShown: false }} component={SingUp} />

      <Screen
        name="MainScreen"
        options={{
          headerShown: true,
          title: 'CodeLeap Network',
          headerTitleAlign: 'left',
          headerStyle: { backgroundColor: theme.colors.secondary100 },
          headerTitleStyle: { fontFamily: theme.fonts.text700, color: theme.colors.primary },
        }}
        component={MainScreen}
      />
    </Navigator>
  );
}
