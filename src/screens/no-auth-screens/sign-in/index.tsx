import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import {Description} from 'components/description';
import {SafeAreaNoAuth} from 'components/safe-area-no-auth';
import {StyledButton} from 'components/styled-button';
import {StyledText} from 'components/styled-text';
import {Title} from 'components/title';
import {NavigationRoutes} from 'navigation/routes';
import {COLORS} from 'styles/colors';

export const SignInScreen = () => {
  const [isUserBack, setIsUserBack] = useState(false);

  const navigation = useNavigation<StackNavigationProp<any>>();

  const isWelcomeBack = isUserBack;
  return (
    <SafeAreaNoAuth automaticallyAdjustContentInsets={false}>
      <View style={styles.logoWrapper}>
        <Title style={styles.signIn}>Sign In</Title>
        <Description>{isWelcomeBack ? 'Hi, Welcome back!' : ''}</Description>
      </View>
      <View>
        <StyledText>Form</StyledText>
      </View>
      <View style={styles.notMember}>
        <StyledText>You are not a member, sign up</StyledText>
        <TouchableOpacity
          onPress={(): void =>
            navigation.navigate({
              name: NavigationRoutes.SIGN_UP,
              key: NavigationRoutes.SIGN_UP,
            })
          }>
          <StyledText style={styles.text}> Register here</StyledText>
        </TouchableOpacity>
      </View>
      <View style={styles.signInBottom}>
        <View style={styles.wrapper}>
          <StyledButton onPress={() => console.log('submit')}>
            Sign In
          </StyledButton>
        </View>
      </View>
    </SafeAreaNoAuth>
  );
};

interface Style {
  logo: ViewStyle;
  logoWrapper: ViewStyle;
  notMember: ViewStyle;
  signIn: ViewStyle;
  signInBottom: ViewStyle;
  wrapper: ViewStyle;
  text: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  logo: {
    marginBottom: 45,
    justifyContent: 'flex-start',
  },
  logoWrapper: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notMember: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  signIn: {
    marginBottom: 18,
  },
  signInBottom: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
  },
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: COLORS.WHITE,
  },
});
