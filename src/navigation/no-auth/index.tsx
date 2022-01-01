import React, { ReactElement } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationRoutes } from 'navigation/routes';

import { FirstScreen } from 'screens/no-auth-screens/first-screen';
import { SignInScreen } from 'screens/no-auth-screens/sign-in';
import { COLORS } from 'styles/colors';
import { SignUpScreen } from 'screens/no-auth-screens/sign-up';

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
            <NoAuthStack.Screen
                name={NavigationRoutes.SIGN_IN}
                component={SignInScreen}
                options={{
                    headerStyle: {
                        backgroundColor: COLORS.BACKGROUND,
                    },
                    headerTitleStyle: {
                        color: COLORS.WHITE,
                    },
                }}
            />
            <NoAuthStack.Screen
                name={NavigationRoutes.SIGN_UP}
                component={SignUpScreen}
                options={{
                    headerStyle: {
                        backgroundColor: COLORS.BACKGROUND,
                    },
                    headerTitleStyle: {
                        color: COLORS.WHITE,
                    },
                }}
            />
        </NoAuthStack.Navigator>
    );
};
