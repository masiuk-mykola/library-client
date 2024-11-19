import PropTypes from "prop-types";
import React from "react";

import { useTranslation } from "react-i18next";

import PageTitle from "@components/PageTitle/PageTitle";

function Readers({ title }) {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle title={t(title)} />
      <div>
        Add table with readers, by clicking on any reader you&apos;ll be
        redirected on reader page with info about this reader books
      </div>
    </>
  );
}

Readers.propTypes = { title: PropTypes.string };

export default Readers;
