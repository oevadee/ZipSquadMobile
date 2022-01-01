import { TFunction } from 'i18next';
import * as yup from 'yup';
import { SignInFormData } from 'screens/no-auth-screens/sign-in/types';

export const signInSchema = (t: TFunction, inputName: SignInFormData) =>
    yup.object().shape({
        [inputName.email]: yup
            .string()
            .email(t('validation.email'))
            .required(t('validation.completeAll')),
        [inputName.password]: yup
            .string()
            .min(8, t('validation.passwordShouldBeAtLeast8CharactersLong'))
            .required(t('validation.completeAll')),
    });
