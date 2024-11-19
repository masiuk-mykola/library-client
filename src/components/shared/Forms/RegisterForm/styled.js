import { styled } from '@mui/material/styles';

export const RegisterFormStyled = styled('form')(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
  display: 'flex',
  flexDirection: 'column',
  gap: '30px'
}));
