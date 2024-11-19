import styled from "@emotion/styled";

import { transition } from "@utils/theme";

export const WrapperStyled = styled("div")(() => ({
  position: "relative"
}));

export const InputStyled = styled("input")(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(1),
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: theme.shape.borderRadius,

  "&:focus + label": {
    transform: "translate(10px, -40px)",
    transition: transition("transform")
  }
}));

export const LabelStyled = styled("label")(({ dirty }) => ({
  position: "absolute",
  top: "50%",
  left: 0,
  transform: dirty ? "translate(10px, -40px)" : "translate(10px, -50%)",
  transition: transition("transform")
}));

export const ErrorStyled = styled("p")(({ theme }) => ({
  color: theme.palette.error.main,
  paddingLeft: 10
}));
