import routes from "../routes";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
const Content = () => {
    return (
        <div>
            <Routes>
                {routes.map((router, index) => {
                    if (router.path) {
                        return <Route key={index} exact path={router.path} element={router.element} ></Route>
                    } else {
                        return null;
                    }

                })}
                <Route path="*" element={<HomePage />}></Route>
            </Routes>
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center" mt={2}>
                <Button variant="contained" style={{ backgroundColor: "#4b6584" }}>View All</Button>
            </Grid>
        </div>
    )
}

export default Content;