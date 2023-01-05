import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  


export const Breadcrumb = () => {
    const breadcrumbs =[
    {
        name: "MiuShop",
        url: "/"
     }, {
        name: "All Product",
        url: "/products"
     }]


    return (
        <Stack spacing={2} >
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {
                    breadcrumbs.map((value, index) =>
                        <Link underline="hover" key={index} color="inherit" href={value.url}  onClick={handleClick}>
                            {value.name}
                        </Link>
                    )
                }

            </Breadcrumbs>
        </Stack>
    );
}