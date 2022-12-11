import BodyTitle from "./BodyTitle"
import ProductList from "./ProductList"
import Carousel from "./Carousel";

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