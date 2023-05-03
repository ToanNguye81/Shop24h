import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/styles/styles.css"
import "@fontsource/poppins";
import Footer from './views/Footer';
import Body from './views/Body';
import Header from "./views/Header";
import Chatbot from "./components/ChatBot/ChatBot";
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/HeadSwiper.css";

// theme
import ThemeProvider from './theme';
import { CssBaseline } from "@mui/material";
function App() {

  return (
    <React.Fragment>
      <ThemeProvider>
        <CssBaseline/>
        <BrowserRouter>
          <Header />
          <Body />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </React.Fragment>
  );
}
export default App;