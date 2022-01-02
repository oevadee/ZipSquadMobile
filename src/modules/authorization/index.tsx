import React, { ReactElement, useEffect, useState } from 'react';
import { NoAuthNavigation } from 'navigation/no-auth';
import { SafeAreaView, StyleSheet, ViewStyle } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationRoutes } from 'navigation/routes';
import { COLORS } from 'styles/colors';
import { useAuthContext } from 'context/auth-context';
import { User } from './types';
import { AuthNavigation } from 'navigation/auth';

const Stack = createNativeStackNavigator<any>();

export const Authorization = (): ReactElement => {
    const [user, setUser] = useState<User>({
        user_id: null,
        name: '',
        email: '',
    });
    const { isLogin } = useAuthContext();

    useEffect(() => {
        (async (): Promise<void> => {
            if (isLogin) {
                if (user.email) {
                    setUser({
                        user_id: Math.random() * 1000,
                        email: user.email,
                        name: user.name,
                    });
                }
            } else {
                setUser({
                    user_id: null,
                    email: '',
                    name: '',
                });
            }
        })();
    }, [isLogin]);

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
                {isLogin ? (
                    <Stack.Screen name={NavigationRoutes.AUTH} component={AuthNavigation} />
                ) : (
                    <Stack.Screen name={NavigationRoutes.NO_AUTH} component={NoAuthNavigation} />
                )}
            </Stack.Navigator>
        </SafeAreaView>
    );
};

interface Style {
    container: ViewStyle;
}

const styles = StyleSheet.create<Style>({
    container: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND,
    },
});
