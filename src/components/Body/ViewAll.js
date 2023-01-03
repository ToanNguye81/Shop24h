import { Button, Grid } from "@mui/material"

export const ViewAll = () => {
    return (
        <Grid container
            direction="row"
            justifyContent="center"
            alignItems="center" mt={2}>
            <Button variant="contained" style={{ backgroundColor: "#4b6584" }}>View All</Button>
        </Grid>
    )
}