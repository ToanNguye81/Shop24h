import BodyTitle from "../components/Body/BodyTitle"
import LastestProducts from "../components/Body/LastestProducts"
import Carousel from "../components/Body/Carousel";

function Body() {
    return (
        <>
            <Carousel/>
            <div className="container">
                <div className="">
                    <BodyTitle />
                    <LastestProducts />
                </div>
            </div>
        </>
    )
}
export default Body;