import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { ImageStyle, StyleSheet, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Description } from 'components/description';
import { SafeAreaNoAuth } from 'containers/safe-area-no-auth';
import { StyledButton } from 'components/styled-button';
import { StyledText } from 'components/styled-text';
import { Title } from 'components/title';
import { NavigationRoutes } from 'navigation/routes';
import { COLORS } from 'styles/colors';
import { useTranslation } from 'react-i18next';

export const SignInScreen = () => {
    const { t } = useTranslation();
    const [isUserBack, setIsUserBack] = useState(false);

    const navigation = useNavigation<StackNavigationProp<any>>();

    const isWelcomeBack = isUserBack;
    return (
        <SafeAreaNoAuth automaticallyAdjustContentInsets={false}>
            <View style={styles.logoWrapper}>
                <Title style={styles.signIn}>{t('signInScreen.signIn')}</Title>
                <Description>{isWelcomeBack ? t('signInScreen.welcomeBack') : ''}</Description>
            </View>
            {/* <SignInForm
        setChecked={handleChecked}
        checked={checked}
        inputName={INPUT_NAME}
        control={control}
        setValue={onChange}
        errors={errors}
      /> */}
            <View style={styles.notMember}>
                <StyledText>{t('signInScreen.notMember')}</StyledText>
                <TouchableOpacity
                    onPress={(): void => navigation.navigate(NavigationRoutes.SIGN_UP)}
                >
                    <StyledText style={styles.text}> {t('signInScreen.registerHere')}</StyledText>
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
                    // onPress={handleSubmit(onSubmit)}
                    >
                        {t('signInScreen.signIn')}
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
