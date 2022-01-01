import React, {ReactElement} from 'react';
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {Label} from 'components/Label';
import {Input} from 'components/Input';
import {StyledText} from 'components/styled-text';
import {COLORS} from 'styles/colors';
import {Checkbox} from 'components/Checkbox';
import {PasswordInput} from 'components/PasswordInput';
import {useNavigation} from '@react-navigation/native';
import {NavigationRoutes} from 'navigation/routes';
import {useTranslation} from 'react-i18next';
import {Control, Controller, FieldErrors} from 'react-hook-form';
import {SignInInputName} from 'screens/no-auth-screens/sign-in/types';
import {ChangeTextEvent, TextValue} from 'types/form';

interface IProps {
  checked: boolean;
  setChecked: () => void;
  setValue: (args: ChangeTextEvent) => TextValue;
  control: Control;
  inputName: SignInInputName;
  errors: FieldErrors<SignInInputName>;
}

export const SignInForm = (props: IProps): ReactElement => {
  const {checked, setChecked, inputName, control, setValue, errors} = props;
  const navigation = useNavigation();
  const {t} = useTranslation();

  const navigateToResetPassword = (): void =>
    navigation.navigate(NavigationRoutes.RESET_PASSWORD);

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <Label>{t('common.emailAddress')}</Label>
        <Controller
          as={<Input error={errors.email} />}
          name={inputName.email}
          control={control}
          onChange={setValue}
          type="email"
        />
      </View>
      <View style={styles.inputWrapper}>
        <Label>{t('common.password')}</Label>
        <Controller
          as={<PasswordInput error={errors.password} />}
          name={inputName.password}
          control={control}
          onChange={setValue}
        />
      </View>
      <View style={styles.wrapper}>
        <View style={styles.wrapperRemember}>
          <Checkbox checked={checked} onChange={setChecked} />
          <StyledText style={styles.rememberMe}>
            {t('signInScreen.rememberMe')}
          </StyledText>
        </View>
        <TouchableOpacity onPress={navigateToResetPassword}>
          <StyledText style={styles.forgot}>
            {t('signInScreen.forgotPassword')}
          </StyledText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

interface Style {
  container: ViewStyle;
  forgot: ViewStyle;
  inputWrapper: ViewStyle;
  wrapper: ViewStyle;
  wrapperRemember: ViewStyle;
  rememberMe: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    width: '100%',
    flex: 3,
    marginTop: 10,
    marginBottom: 15,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  forgot: {
    color: COLORS.PRIMARY_TWO,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapperRemember: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMe: {
    color: COLORS.WHITE,
    marginLeft: 5,
  },
});
