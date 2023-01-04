import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectPrice() {
  const [Price, setPrice] = React.useState('');

  const handleChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 80 }} mt={3}>
      <FormControl fullWidth>
        <InputLabel id="select-Price">Price</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={Price}
          label="Price"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}