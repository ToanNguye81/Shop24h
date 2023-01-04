import BodyTitle from "../components/Body/BodyTitle"
import LastestProducts from "../components/Body/LastestProducts"
import Carousel from "../components/Body/Carousel";
import { Intro } from "../components/Body/Intro";

function Body() {
    return (
        <>
            <Carousel/>
            <Intro></Intro>
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