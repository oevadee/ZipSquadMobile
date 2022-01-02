import React, { ReactElement, useState } from 'react';
import { View, StyleSheet, ViewStyle, Dimensions } from 'react-native';
import { BackButton } from 'screens/no-auth-screens/reset-password/components/back-button';
import { ResetPasswordForm } from 'screens/no-auth-screens/reset-password/components/form/ResetPasswordForm';
import { ResetPasswordSuccess } from 'screens/no-auth-screens/reset-password/components/form/ResetPasswordSuccess';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from 'styles/colors';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { resetPasswordSchema } from 'screens/no-auth-screens/reset-password/validation';
import {
    ResetPasswordFormData,
    ResetPasswordInputName,
} from 'screens/no-auth-screens/reset-password/types';
import { Spinner } from 'components/spinner';
import { KeyboardAware } from 'modules/keyboard-aware';
import { yupResolver } from '@hookform/resolvers/yup';

const INPUT_NAME = {
    email: 'email',
};

export const ResetPasswordScreen = (): ReactElement => {
    const { t } = useTranslation();
    const [isLoading, setLoading] = useState<boolean>(false);
    const [sendMail, setSendMail] = useState<boolean>(false);
    const navigation = useNavigation();
    const {
        handleSubmit,
        control,
        formState,
        formState: { errors },
    } = useForm<ResetPasswordInputName>({
        resolver: yupResolver(resetPasswordSchema(t, INPUT_NAME)),
    });

    const handleSendEmail = async ({ email }: ResetPasswordFormData): Promise<void> => {
        setLoading(true);
        try {
            // eslint-disable-next-line no-console
            console.log(email);
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    const handleBack = (): void => {
        setSendMail(false);
        navigation.goBack();
    };

    return (
        <KeyboardAware
            contentContainerStyle={styles.keyboard}
            automaticallyAdjustContentInsets={false}
        >
            <Spinner isLoading={isLoading} />
            <View style={styles.wrapper}>
                <View style={styles.form}>
                    {!sendMail ? (
                        <ResetPasswordForm
                            handleSendEmail={handleSubmit(handleSendEmail)}
                            control={control}
                            inputName={INPUT_NAME}
                            isValid={formState.isValid}
                            errors={errors}
                        />
                    ) : (
                        <ResetPasswordSuccess />
                    )}
                </View>
            </View>
            {!sendMail ? (
                <View style={styles.bottom}>
                    <BackButton handleBack={handleBack} />
                </View>
            ) : null}
        </KeyboardAware>
    );
};

interface Style {
    keyboard: ViewStyle;
    bottom: ViewStyle;
    wrapper: ViewStyle;
    form: ViewStyle;
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create<Style>({
    keyboard: {
        flexGrow: 1,
        backgroundColor: COLORS.BACKGROUND,
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        backgroundColor: COLORS.PRIMARY_THREE,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: width * 0.06,
        paddingVertical: height * 0.05,
        height: 400,
    },
    bottom: {
        position: 'absolute',
        bottom: 40,
        right: 40,
        flexDirection: 'row',
    },
});
