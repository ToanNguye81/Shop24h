import Products from "../../database_sample/productsData.json"
function CardForm(){

  return (
    <>
        {
          Products.map((item, i) => {
            return (
              <div className="col-6 col-sm-4" id={"card"-i}>
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
                  <p className="card-text"><b>Buy Price: </b> {item.buyPrice} $</p>
                  <p className="card-text"><b>Promotion Price: </b> {item.promotionPrice} $</p>
                  <p className="card-text description"> <b>Description: </b>
                    {item.description}
                  </p>
                  <div className="add-cart-container text-center mt-2">
                    <button type="button" className="btn btn-success">Add to Cart</button>
                  </div>
                </div>
              </div>
        
            </div>
          )
          })
        }
    </>
  )
}

export default CardForm;
