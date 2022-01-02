import React, { useEffect, useState } from 'react';
import { ImageStyle, StyleSheet, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Description } from 'components/description';
import { SafeAreaNoAuth } from 'containers/safe-area-no-auth';
import { StyledButton } from 'components/styled-button';
import { StyledText } from 'components/styled-text';
import { NavigationRoutes } from 'navigation/routes';
import { Title } from 'components/title';
import { COLORS } from 'styles/colors';
import { StorageKeys, StorageValues } from 'constants/storageKeys';

import { SignInForm } from 'screens/no-auth-screens/sign-in/components/form';
import { SignInFormData, SignInInputName } from 'screens/no-auth-screens/sign-in/types';
import { signInSchema } from './validation';
import { Spinner } from 'components/spinner';
import { Error } from 'components/error';

import { errorMessage } from 'utils/errorMessage';
import { testUser } from 'constants/test-user';
import { useAuthContext } from 'context/auth-context';

const INPUT_NAME = {
    email: 'email',
    password: 'password',
};

export const SignInScreen = () => {
    const { t } = useTranslation();
    const [isUserBack, setIsUserBack] = useState(false);
    const [checked, setChecked] = useState<boolean>(false);
    const [isWaitingForResponse, setIsWaitingForResponse] = useState<boolean>(false);
    const [loggedInLanding, setLoggedInLanding] = useState<boolean>(false);
    const { setLogged } = useAuthContext();
    const navigation = useNavigation<StackNavigationProp<any>>();
    const {
        handleSubmit,
        control,
        formState,
        formState: { errors },
        reset,
        getValues,
    } = useForm<SignInInputName>({
        resolver: yupResolver(signInSchema(t, INPUT_NAME)),
    });

    useEffect(() => {
        (async (): Promise<void> => {
            const email = await AsyncStorage.getItem(StorageKeys.email);
            if (email) {
                setIsUserBack(true);
                reset({ email });
            }
        })();
    }, []);

    const storeRememberMe = async (): Promise<void> => {
        if (checked) {
            const email = getValues().email;
            console.log(email);
            await AsyncStorage.setItem(StorageKeys.rememberMe, StorageValues.rememberMe);
            if (email) {
                await AsyncStorage.setItem(StorageKeys.email, email);
            }
        } else {
            await AsyncStorage.setItem(StorageKeys.rememberMe, '');
            await AsyncStorage.setItem(StorageKeys.email, '');
        }
    };

    const checkLogin = async (authenticated: boolean): Promise<void> => {
        if (authenticated) {
            await storeRememberMe();
            setLogged(true);
            setLoggedInLanding(false);
        } else {
            setLoggedInLanding(false);
            setLogged(false);
        }
    };

    const handleChecked = (): void => setChecked(!checked);

    const onSubmit = async ({ email, password }: SignInFormData) => {
        setIsWaitingForResponse(true);
        try {
            if (email !== testUser.email || password !== testUser.password) {
                return;
            }
            await checkLogin(true);
        } catch (_) {
            console.log('error');
        } finally {
            setIsWaitingForResponse(false);
        }
    };

    const isWelcomeBack = isUserBack;
    const showErrorMessage = errorMessage({ formError: errors });
    const isFieldsComplete = !formState.isSubmitted || formState.isValid;

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
                <Error isError={Boolean(showErrorMessage) && formState.isSubmitted}>
                    {showErrorMessage}
                </Error>
                <View style={styles.wrapper}>
                    <StyledButton
                        // icon
                        // source={require('assets/signin.png')}
                        disabled={!isFieldsComplete}
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
