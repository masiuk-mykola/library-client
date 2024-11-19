import PropTypes from "prop-types";
import React from "react";

import PageTitle from "@components/PageTitle/PageTitle";

function ResetPassword({ title }) {
  return (
    <>
      <PageTitle title={title} />
      <div>
        Add table with readers, by clicking on any reader you&apos;ll be
        redirected on reader page with info about this reader books
      </div>
    </>
  );
}

ResetPassword.propTypes = {
  title: PropTypes.string
};
export default ResetPassword;
