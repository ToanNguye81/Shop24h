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

          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="/" className="nav-link text-secondary">
                {/* <fa className="bi d-block mx-auto mb-1" width="24" height="24"></fa>
                <FontAwesomeIcon icon={('home')} /> */}
                Home
              </a>
            </li>
            <li>
              <a href="/" className="nav-link text-white">
                {/* <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg> */}
                Dashboard
              </a>
            </li>
            <li>
              <a href="/" className="nav-link text-white">
                {/* <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg> */}
                Orders
              </a>
            </li>
            <li>
              <a href="/" className="nav-link text-white">
                {/* <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg> */}
                Products
              </a>
            </li>
            <li>
              <a href="/" className="nav-link text-white">
                {/* <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg> */}
                Customers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
