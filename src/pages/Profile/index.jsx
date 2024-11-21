import PropTypes from 'prop-types';

import React from 'react';

import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';

import PageTitle from '@components/PageTitle/PageTitle';

import { apiUrls } from '@constants/apiUrls';
import { selectUser } from '@store/selectors';
import api from '@utils/api';
import { languages } from '@utils/i18n';
import { useQuery } from '@tanstack/react-query';

function Profile({ title }) {
  const user = useSelector(selectUser);
  const { t, i18n } = useTranslation();

  const getBooks = async () => {
    const books = await api.get(apiUrls.books.getBooks);
    console.log('books:', books);
    return books;
  };
  const getBookById = async (id) => {
    const books = await api.get(`${apiUrls.books.getBooks}${id}`);
    console.log('bookById:', books);
    return books;
  };

  const getBooksByIds = async (ids) => {
    const books = await api.get(apiUrls.books.getBooksByIds, {
      params: { ids }
    });
    console.log('getBooksByIds:', books);
    return books;
  };

  const getProfile = async () => {
    const data = await api.get(apiUrls.auth.getProfile);
    return data.librarian;
  };

  const { data } = useQuery({
    queryKey: [apiUrls.auth.getProfile],
    queryFn: () => getProfile()
  });

  const ids = ['65775940c6eea5d2661baf38', '65775940c6eea5d2661baf39'];
  // getBook();
  // getBookById('65775940c6eea5d2661baf38');
  // getBooksByIds(ids);
  return (
    <>
      <PageTitle title={t(title)} />
      <div>Profile</div>

      {Object.keys(languages).map((language) => (
        <button
          type="button"
          key={language}
          onClick={() => i18n.changeLanguage(language)}
          disabled={i18n.resolvedLanguage === language}
        >
          {languages[language].nativeName}
        </button>
      ))}
    </>
  );
}

Profile.propTypes = {
  title: PropTypes.string
};
export default Profile;
