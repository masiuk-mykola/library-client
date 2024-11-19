import PropTypes from "prop-types";
import React from "react";

import { VisibilityIconStyled, VisibilityOffIconStyled } from "./styled";

import {
  VisibilityIcon,
  VisibilityOffIcon
} from "@components/shared/Icons/Icons";

export default function IconForPassword({ isShowPassword, setIsShowPassword }) {
  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  return (
    <>
      {isShowPassword && (
        <VisibilityIconStyled onClick={handleShowPassword}>
          <VisibilityIcon size={24} />
        </VisibilityIconStyled>
      )}
      {!isShowPassword && (
        <VisibilityOffIconStyled onClick={handleShowPassword}>
          <VisibilityOffIcon size={24} />
        </VisibilityOffIconStyled>
      )}
    </>
  );
}

IconForPassword.propTypes = {
  isShowPassword: PropTypes.bool,
  setIsShowPassword: PropTypes.func
};
