import PropTypes from 'prop-types';
import React from 'react';

import { useTranslation } from 'react-i18next';

import PageTitle from '@components/PageTitle/PageTitle';
import { useQuery } from '@tanstack/react-query';
import { apiUrls } from '@constants/apiUrls';
import { authorsService } from '@services/authors';

const Authors = ({ title }) => {
  const { t } = useTranslation();

  const { data, isLoading, refetch } = useQuery({
    queryKey: [apiUrls.author.getAuthors],
    queryFn: () => authorsService.getAuthors()
  });

  return (
    <>
      <PageTitle title={t(title)} />
      <div>
        Add table with authors, by clicking on any author you&apos;ll be
        redirected on author page with info about this author books
      </div>
    </>
  );
};

Authors.propTypes = {
  title: PropTypes.string
};

export default Authors;
