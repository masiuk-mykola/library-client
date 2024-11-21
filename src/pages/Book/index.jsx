import React from 'react';
import { apiUrls } from '@constants/apiUrls.js';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import DataLayout from '@components/shared/DataLayout/DataLayout.jsx';
import { booksService } from '@services/books.js';
import { useQuery } from '@tanstack/react-query';

const Book = ({ title }) => {
  const params = useParams();

  const { data } = useQuery({
    queryKey: [apiUrls.books.getBooks],
    queryFn: () => booksService.getBookById(params.id),
    refetchOnMount: true
  });

  console.log('data', data);

  return (
    <>
      <DataLayout title={title} renderData="hello" />
    </>
  );
};

Book.propTypes = {
  title: PropTypes.string
};

export default Book;
