import React, {ReactElement} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigationRoutes} from '../../navigation/routes';

import {FirstScreen} from '../../screens/no-auth-screens/first-screen';

const NoAuthStack = createNativeStackNavigator<any>();

export const NoAuthNavigation = (): ReactElement => {
  return (
    <NoAuthStack.Navigator initialRouteName={NavigationRoutes.FIRST_SCREEN}>
      <NoAuthStack.Screen
        name={NavigationRoutes.FIRST_SCREEN}
        component={FirstScreen}
        options={{
          headerShown: false,
        }}
      />
    </NoAuthStack.Navigator>
  );
};
