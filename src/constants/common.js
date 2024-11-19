import { routes } from "@constants/routes.js";
import React from "react";
import {
  DashboardIcon,
  PeopleIcon,
  PersonIcon
} from "@components/shared/Icons/Icons.jsx";

export const themeLSKey = "libraryThemeMode";
export const headerHeight = "50px";
export const navigationWidth = "250px";
export const dateTimeFormats = {
  military: "DD-MM-YYYY HH:mm"
};

export const navigationConfig = [
  {
    path: routes.dashboard.path,
    title: routes.dashboard.title,
    icon: <DashboardIcon />
  },
  {
    path: routes.authors.path,
    title: routes.authors.title,
    icon: <PersonIcon />
  },
  {
    path: routes.readers.path,
    title: routes.readers.title,
    icon: <PeopleIcon />
  },
  {
    path: routes.profile.path,
    title: routes.profile.title,
    icon: <PersonIcon />
  }
];

export const userTokenLSKey = import.meta.env.VITE_APP_USER_TOKEN_LS_KEY;
