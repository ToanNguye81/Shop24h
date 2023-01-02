import Info from "../components/Footer/Info";
import Social from "../components/Footer/Social";

function Footer() {
    return (
      <footer className="container-fluid bg-hor text-right pb-5">
        <div className="row mt-5">
            <Info/>
            <Social/>
        </div>
      </footer>
    );
}
export default Footer;