import { Button, Grid } from "@mui/material"
import { useNavigate } from "react-router-dom"

export const ViewAll = () => {
    const navigate=useNavigate();
    const onClickHandle=()=>{
        navigate("/products")
    }
    return (
        <Grid container
            direction="row"
            justifyContent="center"
            alignItems="center" mt={2} mb={4}>
            <Button variant="contained"
            onClick={onClickHandle}
            style={{ backgroundColor: "#24292E" }}>
                View All
            </Button>
        </Grid>
    )
}