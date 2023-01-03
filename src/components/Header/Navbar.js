import Logo from "../../assets/images/Logo.png"
import * as React from 'react';
import { useSelector } from 'react-redux';
import { UserAvatar } from "./UserAvatar";
import ShopDropDown from "./ShopDropDown";

function Navbar() {

  const { photoURL } = useSelector((reduxData) => reduxData.signInReducer);

  return (
    <div className="px-3 py-2 bg-dark text-white">
      <div className="container">
        <div className="d-flex justify-content-between">
          <a href="/" className="d-flex">
            <img src={Logo} width="80" alt="logo"></img>
          </a>

          <div className="col-8 d-flex justify-content-between align-items-center" >
            <a className="h5" href="/Home">Home</a>
            <ShopDropDown></ShopDropDown>
            <a className="h5" href="/About">About</a>
            <a className="h5" href="/Blog">Blog</a>
            <a className="h5" href="/Contact">Contact</a>
          </div>

          

          <div>
            <div className="container nav header-nav">
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
                  <UserAvatar />
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
