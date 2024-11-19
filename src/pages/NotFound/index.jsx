import PropTypes from "prop-types";
import React from "react";

import PageTitle from "@components/PageTitle/PageTitle";

function NotFound({ title }) {
  return (
    <>
      <PageTitle title={title} />
      <div>Not Found</div>
    </>
  );
}

NotFound.propTypes = {
  title: PropTypes.string
};
export default NotFound;
