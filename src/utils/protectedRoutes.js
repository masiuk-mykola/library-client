import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { userTokenLSKey } from "@constants/common";
import { routes } from "@constants/routes";

export const PrivateRoute = (Component) => (props) => {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const tokenFromLS = localStorage.getItem(userTokenLSKey);
    const token = tokenFromLS ? JSON.parse(tokenFromLS) : null;

    if (!token) {
      navigate(routes.login.path);
    } else {
      setIsAuthorized(true);
    }
  }, []);

  return isAuthorized ? <Component {...props} /> : null;
};

export const PublicRoute = (Component) => (props) => {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(true);

  useEffect(() => {
    const tokenFromLS = localStorage.getItem(userTokenLSKey);
    const token = tokenFromLS ? JSON.parse(tokenFromLS) : null;

    if (token) {
      navigate(routes.dashboard.path);
    } else {
      setIsAuthorized(false);
    }
  }, []);

  return isAuthorized ? null : <Component {...props} />;
};
