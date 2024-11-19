import * as Yup from 'yup';

export const validationSchema = (t) =>
  Yup.object().shape({
    libraryCode: Yup.string()
      .label(t('libraryCode.title'))
      .trim()
      .required(t('libraryCode.required')),
    authorCode: Yup.string()
      .label(t('authorCode.title'))
      .trim()
      .required(t('authorCode.required')),
    firstName: Yup.string()
      .label(t('authorFirstName.title'))
      .trim()
      .required(t('authorFirstName.required')),
    lastName: Yup.string()
      .label(t('authorLastName.title'))
      .trim()
      .required(t('authorLastName.required')),
    title: Yup.string()
      .label(t('title.title'))
      .trim()
      .required(t('title.required')),
    cityOfPublication: Yup.string()
      .label(t('cityOfPublication.title'))
      .trim()
      .required(t('cityOfPublication.required')),
    publishingHouse: Yup.string()
      .label(t('publishingHouse.title'))
      .trim()
      .required(t('publishingHouse.required')),
    yearOfPublishing: Yup.number()
      .label(t('yearOfPublishing.title'))
      .required(t('yearOfPublishing.required'))
      .transform((value, originalValue) =>
        originalValue.trim() === '' ? null : value
      )
      .min(1000, t('yearOfPublishing.min'))
      .max(new Date().getFullYear(), t('yearOfPublishing.max')),
    numberOfPages: Yup.number()
      .label(t('numberOfPages.title'))
      .transform((value, originalValue) =>
        originalValue.trim() === '' ? null : value
      )
      .required(t('numberOfPages.required')),
    numberOfCopies: Yup.number()
      .label(t('numberOfCopies.title'))
      .transform((value, originalValue) =>
        originalValue.trim() === '' ? null : value
      )
      .required(t('numberOfCopies.required')),
    location: Yup.string()
      .label(t('location.title'))
      .trim()
      .required(t('location.required')),
    sourceOfReceipt: Yup.string()
      .label(t('sourceOfReceipt.title'))
      .trim()
      .required(t('sourceOfReceipt.required'))
  });
