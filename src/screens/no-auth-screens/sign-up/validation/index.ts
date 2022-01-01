import { TFunction } from 'i18next';
import * as yup from 'yup';
import { SignUpFormData } from 'screens/no-auth-screens/sign-up/types';

export const signUpSchema = (t: TFunction, inputName: SignUpFormData) =>
    yup.object().shape({
        [inputName.email]: yup
            .string()
            .email(t('validation.email'))
            .required(t('validation.completeAll')),
        [inputName.password]: yup
            .string()
            .min(8, t('validation.passwordShouldBeAtLeast8CharactersLong'))
            .required(t('validation.completeAll')),
        [inputName.repeatPassword]: yup
            .string()
            .min(8, t('validation.passwordShouldBeAtLeast8CharactersLong'))
            .required(t('validation.completeAll')),
    });
