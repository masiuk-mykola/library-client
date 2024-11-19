import styled from "@emotion/styled";

import { navigationWidth } from "@constants/common";

export const HeaderStyled = styled("header")(({ theme }) => ({
  padding: theme.spacing(1),
  marginLeft: navigationWidth,
  backgroundColor: `${theme.palette.surface.main}`
}));
