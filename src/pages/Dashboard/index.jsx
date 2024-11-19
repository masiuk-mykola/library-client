import PropTypes from "prop-types";

import React from "react";

import { useTranslation } from "react-i18next";

import DashboardContent from "@components/content/DashboardContent/DashboardContent";
import PageTitle from "@components/PageTitle/PageTitle";
import { PrivateRoute } from "@utils/protectedRoutes";

function Dashboard({ title }) {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle title={t(title)} />
      <DashboardContent />
    </>
  );
}

Dashboard.propTypes = {
  title: PropTypes.string
};
export default PrivateRoute(Dashboard);
