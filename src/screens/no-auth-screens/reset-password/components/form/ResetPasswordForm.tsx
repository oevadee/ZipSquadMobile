import React, { ReactElement } from 'react';
import { Image, ImageStyle, StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { COLORS } from 'styles/colors';
import { StyledText } from 'components/styled-text';
import { Label } from 'components/label';
import { Input } from 'components/input';
import { StyledButton } from 'components/styled-button';
import { useTranslation } from 'react-i18next';
import { Controller, FieldErrors } from 'react-hook-form';
import { ResetPasswordInputName } from 'screens/no-auth-screens/reset-password/types';

interface IProps {
    control: any;
    setValue: any;
    inputName: ResetPasswordInputName;
    isValid: boolean;
    handleSendEmail: () => void;
    errors: FieldErrors<ResetPasswordInputName>;
}

export const ResetPasswordForm = ({
    control,
    handleSendEmail,
    inputName,
    isValid,
    errors,
}: IProps): ReactElement => {
    const { t } = useTranslation();

    return (
        <>
            <Image source={require('assets/reset-password.png')} style={styles.image} />
            <StyledText style={styles.resetText}>{t('reset-password.reset-password')}</StyledText>
            <View style={styles.wrapper}>
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
                            type="email"
                        />
                    )}
                />
                <StyledButton
                    styleButton={styles.button}
                    styleText={styles.text}
                    onPress={handleSendEmail}
                    disabled={!isValid}
                >
                    {t('common.send-email')}
                </StyledButton>
            </View>
        </>
    );
};

interface Style {
    resetText: TextStyle;
    button: ViewStyle;
    text: TextStyle;
    image: ImageStyle;
    wrapper: ViewStyle;
}

const styles = StyleSheet.create<Style>({
    resetText: {
        fontSize: 26,
        color: COLORS.WHITE,
        textAlign: 'center',
        marginBottom: 25,
    },
    wrapper: {
        width: '100%',
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
