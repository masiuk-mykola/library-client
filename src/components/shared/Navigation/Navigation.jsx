import { List, ListItemIcon } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { ListItemButtonStyled, NavOptionStyled, NavStyled } from "./styled";

import Logo from "@components/shared/Logo/Logo";
import { navigationConfig } from "@constants/common";
import { useMode } from "@utils/theme";

function Navigation() {
  const { t } = useTranslation();
  const location = useLocation();
  const theme = useMode();

  return (
    <NavStyled>
      <Logo>LOGO</Logo>

      <nav>
        <List>
          {navigationConfig.map((option) => (
            <ListItemButtonStyled
              component={NavOptionStyled}
              to={option.path}
              key={option.path}
            >
              <ListItemIcon
                sx={{
                  color:
                    location?.pathname === option.path &&
                    theme.palette.primary.main
                }}
              >
                {option.icon}
              </ListItemIcon>
              {t(option.title)}
            </ListItemButtonStyled>
          ))}
        </List>
      </nav>
    </NavStyled>
  );
}

Navigation.propTypes = {};

export default Navigation;
