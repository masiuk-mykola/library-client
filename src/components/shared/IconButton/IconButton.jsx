import MUIIconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import React from 'react';

const IconButton = ({ children, ...props }) => (
  <MUIIconButton {...props}>{children}</MUIIconButton>
);

export default IconButton;
IconButton.propTypes = {
  children: PropTypes.element
};
