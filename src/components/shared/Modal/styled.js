import { styled } from '@mui/material/styles';

import Stack from '../Stack/Stack';

export const ContainerModal = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: theme.palette.surface.main,
  padding: '20px',
  borderRadius: '12px',
  maxWidth: 'calc(100vw - 32px)'
}));

export const HeaderModal = styled(Stack)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-transform: capitalize;
  min-width: ${({ minWidth }) => minWidth};
`;
