import { Pagination } from '@mui/material';

import { StyledPagination } from '../Pagination.styled';

export const PaginationContainer = ({ count, page, onChange }) => {
  return (
    <StyledPagination>
      <Pagination
        count={count}
        onChange={onChange}
        page={page}
        showFirstButton
        showLastButton
        size="large"
      />
    </StyledPagination>
  );
};
