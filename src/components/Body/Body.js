import BodyTitle from "./BodyTitle"
import ProductList from "./ProductList"

function Body() {   
        return(
            <div className="container">
                <div className="row mt-5 pt-5">
                <BodyTitle/>
                <ProductList/>
                </div>
            </div>
        )
}
export default Body;