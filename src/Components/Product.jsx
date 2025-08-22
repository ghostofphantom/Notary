
import products from "../products"



function Product(){
return (
    <section className="products">
        <div className="container">
            <div className="row">

                
                  

                { products.map( (item) => (
                    <div className="col-md-4">
                    <div className="innerproductBox">
                        <div class="card">
                        <img src={item.img} class="card-img-top" alt={item.title} />
                        <div class="card-body">
                            <h5 class="card-title"> {item.title} </h5>
                            <p class="card-text"> {item.discription} </p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                        </div>
                    </div>
                </div>
                ) )}
            </div>
        </div>
    </section>
)
}

export default Product