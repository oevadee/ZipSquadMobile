import React, {ReactElement, useState} from 'react';
import {NoAuthNavigation} from '../../navigation/no-auth';
import {SafeAreaView, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationRoutes} from '../../navigation/routes';

const Stack = createNativeStackNavigator<any>();

export const Authorization = (): ReactElement => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator>
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
            options={{
              headerShown: false,
              gestureEnabled: false,
            }}
          />
        )}
      </Stack.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create<any>({
  container: {
    flex: 1,
  },
});
