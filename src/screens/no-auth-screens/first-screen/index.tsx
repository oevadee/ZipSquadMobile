import {useNavigation} from '@react-navigation/native';
import React, {ReactElement} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import {NavigationRoutes} from '../../../navigation/routes';
import {StackNavigationProp} from '@react-navigation/stack';

export const FirstScreen = (): ReactElement => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  return (
    <SafeAreaView>
      <Text>First Screen</Text>
      <Button
        title="Sign In"
        onPress={() =>
          navigation.navigate({
            name: NavigationRoutes.SIGN_IN,
            key: NavigationRoutes.SIGN_IN,
          })
        }>
        Sign In
      </Button>
      <Button
        title="Sign Up"
        onPress={() =>
          navigation.navigate({
            name: NavigationRoutes.SIGN_UP,
            key: NavigationRoutes.SIGN_UP,
          })
        }>
        Sign In
      </Button>
    </SafeAreaView>
  );
};
