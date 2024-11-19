import MuiModal from '@mui/material/Modal';
import PT from 'prop-types';
import React from 'react';

import { ContainerModal, HeaderModal } from './styled';

import Box from '../Box/Box';
import IconButton from '../IconButton/IconButton';
import { CloseIcon } from '../Icons/Icons';
import Skeleton from '../Skeleton/Skeleton';
import Stack from '../Stack/Stack';
import Typography from '../Typography/Typography';

export const modalLoading = (
  <Box width="400px" marginX="auto">
    <Skeleton height="60px" width="400px" />
    <Skeleton height="60px" width="200px" />
    <Skeleton height="60px" width="200px" />
  </Box>
);

export const BaseModal = ({ open, children, onClose, ...rest }) => (
  <MuiModal
    sx={{ overflowY: 'scroll' }}
    open={open}
    onClose={onClose}
    slotProps={{ backdrop: { onClick: null } }}
    {...rest}
  >
    {children}
  </MuiModal>
);

const Modal = ({
  children,
  title,
  withCloseIcon,
  loading,
  maxHeight,
  ...rest
}) => (
  <BaseModal {...rest}>
    <ContainerModal maxHeight={maxHeight}>
      <HeaderModal minWidth="300px">
        {title && (
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              textAlign: 'center',
              marginBottom: 2.5
            }}
          >
            {title}
          </Typography>
        )}
        {withCloseIcon && (
          <Stack justifyContent="space-between" alignItems="flex-start">
            <IconButton size="small" onClick={rest.onClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
        )}
      </HeaderModal>
      <Box>{loading ? modalLoading : children}</Box>
    </ContainerModal>
  </BaseModal>
);

const defaultPropTypes = {
  open: PT.bool,
  onClose: PT.func,
  children: PT.node,
  maxHeight: PT.string
};
BaseModal.propTypes = defaultPropTypes;
Modal.propTypes = {
  ...defaultPropTypes,
  withCloseIcon: PT.bool,
  title: PT.string.isRequired,
  loading: PT.bool
};

export default Modal;
