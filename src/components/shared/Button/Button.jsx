import CircularProgress from '@mui/material/CircularProgress';
import Tooltip from '@mui/material/Tooltip';
import PT from 'prop-types';
import React from 'react';

import { StyledButton } from './styled';

const defaultProps = {
  type: 'button',
  variant: 'contained',
  color: 'primary'
};

const Button = ({ children, isLoading, tooltipProps, fluid, ...rest }) => {
  const Wrapper = tooltipProps ? Tooltip : React.Fragment;
  return (
    <Wrapper {...tooltipProps}>
      <StyledButton
        endIcon={
          isLoading ? <CircularProgress size={24} color="grey" /> : rest.endIcon
        }
        {...defaultProps}
        {...(fluid && { fluid: 'true' })}
        {...rest}
      >
        {children}
      </StyledButton>
    </Wrapper>
  );
};

export const propTypes = {
  children: PT.node,
  onClick: PT.func,
  variant: PT.oneOf(['text', 'contained', 'outlined']),
  type: PT.oneOf(['button', 'submit', 'reset']),
  size: PT.oneOf(['mini', 'small', 'medium', 'large']),
  icon: PT.string,
  disabled: PT.bool,
  isLoading: PT.bool,
  color: PT.string,
  endIcon: PT.node,
  className: PT.string,
  tooltipProps: PT.object,
  minWidth: PT.string,
  fluid: PT.bool
};
Button.propTypes = propTypes;

export default Button;
