import { Grid, Typography} from "@mui/material"
export const TitleName = () => {
    return (
        <Grid container 
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            sx={{ display: {md: 'flex' }, backgroundColor: "#bdc3c7",pt:15,pb:4 }}
            >
            <Grid item xs={12} md={4}
                sx={{ textAlign: 'center' }}
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant="h2" sx={{ color: "#d35400", fontFamily: "Papyrus", fontWeight: 400 }}>Nike</Typography>
            </Grid>
        </Grid>
    )
}