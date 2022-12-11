import Navbar from "./Navbar";
import SignIn from "./SignIn";
function Header() {
    return (
      <div className="fixed-top pb-5 mb-5">
        <Navbar></Navbar>
        <SignIn></SignIn>
      </div>
    );
}

export default Header;
