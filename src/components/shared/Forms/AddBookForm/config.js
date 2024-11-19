export const formFieldsData = (t) => [
  {
    name: 'libraryCode',
    label: t('libraryCode.title'),
    type: 'text'
  },
  {
    name: 'authorCode',
    label: t('authorCode.title'),
    type: 'text'
  },
  {
    name: 'firstName',
    label: t('authorFirstName.title'),
    type: 'text'
  },
  {
    name: 'lastName',
    label: t('authorLastName.title'),
    type: 'text'
  },
  {
    name: 'title',
    label: t('title.title'),
    type: 'text'
  },
  {
    name: 'cityOfPublication',
    label: t('cityOfPublication.title'),
    type: 'text'
  },
  {
    name: 'publishingHouse',
    label: t('publishingHouse.title'),
    type: 'text'
  },
  {
    name: 'yearOfPublishing',
    label: t('yearOfPublishing.title'),
    type: 'number'
  },
  {
    name: 'numberOfPages',
    label: t('numberOfPages.title'),
    type: 'number'
  },
  {
    name: 'numberOfCopies',
    label: t('numberOfCopies.title'),
    type: 'number'
  },
  {
    name: 'location',
    label: t('location.title'),
    type: 'text'
  },
  {
    name: 'sourceOfReceipt',
    label: t('sourceOfReceipt.title'),
    type: 'text'
  }
];

export const defaultValues = {
  libraryCode: '',
  authorCode: '',
  firstName: '',
  lastName: '',
  title: '',
  cityOfPublication: '',
  publishingHouse: '',
  yearOfPublishing: '',
  numberOfPages: '',
  numberOfCopies: '',
  location: '',
  sourceOfReceipt: ''
};
