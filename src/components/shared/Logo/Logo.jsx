import PropTypes from "prop-types";
import React from "react";

import { LogoStyled } from "./styled";

import { TitleStyled } from "@components/shared/Icons/styled";

function Logo({ children }) {
  return (
    <LogoStyled>
      <TitleStyled>{children}</TitleStyled>
    </LogoStyled>
  );
}

Logo.propTypes = {
  children: PropTypes.any
};
export default Logo;
