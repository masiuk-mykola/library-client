import styled from '@emotion/styled';
import { DataGrid } from '@mui/x-data-grid';

export const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  backgroundColor: theme.palette.surface.main
}));
