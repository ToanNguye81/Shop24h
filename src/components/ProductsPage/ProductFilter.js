import PropTypes from 'prop-types';
// @mui
import {
  Box,
  Stack,
  Button,
  Drawer,
  Divider,
  Checkbox,
  FormGroup,
  IconButton,
  Typography,
  RadioGroup,
  FormControlLabel,
  Grid,
} from '@mui/material';
import { ClearOutlined, Close } from '@mui/icons-material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import PriceRange from './ProductFilter/PriceRange';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { setBrand, setCategory, setGender } from '../../actions/product.actions';

// ----------------------------------------------------------------------

export const GENDER_OPTIONS = ['MEN', 'WOMEN', "KIDS"];
export const BRAND_OPTIONS = ["NIKE", "ADIDAS", "Vans", "Balenciaga", "Converse", "MLB", "Fila", "Reebok", "Puma", "Asics"];
export const CATEGORY_OPTIONS = ['LATEST', 'DISCOUNT', 'TRENDING'];

// ----------------------------------------------------------------------

ProductFilter.propTypes = {
  openFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
};

export default function ProductFilter({ openFilter, onOpenFilter, onCloseFilter }) {

  const dispatch = useDispatch();
  const { brand, category, gender } = useSelector(reduxData => reduxData.productReducers)
  const [checkedBrands, setCheckedBrands] = useState(brand);
  const [checkedGenders, setCheckedGenders] = useState(gender);
  const [checkedCategories, setCheckedCategories] = useState(category);

  const handleBrandCheckboxChange = (event) => {
    const brandName = event.target.name;
    if (event.target.checked) {
      setCheckedBrands([...checkedBrands, brandName]);
    } else {
      setCheckedBrands(checkedBrands.filter((brand) => brand !== brandName));
    }
  };
  const handleGenderCheckboxChange = (event) => {
    const genderName = event.target.name;
    if (event.target.checked) {
      setCheckedGenders([...checkedGenders, genderName]);
    } else {
      setCheckedGenders(checkedGenders.filter((gender) => gender !== genderName));
    }
  };
  const handleCategoryCheckboxChange = (event) => {
    const categoryName = event.target.name;
    if (event.target.checked) {
      setCheckedCategories([...checkedCategories, categoryName]);
    } else {
      setCheckedCategories(checkedCategories.filter((category) => category !== categoryName));
    }
  };

  useEffect(() => {
    dispatch(setBrand(checkedBrands));
    console.log(brand)
  }, [checkedBrands]);

  useEffect(() => {
    dispatch(setGender(checkedGenders));
    console.log(gender)
  }, [checkedGenders]);

  useEffect(() => {
    dispatch(setCategory(checkedCategories));
    console.log(gender)
  }, [checkedCategories]);

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
              Price
            </Typography>
            <Grid container>
              <PriceRange />
            </Grid>
          </div>

          <div>
            <Typography variant="subtitle1" gutterBottom>
              Brand
            </Typography>
            <RadioGroup>
              {BRAND_OPTIONS.map((item) => (
                <FormControlLabel key={item}
                  label={item}
                  control={<Checkbox checked={checkedBrands.includes(item)} onChange={handleBrandCheckboxChange} name={item} />} />
              ))}
            </RadioGroup>
          </div>

          <div>
            <Typography variant="subtitle1" gutterBottom>
              Gender
            </Typography>
            <FormGroup>
              {GENDER_OPTIONS.map((item) => (
                 <FormControlLabel key={item}
                 label={item}
                 control={<Checkbox checked={checkedGenders.includes(item)} onChange={handleGenderCheckboxChange} name={item} />} />
             ))}
            </FormGroup>
          </div>

          <div>
            <Typography variant="subtitle1" gutterBottom>
              Category
            </Typography>
              <FormGroup>
              {CATEGORY_OPTIONS.map((item) => (
                 <FormControlLabel key={item}
                 label={item}
                 control={<Checkbox checked={checkedCategories.includes(item)} onChange={handleCategoryCheckboxChange} name={item} />} />
             ))}
            </FormGroup>
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
