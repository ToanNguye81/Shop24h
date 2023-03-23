import React, { useState } from 'react';
// @mui
import { Menu, Button, MenuItem, Typography } from '@mui/material';
import { Sort } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy } from '../../actions/product.actions';
// component

// ----------------------------------------------------------------------

const SORT_BY_OPTIONS = [
  { value: 'createdAt', label: 'Newest' },
  { value: 'category', label: 'Category' },
  { value: 'brand', label: 'Brand' },
  { value: 'price', label: 'Price' },
];

const SORT_ORDER_OPTIONS = [
  { value: 'desc', label: 'Low-High' },
  { value: 'asc', label: 'High-Low' },
];

export default function ProductSort() {
  const [open, setOpen] = useState(null);
  const {sortBy,sortOrder}=useSelector(reduxData=>reduxData.productReducers)
  const dispatch=useDispatch()

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };
  const handleClickSortBy = (sortBy) => {
    dispatch(setSortBy(sortBy))
    setOpen(null)

  }
  const handleClickSortOrder = () => {
    setOpen(null)
  }

  return (
    <React.Fragment>
      <Button
        color="inherit"
        disableRipple
        onClick={handleOpen}
        endIcon={<Sort />}
      >
        Sort By:&nbsp;
        <Typography component="span" variant="subtitle2" sx={{ color: 'text.secondary' }}>
          Newest
        </Typography>
      </Button>
      <Menu
        keepMounted
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {SORT_BY_OPTIONS.map((option) => (
          <MenuItem
            key={option.value}
            // selected={option.value === 'createdAt'}
            onClick={()=>handleClickSortBy(option.value)}
            sx={{ typography: 'body2' }}
          >
            {option.label}
          </MenuItem>
        ))}
        {SORT_ORDER_OPTIONS.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === 'newest'}
            onClick={()=>handleClickSortOrder(option.value)}
            sx={{ typography: 'body2' }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
}
