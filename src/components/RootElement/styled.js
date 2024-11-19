import styled from "@emotion/styled";

import { navigationWidth } from "@constants/common";

export const RootElementStyled = styled("div")(() => ({
  height: "100vh"
}));

export const MainStyled = styled("main")(() => ({
  display: "flex",
  marginLeft: navigationWidth
}));

export const OutletStyled = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2)
}));
