export const WishlistProductCard = ({ product, wishlistProducts, setWishlistProducts }) => {

    const handleDelete = (data) => {
        let cart = JSON.parse(localStorage.getItem("wineWishList"));
        let newCart = cart.filter(e => e.id !== data.id);
        localStorage.setItem("wineWishList", JSON.stringify(newCart));
        setWishlistProducts(JSON.parse(localStorage.getItem("wineWishList")));
    }

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
                <button onClick={() => handleDelete(product)}>Delete</button>
            </div>
        </div>
    )
};