import MuiCloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MUIDarkModeIcon from '@mui/icons-material/DarkMode';
import MUIDashboardIcon from '@mui/icons-material/Dashboard';
import MUILightModeIcon from '@mui/icons-material/LightMode';
import MUILogoutIcon from '@mui/icons-material/Logout';
import MUIPeopleIcon from '@mui/icons-material/People';
import MUIPersonIcon from '@mui/icons-material/Person';
import MUIVisibilityIcon from '@mui/icons-material/Visibility';
import MUIVisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import PropTypes from 'prop-types';
import React from 'react';

const defaultIconSize = '18px';

export const LightModeIcon = ({ size = defaultIconSize, sx, ...props }) => (
  <MUILightModeIcon sx={{ width: size, height: size, ...sx }} {...props} />
);

export const DarkModeIcon = ({ size = defaultIconSize, sx, ...props }) => (
  <MUIDarkModeIcon sx={{ width: size, height: size, ...sx }} {...props} />
);

export const DashboardIcon = ({ size = defaultIconSize, sx, ...props }) => (
  <MUIDashboardIcon sx={{ width: size, height: size, ...sx }} {...props} />
);

export const PersonIcon = ({ size = defaultIconSize, sx, ...props }) => (
  <MUIPersonIcon sx={{ width: size, height: size, ...sx }} {...props} />
);

export const PeopleIcon = ({ size = defaultIconSize, sx, ...props }) => (
  <MUIPeopleIcon sx={{ width: size, height: size, ...sx }} {...props} />
);

export const CloseIcon = ({ size = defaultIconSize, sx, ...props }) => (
  <MuiCloseOutlinedIcon sx={{ width: size, height: size, ...sx }} {...props} />
);
export const VisibilityIcon = ({ size = defaultIconSize, sx, ...props }) => (
  <MUIVisibilityIcon sx={{ width: size, height: size, ...sx }} {...props} />
);
export const VisibilityOffIcon = ({ size = defaultIconSize, sx, ...props }) => (
  <MUIVisibilityOffIcon sx={{ width: size, height: size, ...sx }} {...props} />
);
export const LogoutIcon = ({ size = defaultIconSize, sx, ...props }) => (
  <MUILogoutIcon sx={{ width: size, height: size, ...sx }} {...props} />
);

export const propTypes = {
  size: PropTypes.number,
  sx: PropTypes.object
};

LightModeIcon.propTypes = propTypes;
DarkModeIcon.propTypes = propTypes;
DashboardIcon.propTypes = propTypes;
PersonIcon.propTypes = propTypes;
PeopleIcon.propTypes = propTypes;
CloseIcon.propTypes = propTypes;
VisibilityIcon.propTypes = propTypes;
VisibilityOffIcon.propTypes = propTypes;
LogoutIcon.propTypes = propTypes;
