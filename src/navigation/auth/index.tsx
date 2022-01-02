import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationRoutes } from 'navigation/routes';

import { COLORS } from 'styles/colors';
import { DashboardScreen } from 'screens/auth-screens/dash-board';

const AuthStack = createNativeStackNavigator<any>();

export const AuthNavigation = (): ReactElement => {
    return (
        <AuthStack.Navigator initialRouteName={NavigationRoutes.DASHBOARD}>
            <AuthStack.Screen
                name={NavigationRoutes.DASHBOARD}
                component={DashboardScreen}
                options={{
                    headerStyle: {
                        backgroundColor: COLORS.BACKGROUND,
                    },
                    headerTitleStyle: {
                        color: COLORS.WHITE,
                    },
                }}
            />
        </AuthStack.Navigator>
    );
};
