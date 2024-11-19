import styled from "@emotion/styled";

import IconButton from "@components/shared/IconButton/IconButton";

const eyeStyles = {
  position: "absolute",
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)"
};

export const VisibilityIconStyled = styled(IconButton)(() => ({
  ...eyeStyles
}));

export const VisibilityOffIconStyled = styled(IconButton)(() => ({
  ...eyeStyles
}));
