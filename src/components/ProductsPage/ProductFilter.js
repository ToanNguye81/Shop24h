import PropTypes from 'prop-types';
// @mui
import {
  Box,
  Radio,
  Stack,
  Button,
  Drawer,
  Rating,
  Divider,
  Checkbox,
  FormGroup,
  IconButton,
  Typography,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';
// components
// import Scrollbar from '../../../components/scrollbar';
// import { ColorMultiPicker } from '../../../components/color-utils';
import { Clear, ClearOutlined, Close } from '@mui/icons-material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

// ----------------------------------------------------------------------

export const SORT_BY_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'priceDesc', label: 'Price: High-Low' },
  { value: 'priceAsc', label: 'Price: Low-High' },
];
export const GENDER_OPTIONS = ['MEN', 'WOMEN', "KIDS"];
export const BRAND_OPTIONS = ["Nike", "Adidas", "Vans", "Balenciaga", "Converse", "MLB", "Fila", "Reebok", "Puma", "Asics"];
export const CATEGORY_OPTIONS = ['All', 'Latest', 'Discount', 'Trending'];

export const RATING_OPTIONS = ['up4Star', 'up3Star', 'up2Star', 'up1Star'];

export const PRICE_OPTIONS = [
  { value: 'below', label: 'Below $25' },
  { value: 'between', label: 'Between $25 - $75' },
  { value: 'between', label: 'Between $25 - $75' },
  { value: 'above', label: 'Above $75' },
];
// ----------------------------------------------------------------------

ProductFilter.propTypes = {
  openFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
};

export default function ProductFilter({ openFilter, onOpenFilter, onCloseFilter }) {
  return (
    <>
      <Button disableRipple color="inherit" endIcon={<FilterAltIcon />} onClick={onOpenFilter}>
        Filters&nbsp;
      </Button>
      <Drawer
        anchor="right"
        open={openFilter}
        onClose={onCloseFilter}
        PaperProps={{
          sx: { width: 280, border: 'none' },
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
          <Typography variant="subtitle1" sx={{ ml: 1 }}>
            Filters
          </Typography>

          <IconButton onClick={onCloseFilter}>
            <Close />
          </IconButton>
        </Stack>

        <Divider />
        <Stack spacing={3} sx={{ p: 3 }}>

          <div>
            <Typography variant="subtitle1" gutterBottom>
              Brand
            </Typography>
            <RadioGroup>
              {BRAND_OPTIONS.map((item) => (
                <FormControlLabel key={item} control={<Checkbox />} label={item} />
              ))}
            </RadioGroup>
          </div>

          <div>
            <Typography variant="subtitle1" gutterBottom>
              Gender
            </Typography>
            <FormGroup>
              {GENDER_OPTIONS.map((item) => (
                <FormControlLabel key={item} control={<Checkbox />} label={item} />
              ))}
            </FormGroup>
          </div>

          <div>
            <Typography variant="subtitle1" gutterBottom>
              Category
            </Typography>
            <RadioGroup>
              {CATEGORY_OPTIONS.map((item) => (
                <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
              ))}
            </RadioGroup>
          </div>

          <div>
            <Typography variant="subtitle1" gutterBottom>
              Price
            </Typography>
            <RadioGroup>
              {PRICE_OPTIONS.map((item) => (
                <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.label} />
              ))}
            </RadioGroup>
          </div>

        </Stack>

        <Box sx={{ p: 3 }}>
          <Button
            fullWidth
            size="large"
            type="submit"
            color="inherit"
            variant="outlined"
            startIcon={<ClearOutlined />}
          >
            Clear All
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
