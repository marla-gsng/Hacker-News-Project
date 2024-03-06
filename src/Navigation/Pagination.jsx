import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination({setPage, page}) {

    const handleChange = async (event, value) => {
        await setPage(value)

    }


  return (
    <Stack spacing={2}>
      
      <Pagination count={5} color="primary"  onChange={handleChange} page={page}/>
      
    </Stack>
  );
}