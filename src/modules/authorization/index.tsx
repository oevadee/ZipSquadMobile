import React, {ReactElement, useState} from 'react';
import {NoAuthNavigation} from 'navigation/no-auth';
import {SafeAreaView, StyleSheet, ViewStyle} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationRoutes} from 'navigation/routes';
import {COLORS} from 'styles/colors';

const Stack = createNativeStackNavigator<any>();

export const Authorization = (): ReactElement => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator
        screenOptions={{headerShown: false, gestureEnabled: false}}>
        {isLogin ? (
          <></>
        ) : (
          // <Stack.Screen
          //   name={NavigationRoutes.AUTH}
          //   component={AuthNavigation}
          // />
          <Stack.Screen
            name={NavigationRoutes.NO_AUTH}
            component={NoAuthNavigation}
          />
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
