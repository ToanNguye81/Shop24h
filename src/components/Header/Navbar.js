import Logo from "../../assets/images/Logo.png"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar() {
  return (
    <div className="px-3 py-2 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-left justify-content-left justify-content-lg-start">
          <a href="/" className="d-flex px-5 mx-2 align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
            <img src={Logo} width="80" alt="logo"></img>
          </a>
          
          <div>
            <div className="container nav header-nav">
              <div className="row p-2">
                <a href="/" className="text-center text-secondary">
                  <i className="fa fa-home fa-2x"></i>
                  <div className="col-sm-2">Home</div>
                </a>
              </div>
              <div className="row p-2">
                <a href="/" className="text-center text-white ">
                  <i className="fa fa-dashboard fa-2x"></i>
                  <div className="col-sm-2">Dashboard</div>
                </a>
              </div>
              <div className="row p-2">
                <a href="/" className="text-center text-white">
                  <i className="fa fa-shopping-bag fa-2x"></i>
                  <div className="col-sm-2">Orders</div>
                </a>
              </div>
              <div className="row p-2">
                <a href="/" className="text-center text-white">
                  <i className="fa fa-cart-plus fa-2x"></i>
                  <div className="col-sm-2">Products</div>
                </a>
              </div>
              <div className="row p-2">
                <a href="/" className="text-center text-white">
                  <i className="fa fa-user-circle fa-2x"></i>
                  <div className="col-sm-2">Customers</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
