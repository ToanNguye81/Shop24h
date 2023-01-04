import { CardForm } from "./CardForm";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Products from "../../../database_sample/productsData.json"
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
function TrendingProducts() {
  return (
    <div class="pr-3 pl-3">
      <div>
        <h1 class="text-center mb-5 mt-4 pb-3">TRENDING PRODUCTS</h1>
      </div>
      <Carousel responsive={responsive}>
        {
          Products.slice(0, 12).map((item, i) => {
            return (
              <div>
                <div id={"card" - i}>
                  <div className="product-box card mb-3">
                    <div className="card-header text-center">
                      <h3 className="card-title">
                        <a className="text-light h5" href={item.imageUrl}>{item.name}</a>
                      </h3>
                    </div>
                    <div className="card-body">
                      <div className="text-center">
                        <a href={item.imageUrl}>
                          <img className="card-img-top img-thumbnail" alt={item.name} src={item.imageUrl} />
                        </a>
                      </div>
                      <p className="card-text mt-3"><b>Type: </b> {item.type}</p>
                      <p className="card-text"><b>Buy Price: </b>$ {item.buyPrice} </p>
                      <p className="card-text"><b>Promotion Price: </b>$ {item.promotionPrice} </p>
                      <p className="card-text description"> <b>Description: </b>
                        {item.description}
                      </p>
                      <div className="add-cart-container text-center mt-2">
                        <button type="button" className="btn btn-success">Add to Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          )
        }
      </Carousel>;
    </div>
  );
}
export default TrendingProducts;