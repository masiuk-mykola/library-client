import PropTypes from 'prop-types';
import React from 'react';

import { PaperStyled } from './styled';

function Paper({ children }) {
  return <PaperStyled>{children}</PaperStyled>;
}

Paper.propTypes = {
  children: PropTypes.node
};

export default Paper;
