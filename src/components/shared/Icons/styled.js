import styled from "@emotion/styled";
import React from "react";

// export const TitleStyled = styled(({ as: Tag = 'h1', ...rest }) => (
//   <Tag {...rest} />
// ))(({ color }) => ({
//   color: color || theme.palette.primary.main
// }));
export const TitleStyled = styled(({ as: Tag = "h1", ...rest }) => (
  <Tag {...rest} />
))(() => ({
  // color: theme.palette.primary.main
}));
