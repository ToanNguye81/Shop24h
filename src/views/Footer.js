import Info from "../components/Footer/Info";
import Social from "../components/Footer/Social";

function Footer() {
    return (
      <footer className="container-fluid bg-hor text-right b-0" style={{bottom: "0px"}}>
        <div className="row">
            <Info/>
            <Social/>
        </div>
      </footer>
    );
}
export default Footer;
