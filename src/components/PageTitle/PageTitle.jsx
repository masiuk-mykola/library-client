import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import React from "react";

function PageTitle({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default PageTitle;
