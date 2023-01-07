import Accessory from "../components/HomePage/Accessory";
import BodyCarousel from "../components/HomePage/Carousel";
import DiscountProducts from "../components/HomePage/DiscountProducts";
import { Intro } from "../components/HomePage/Introduce";
import LatestProducts from "../components/HomePage/LatestProducts"
import News from "../components/HomePage/News";
import TrendingProducts from "../components/HomePage/TrendingProducts";
import { ViewAll } from "../components/HomePage/ViewAll";

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
            <ViewAll/>
        </>
    )
}
export default Body;