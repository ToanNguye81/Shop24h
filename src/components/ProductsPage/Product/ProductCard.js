import * as React from 'react';
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
// components
import Label from '../../../components/label';
import CardButton from './CardButton';
// ----------------------------------------------------------------------

export default function ProductCard({ product }) {
  const { buyPrice, category, imageUrl, name, promotionPrice, } = product;
  return (
    <Card variant='none'>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {category && (
          <Label
            variant="filled"
            color={(category === 'DISCOUNT' && 'error') || (category === 'TRENDING' && 'info') || 'success'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {category}
          </Label>
        )}
        <CardButton imageUrl={imageUrl}/>
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link color="inherit" underline="hover">
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="flex-end" justifyContent="space-between">
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: 'text.disabled',
                textDecoration: 'line-through',
              }}
            >
              ${buyPrice}
            </Typography>
          </Typography>
          <Typography variant="subtitle1">
            &nbsp;
            ${promotionPrice}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
