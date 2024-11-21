import { useQuery } from '@tanstack/react-query';

import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';

import { getColumns } from './config';
import { useNavigate } from 'react-router-dom';

import Button from '@components/shared/Button/Button';
import { AddBookForm } from '@components/shared/Forms/AddBookForm/AddBookForm';
import Modal from '@components/shared/Modal/Modal';
import Paper from '@components/shared/Paper/Paper';
import { apiUrls } from '@constants/apiUrls';
import Table from '@components/shared/Table/Table.jsx';
import { routes } from '@constants/routes.js';
import { booksService } from '@services/books.js';

const DashboardContent = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const { data, isLoading, refetch } = useQuery({
    queryKey: [apiUrls.books.getBooks],
    queryFn: () => booksService.getBooks(),
    refetchOnMount: true
  });

  const columns = getColumns(t);

  const rows = data?.books?.map((item) => ({
    ...item,
    id: item['_id']
  }));

  const handleAddBook = () => {
    setIsModalOpen(false);
    refetch();
  };

  const handleRowClick = (row) => {
    navigate(routes.book.url(row.id));
  };

  return (
    <>
      <Paper>
        <Button onClick={() => setIsModalOpen(true)}>{t('Add book')}</Button>
      </Paper>

      <Paper>
        <Table
          data={rows}
          columns={columns}
          loading={isLoading}
          onRowClick={handleRowClick}
        />
      </Paper>

      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        withCloseIcon
        title={t('Add book')}
      >
        <AddBookForm handleAddBook={handleAddBook} />
      </Modal>
    </>
  );
};

export default DashboardContent;
