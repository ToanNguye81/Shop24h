
import Navbar from "../components/Header/Navbar";
import { SignInNav } from "../components/Header/SignInNav";
function Header() {
    return (
      <div className="fixed-top pb-5 mb-5">
        <Navbar/>
        <SignInNav/>
      </div>
    );
}

export default Header;
