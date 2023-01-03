
import { NavBar } from "../components/Header/AppBar";
import Navbar from "../components/Header/Navbar";
function Header() {
    return (
      <div className="fixed-top pb-5 mb-5">
        {/* <Navbar/> */}
        <NavBar/>
      </div>
    );
}

export default Header;
