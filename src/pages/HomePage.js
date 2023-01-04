import Accessory from "../components/Body/HomePage/Accessory";
import BodyCarousel from "../components/Body/HomePage/Carousel";
import DiscountProducts from "../components/Body/HomePage/DiscountProducts";
import { Intro } from "../components/Body/HomePage/Introduce";
import LatestProducts from "../components/Body/HomePage/LatestProducts"
import News from "../components/Body/HomePage/News";
import TrendingProducts from "../components/Body/HomePage/TrendingProducts";

function Body() {
    return (
        <>
            <BodyCarousel />
            <Intro />
            <LatestProducts />
            <TrendingProducts />
            <DiscountProducts />
            <Accessory/>
            <News/>
        </>
    )
}
export default Body;