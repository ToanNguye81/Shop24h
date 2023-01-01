import BodyTitle from "../components/Body/BodyTitle"
import ProductList from "../components/Body/ProductList"
import Carousel from "../components/Body/Carousel";

function Body() {
    return (
        <>
            <Carousel/>
            <div className="container">
                <div className="">
                    <BodyTitle />
                    <ProductList />
                </div>
            </div>
        </>
    )
}
export default Body;