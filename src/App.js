import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/styles/styles.css"
import "@fontsource/poppins";
import Footer from './views/Footer';
import Body from './views/Body';
import Header from "./views/Header";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Container } from "reactstrap";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Container>
          <Header />
        </Container>
        <Body />
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}
export default App;