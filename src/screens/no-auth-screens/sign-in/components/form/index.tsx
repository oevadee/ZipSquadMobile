import React, { ReactElement } from 'react';
import { StyleSheet, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Label } from 'components/label';
import { Input } from 'components/input';
import { StyledText } from 'components/styled-text';
import { COLORS } from 'styles/colors';
import { Checkbox } from 'components/check-box';
import { PasswordInput } from 'components/password-input';
// import { useNavigation } from '@react-navigation/native';
// import { NavigationRoutes } from 'navigation/routes';
import { useTranslation } from 'react-i18next';
import { Controller, FieldErrors } from 'react-hook-form';
import { SignInInputName } from 'screens/no-auth-screens/sign-in/types';

interface IProps {
    checked: boolean;
    setChecked: () => void;
    control: any;
    inputName: SignInInputName;
    errors: FieldErrors<SignInInputName>;
}

export const SignInForm = ({
    checked,
    setChecked,
    inputName,
    control,
    errors,
}: IProps): ReactElement => {
    // const navigation = useNavigation();
    const { t } = useTranslation();

    // const navigateToResetPassword = (): void =>
    //     navigation.navigate(NavigationRoutes.RESET_PASSWORD);

    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <Label>{t('common.email-address')}</Label>
                <Controller
                    control={control}
                    name={inputName.email}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            onChangeText={(value) => onChange(value)}
                            value={value}
                            onBlur={onBlur}
                            error={errors.email}
                        />
                    )}
                />
            </View>
            <View style={styles.inputWrapper}>
                <Label>{t('common.password')}</Label>
                <Controller
                    control={control}
                    name={inputName.password}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            onChangeText={(value) => onChange(value)}
                            value={value}
                            onBlur={onBlur}
                            error={errors.password}
                        />
                    )}
                />
            </View>
            <View style={styles.wrapper}>
                <View style={styles.wrapperRemember}>
                    <Checkbox checked={checked} onChange={setChecked} />
                    <StyledText style={styles.rememberMe}>{t('sign-in.remember-me')}</StyledText>
                </View>
                {/* <TouchableOpacity onPress={navigateToResetPassword}>
                    <StyledText style={styles.forgot}>
                        {t('signInScreen.forgotPassword')}
                    </StyledText>
                </TouchableOpacity> */}
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
        color: COLORS.SECONDARY,
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
