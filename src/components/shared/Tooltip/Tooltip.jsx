import MUITooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

const Tooltip = forwardRef(({ children, ...props }, ref) => (
  <MUITooltip {...props} ref={ref}>
    <div>{children}</div>
  </MUITooltip>
));

Tooltip.propTypes = {
  children: PropTypes.any.isRequired,
  minWidth: PropTypes.number
};

export default Tooltip;
