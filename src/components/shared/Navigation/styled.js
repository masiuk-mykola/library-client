import styled from "@emotion/styled";

import { ListItemButton } from "@mui/material";
import { NavLink } from "react-router-dom";

import { headerHeight, navigationWidth } from "@constants/common";

export const NavOptionStyled = styled(NavLink)(({ theme }) => ({
  "&.active": {
    fontWeight: "bold",
    color: theme.palette.primary.main
  }
}));

export const NavStyled = styled("aside")(({ theme }) => ({
  width: navigationWidth,
  height: "100%",
  marginTop: `-${headerHeight}`,
  position: "fixed",
  backgroundColor: theme.palette.surface.main
}));

export const ListItemButtonStyled = styled(ListItemButton)(({ theme }) => ({
  padding: theme.spacing(2)
}));
