import PropTypes from "prop-types";
import React from "react";

import { useTranslation } from "react-i18next";

import PageTitle from "@components/PageTitle/PageTitle";

const Authors = ({ title }) => {
  const { t } = useTranslation();
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
