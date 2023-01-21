import { Grid } from "@mui/material";
import Info from "../components/Footer/Info";
import Social from "../components/Footer/Social";

function Footer() {
    return (
      <footer className="container-fluid bg-hor text-right b-0" style={{bottom: "0px"}}>
        <Grid container direction="row" >
            <Info/>
            <Social/>
        </Grid>
      </footer>
    );
}
export default Footer;
