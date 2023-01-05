import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/styles/styles.css"
import Footer from './views/Footer';
import Body from './views/Body';
import Header from "./views/Header";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Grid } from "@mui/material";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Grid mt={10}>
        <Body />
        </Grid>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}
export default App;