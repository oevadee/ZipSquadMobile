import React, { useState } from 'react';
import { ImageStyle, StyleSheet, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Description } from 'components/description';
import { SafeAreaNoAuth } from 'containers/safe-area-no-auth';
import { StyledButton } from 'components/styled-button';
import { StyledText } from 'components/styled-text';
import { NavigationRoutes } from 'navigation/routes';
import { Title } from 'components/title';
import { COLORS } from 'styles/colors';

import { SignInForm } from 'screens/no-auth-screens/sign-in/components/form';
import { SignInFormData, SignInInputName } from 'screens/no-auth-screens/sign-in/types';
import { signInSchema } from './validation';
import { Spinner } from 'components/spinner';

const INPUT_NAME = {
    email: 'email',
    password: 'password',
};

export const SignInScreen = () => {
    const { t } = useTranslation();
    const [isUserBack, setIsUserBack] = useState(false);
    const [checked, setChecked] = useState<boolean>(false);
    const [isWaitingForResponse, setIsWaitingForResponse] = useState<boolean>(false);

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<SignInInputName>({
        resolver: yupResolver(signInSchema(t, INPUT_NAME)),
        mode: 'onChange',
    });
    const navigation = useNavigation<StackNavigationProp<any>>();

    const handleChecked = async (): Promise<void> => setChecked(!checked);

    const onSubmit = ({ email, password }: SignInFormData): void => {
        console.log({ email, password });
        setIsWaitingForResponse(true);
    };

    const isWelcomeBack = isUserBack;
    return (
        <SafeAreaNoAuth automaticallyAdjustContentInsets={false}>
            <Spinner isLoading={isWaitingForResponse} />
            <View style={styles.logoWrapper}>
                <Title style={styles.signIn}>{t('sign-in.sign-in-text')}</Title>
                <Description>{isWelcomeBack ? t('sign-in.welcome-back') : ''}</Description>
            </View>
            <SignInForm
                setChecked={handleChecked}
                checked={checked}
                inputName={INPUT_NAME}
                control={control}
                errors={errors}
            />
            <View style={styles.notMember}>
                <StyledText>{t('sign-in.not-member')}</StyledText>
                <TouchableOpacity
                    onPress={(): void => navigation.navigate(NavigationRoutes.SIGN_UP)}>
                    <StyledText style={styles.text}> {t('sign-in.register-here')}</StyledText>
                </TouchableOpacity>
            </View>
            <View style={styles.signInBottom}>
                {/* <Error isError={Boolean(showErrorMessage) && formState.isSubmitted}>
          {showErrorMessage}
        </Error> */}
                <View style={styles.wrapper}>
                    <StyledButton
                        // icon
                        // source={require('assets/signin.png')}
                        // disabled={!isFieldsComplete}
                        onPress={handleSubmit(onSubmit)}>
                        {t('sign-in.sign-in-text')}
                    </StyledButton>
                </View>
            </View>
        </SafeAreaNoAuth>
    );
};

interface Style {
    logo: ImageStyle;
    signIn: TextStyle;
    signInBottom: ViewStyle;
    wrapper: ViewStyle;
    logoWrapper: ViewStyle;
    notMember: ViewStyle;
    text: TextStyle;
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
        color: COLORS.PRIMARY,
    },
});
