import PropTypes from "prop-types";
import React, { useState } from "react";

import { ErrorStyled, InputStyled, LabelStyled, WrapperStyled } from "./styled";

import IconForPassword from "../IconForPassword/IconForPassword";

export default function FormField({
  register,
  errors,
  label,
  name,
  dirtyFields,
  icon,
  hasValue,
  ...props
}) {
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <div>
      <WrapperStyled>
        <InputStyled
          {...(register && register(name))}
          id={name}
          name={name}
          {...props}
          type={isShowPassword ? "text" : props.type}
        />
        {label && !icon && (
          <LabelStyled dirty={dirtyFields?.[name] || hasValue} htmlFor={name}>
            {label}
          </LabelStyled>
        )}

        {props.type === "password" && (
          <IconForPassword
            isShowPassword={isShowPassword}
            setIsShowPassword={setIsShowPassword}
          />
        )}
      </WrapperStyled>
      {errors?.[name] && <ErrorStyled>{errors[name]?.message}</ErrorStyled>}
    </div>
  );
}
FormField.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.oneOf(["text", "email", "password", "search", "number"]),
  placeholder: PropTypes.string,
  dirtyFields: PropTypes.object,
  icon: PropTypes.bool,
  className: PropTypes.string,
  hasValue: PropTypes.bool
};
