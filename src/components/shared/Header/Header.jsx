import { Stack, useTheme } from "@mui/material";

import React from "react";

import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import { HeaderStyled } from "./styled";

import IconButton from "@components/shared/IconButton/IconButton";
import {
  DarkModeIcon,
  LightModeIcon,
  LogoutIcon,
  PersonIcon
} from "@components/shared/Icons/Icons";
import Tooltip from "@components/shared/Tooltip/Tooltip";
import { apiUrls } from "@constants/apiUrls";
import { themeLSKey, userTokenLSKey } from "@constants/common";
import { notification } from "@constants/notificationMessages";
import { routes } from "@constants/routes";
import { useLocalStorage } from "@hooks/useLocalStorage";
import { logOut } from "@store/authSlice";
import { setTheme } from "@store/themeSlice";
import api, { clearAuthHeader } from "@utils/api";

function Header() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [themeMode, setThemeMode] = useLocalStorage(themeLSKey, "light");
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
    dispatch(themeMode === "light" ? setTheme("dark") : setTheme("light"));
  };

  const logout = async () => {
    try {
      await api.post(apiUrls.auth.logout);
      clearAuthHeader();
      localStorage.removeItem(userTokenLSKey);
      toast.success(notification(t).logout.success);
      dispatch(logOut());
      navigate(routes.login.path);
    } catch (error) {
      toast.error(notification(t).logout.error);
    }
  };

  return (
    <HeaderStyled>
      <Stack direction="row" justifyContent="flex-end">
        <Tooltip title={t("changeTheme")}>
          <IconButton onClick={handleThemeChange}>
            {theme.palette.mode === "dark" ? (
              <LightModeIcon />
            ) : (
              <DarkModeIcon />
            )}
          </IconButton>
        </Tooltip>

        <Tooltip title={t(routes.profile.title)}>
          <IconButton onClick={() => navigate(routes.profile.path)}>
            <PersonIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title={t("logout")}>
          <IconButton onClick={() => logout()}>
            <LogoutIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    </HeaderStyled>
  );
}

export default Header;
