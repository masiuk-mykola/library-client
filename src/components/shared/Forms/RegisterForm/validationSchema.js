import i18next from 'i18next';
import * as yup from 'yup';

export const registerSchema = yup
  .object({
    email: yup
      .string()
      .email(i18next.t('emailExample'))
      .label('Email')
      .trim()
      .required(i18next.t('emailRequired')),
    password: yup
      .string()
      .label('Password')
      .min(8, i18next.t('passwordLength'))
      .trim()
      .required(),
    firstName: yup.string().label('First name').trim().required(),
    lastName: yup.string().label('Last name').trim().required()
  })
  .required();
