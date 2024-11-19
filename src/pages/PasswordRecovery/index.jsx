import PropTypes from "prop-types";
import React from "react";

import PageTitle from "@components/PageTitle/PageTitle";

function PasswordRecovery({ title }) {
  return (
    <>
      <PageTitle title={title} />
      <div>PasswordRecovery</div>
    </>
  );
}

PasswordRecovery.propTypes = {
  title: PropTypes.string
};
export default PasswordRecovery;
