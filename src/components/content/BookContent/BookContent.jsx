import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { apiUrls } from '@constants/apiUrls.js';
import { booksService } from '@services/books.js';

const BookContent = () => {
  const params = useParams();

  const { data } = useQuery({
    queryKey: [apiUrls.books.getBooks],
    queryFn: () => booksService.getBookById(params.id),
    refetchOnMount: true
  });

  return <div>BookContent</div>;
};

export default BookContent;
