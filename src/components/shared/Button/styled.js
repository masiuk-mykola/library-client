import MUIButton from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const miniStyle = {
  texTransform: 'capitalize !important',
  minWidth: '40px',
  height: '25px',
  padding: '5px 10px'
};

export const StyledButton = styled(MUIButton)(
  ({ variant, size, theme, fluid }) => ({
    textTransform: 'capitalize',
    minWidth: variant === 'text' ? 'auto' : '100px',
    whiteSpace: 'nowrap',
    boxShadow: 'none',
    paddingTop: '3px',
    paddingBottom: '3px',
    backgroundColor: theme.palette.primary.main,
    width: fluid ? '100%' : 'auto',
    ...(size === 'mini' && { ...miniStyle }),
    ...(variant === 'link' && { backgroundColor: 'transparent' }),

    '&:hover': {
      backgroundColor:
        variant === 'link' ? 'transparent' : theme.palette.primary.hover,
      color: variant === 'link' && theme.palette.primary.main
    }
  })
);
