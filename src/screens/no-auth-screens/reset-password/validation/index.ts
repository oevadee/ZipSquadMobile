import { TFunction } from 'i18next';
import { ResetPasswordFormData } from 'screens/no-auth-screens/reset-password/types';
import * as yup from 'yup';

export const resetPasswordSchema = (t: TFunction, name: ResetPasswordFormData) =>
    yup.object().shape({
        [name.email]: yup.string().email(t('validation.email')).required(t('validation.required')),
    });
