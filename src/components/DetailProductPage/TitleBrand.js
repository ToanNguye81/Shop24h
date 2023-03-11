import { Grid, Typography } from "@mui/material"
export const TitleBrand = ({brand}) => {
    return (
        <Grid container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            sx={{ display: { md: 'flex' }, backgroundColor: "#222222", pt: 1, pb: 1 }}
        >
            <Grid item xs={12} md={4}
                sx={{ textAlign: 'center' }}
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant="h2" sx={{ color: "#FFFFFF", fontWeight: 400 }}>
                    {brand}
                </Typography>
            </Grid>
        </Grid>
    )
}