import styled from '@emotion/styled';

export const PaperStyled = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.surface.main,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius
}));
