import React, {ReactElement} from 'react';
import {ViewStyle, StyleSheet, Dimensions, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {NavigationRoutes} from '../../../navigation/routes';
import {StackNavigationProp} from '@react-navigation/stack';
import {COLORS} from '../../../styles/colors';
import {SaveAreaNoAuth} from '../../../components/safe-area-no-auth';
import {StyledButton} from '../../../components/styled-button';

export const FirstScreen = (): ReactElement => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <SaveAreaNoAuth containerStyle={styles.container}>
      <StyledButton
        styleButton={[styles.button, styles.signInButton]}
        onPress={(): void =>
          navigation.navigate({
            name: NavigationRoutes.SIGN_IN,
            key: NavigationRoutes.SIGN_IN,
          })
        }>
        Sign In
      </StyledButton>
      <StyledButton
        styleButton={[styles.button, styles.signInButton]}
        onPress={(): void =>
          navigation.navigate({
            name: NavigationRoutes.SIGN_UP,
            key: NavigationRoutes.SIGN_UP,
          })
        }>
        Sign Up
      </StyledButton>
    </SaveAreaNoAuth>
  );
};

interface Style {
  container: ViewStyle;
  button: ViewStyle;
  signInButton: ViewStyle;
  logoStyle: ViewStyle;
}

const {height} = Dimensions.get('window');

const styles = StyleSheet.create<Style>({
  container: {
    justifyContent: 'space-between',
  },
  button: {
    height: 48,
    borderRadius: 24,
    marginBottom: 25,
  },
  signInButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: COLORS.WHITE,
  },
  logoStyle: {
    marginTop: height * 0.25,
  },
});
