import React, { useState } from 'react';
import { ImageStyle, StyleSheet, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { SafeAreaNoAuth } from 'containers/safe-area-no-auth';
import { StyledButton } from 'components/styled-button';
import { StyledText } from 'components/styled-text';
import { NavigationRoutes } from 'navigation/routes';
import { Title } from 'components/title';
import { COLORS } from 'styles/colors';

import { SignUpForm } from 'screens/no-auth-screens/sign-up/components/form';
import { SignUpFormData, SignUpInputName } from 'screens/no-auth-screens/sign-up/types';
import { signUpSchema } from 'screens/no-auth-screens/sign-up/validation';
import { Spinner } from 'components/spinner';

const INPUT_NAME = {
    email: 'email',
    password: 'password',
    repeatPassword: 'repeated-password',
};

export const SignUpScreen = () => {
    const { t } = useTranslation();
    const [checked, setChecked] = useState<boolean>(false);
    const [isWaitingForResponse, setIsWaitingForResponse] = useState<boolean>(false);

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<SignUpInputName>({
        resolver: yupResolver(signUpSchema(t, INPUT_NAME)),
    });
    const navigation = useNavigation<StackNavigationProp<any>>();

    const handleChecked = async (): Promise<void> => setChecked(!checked);

    const onSubmit = ({ email, password }: SignUpFormData): void => {
        console.log({ email, password });
        setIsWaitingForResponse(true);
    };

    return (
        <SafeAreaNoAuth automaticallyAdjustContentInsets={false}>
            <Spinner isLoading={isWaitingForResponse} />
            <View style={styles.logoWrapper}>
                <Title style={styles.signIn}>{t('sign-up.sign-up-text')}</Title>
            </View>
            <SignUpForm
                setChecked={handleChecked}
                checked={checked}
                inputName={INPUT_NAME}
                control={control}
                errors={errors}
            />
            <View style={styles.notMember}>
                <StyledText>{t('sign-up.already-a-member')}</StyledText>
                <TouchableOpacity
                    onPress={(): void => navigation.navigate(NavigationRoutes.SIGN_IN)}>
                    <StyledText style={styles.text}> {t('sign-up.sign-in-text')}</StyledText>
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
                        {t('sign-up.sign-up-text')}
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
