import PropTypes from "prop-types";
import React from "react";

import { useTranslation } from "react-i18next";

import PageTitle from "@components/PageTitle/PageTitle";
import RegisterForm from "@components/shared/Forms/RegisterForm/RegisterForm";

const Register = ({ title }) => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle title={t(title)} />
      <RegisterForm />
    </>
  );
};

Register.propTypes = {
  title: PropTypes.string
};

export default Register;
