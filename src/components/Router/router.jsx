import { createBrowserRouter } from "react-router-dom";
import { routes } from "@constants/routes.js";
import Login from "@pages/Login/index.jsx";

import React from "react";
import RootElement from "@components/RootElement/RootElement.jsx";
import Dashboard from "@pages/Dashboard/index.jsx";
import Profile from "@pages/Profile/index.jsx";
import Register from "@pages/Register/index.jsx";
import Readers from "@pages/Readers/index.jsx";
import Authors from "@pages/Authors/index.jsx";
import PasswordRecovery from "@pages/PasswordRecovery/index.jsx";
import ResetPassword from "@pages/ResetPassword/index.jsx";
import NotFound from "@pages/NotFound/index.jsx";
import Book from "@pages/Book/index.jsx";

export const router = createBrowserRouter([
  {
    path: routes.dashboard.path,
    element: <RootElement />,
    children: [
      {
        index: true,
        element: <Dashboard title={routes.dashboard.title} />
      },
      {
        path: routes.profile.path,
        element: <Profile title={routes.profile.title} />
      },
      {
        path: routes.readers.path,
        element: <Readers title={routes.readers.title} />
      },
      {
        path: routes.authors.path,
        element: <Authors title={routes.authors.title} />
      },
      {
        path: routes.book.path,
        element: <Book title={routes.book.title} />
      }
    ]
  },
  {
    path: routes.login.path,
    element: <Login title={routes.login.title} />
  },
  {
    path: routes.register.path,
    element: <Register title={routes.register.title} />
  },
  {
    path: routes.passwordRecovery.path,
    element: <PasswordRecovery title={routes.passwordRecovery.title} />
  },
  {
    path: routes.resetPassword.path,
    element: <ResetPassword title={routes.resetPassword.title} />
  },
  {
    path: "/*",
    element: <NotFound title="Not found" />
  }
]);
