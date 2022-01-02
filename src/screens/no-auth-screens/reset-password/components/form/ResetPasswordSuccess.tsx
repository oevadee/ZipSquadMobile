import React, { ReactElement } from 'react';
import { Image, ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from 'styles/colors';
import { StyledText } from 'components/styled-text';
import { StyledButton } from 'components/styled-button';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { NavigationRoutes } from 'navigation/routes';

export const ResetPasswordSuccess = (): ReactElement => {
    const { t } = useTranslation();
    const navigation = useNavigation();

    return (
        <>
            <Image source={require('assets/reset-password.png')} style={styles.image} />
            <StyledText style={styles.resetText}>
                {t('resetPasswordScreen.resetPasswordSuccess')}
            </StyledText>
            <StyledText style={styles.checkText}>
                {t('resetPasswordScreen.resetPasswordSuccessCheck')}
            </StyledText>
            <StyledButton
                styleButton={styles.button}
                styleText={styles.text}
                onPress={(): void => navigation.navigate(NavigationRoutes.SIGN_IN)}
            >
                {t('resetPasswordScreen.returnToLogin')}
            </StyledButton>
        </>
    );
};

interface Style {
    resetText: TextStyle;
    button: ViewStyle;
    text: TextStyle;
    checkText: TextStyle;
    image: ImageStyle;
}

const styles = StyleSheet.create<Style>({
    resetText: {
        fontSize: 26,
        color: COLORS.WHITE,
        textAlign: 'center',
        marginBottom: 25,
    },
    checkText: {
        fontSize: 16,
        color: COLORS.WHITE,
        textAlign: 'center',
        paddingHorizontal: 20,
        lineHeight: 20,
    },
    button: {
        height: 50,
        backgroundColor: COLORS.WHITE,
        width: '100%',
        marginTop: 20,
        borderRadius: 26,
    },
    text: {
        color: COLORS.PRIMARY,
    },
    image: {
        width: 52,
        height: 63,
        tintColor: COLORS.WHITE,
        marginBottom: 20,
    },
});
