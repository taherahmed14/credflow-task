export const ProductCard = ({ product }) => {

    const addToCart = (data) => {
        // console.log(data);
        if(localStorage.getItem("wineCart") === null) {
            localStorage.setItem("wineCart", JSON.stringify([]));
        }

        let cart = JSON.parse(localStorage.getItem("wineCart"));
        cart.push(data);
        localStorage.setItem("wineCart", JSON.stringify(cart));
    };

    return(
        <div className="productCard">
            <div>
                <img src={product.image} />
            </div>
            <div>
                <div>{product.winery}</div>
                <div>{product.rating.average}</div>
            </div>
            <div>
                <button onClick={() => addToCart(product)}>Add to cart</button>
            </div>
        </div>
    )
}