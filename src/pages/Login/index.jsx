import { useTranslation } from "react-i18next";
import React from "react";

import PageTitle from "@components/PageTitle/PageTitle";
// import LoginForm from '@components/shared/Forms/LoginForm/LoginForm';
import { PublicRoute } from "@utils/protectedRoutes";
import PropTypes from "prop-types";
import LoginForm from "@components/shared/Forms/LoginForm/LoginForm.jsx";

function Login({ title }) {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle title={t(title)} />
      <LoginForm />
    </>
  );
}

Login.propTypes = {
  title: PropTypes.string
};

export default PublicRoute(Login);
