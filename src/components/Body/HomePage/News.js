import 'react-multi-carousel/lib/styles.css';
import * as React from 'react';
import { Grid } from '@mui/material';


function News() {
  return (
    <div>
      <div>
        <h2 class="text-center mb-5 mt-4 pb-3">NEWS</h2>
      </div>

      <Grid container
        direction="row"
        justifyContent="center"
        alignItems="start">

        <Grid item >
        <iframe width="853" height="480" src="https://www.youtube.com/embed/5L04JwtimN0" title="G-DRAGON: Seoul | All For 1 | Nike" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Grid>
      </Grid>
    </div>
  );
}
export default News;