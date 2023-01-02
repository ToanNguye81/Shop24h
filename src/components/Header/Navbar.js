import { Avatar } from "@mui/material";
import Stack from '@mui/material/Stack';
import Logo from "../../assets/images/Logo.png"
import * as React from 'react';
import { useSelector } from 'react-redux';
import { UserAvatar } from "./UserAvatar";

function Navbar() {

  const { photoURL } = useSelector((reduxData) => reduxData.signInReducer);

  return (
    <div className="px-3 py-2 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-left justify-content-left justify-content-lg-start">
          <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            <img src={Logo} width="80" alt="logo"></img>
          </a>

          <div>
            <div className="container nav header-nav">
              <div className="row p-2">
                <a href="/" className="text-center pt-2 text-secondary">
                  <i className="fa fa-home fa-2x"></i>
                </a>
              </div>
              <div className="row p-2">
                <a href="/" className="text-center pt-2 text-white ">
                  <i className="fa fa-dashboard fa-2x"></i>
                </a>
              </div>
              <div className="row p-2">
                <a href="/" className="text-center pt-2 text-white">
                  <i className="fa fa-bell-o fa-2x"></i>
                </a>
              </div>
              <div className="row p-2">
                <a href="/" className="text-center pt-2 text-white">
                  <i className="fa fa-cart-plus fa-2x"></i>
                </a>
              </div>
              <div className="row p-2">
                {photoURL === null ?
                  <a href="/login" className="text-center pt-2 text-white">
                    <i className="fa fa-user-circle fa-2x"></i>
                  </a>
                  :
                    <UserAvatar/>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
