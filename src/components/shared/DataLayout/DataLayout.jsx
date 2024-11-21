import React from "react";
import PageTitle from "@components/PageTitle/PageTitle.jsx";
import Paper from "@components/shared/Paper/Paper.jsx";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import {
  StyledCircularProgress,
  StyledLoaderWrapper
} from "@components/shared/DataLayout/styled.js";

const DataLayout = ({ title, renderData, isLoading }) => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle title={t(title)} />
      {isLoading && (
        <StyledLoaderWrapper>
          <StyledCircularProgress size={50} />
        </StyledLoaderWrapper>
      )}
      <Paper>{renderData}</Paper>
    </>
  );
};

DataLayout.propTypes = {
  title: PropTypes.string,
  renderData: PropTypes.any,
  isLoading: PropTypes.bool
};
export default DataLayout;
