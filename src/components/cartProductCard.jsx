export const CartProductCard = ({ product, handleDelete }) => {

    const addToWishlist = (data) => {
        // console.log(data);
        if(localStorage.getItem("wineWishList") === null) {
            localStorage.setItem("wineWishList", JSON.stringify([]));
        }

        let wishlistPro = JSON.parse(localStorage.getItem("wineWishList"));
        wishlistPro.push(data);
        localStorage.setItem("wineWishList", JSON.stringify(wishlistPro));
    };

    return(
        <div className="productCard">
            <div>
                <img src={product.image} alt="product" />
            </div>
            <div>
                <div>{product.winery}</div>
                <div>{product.rating.average}</div>
            </div>
            <div>
                <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
                <button onClick={() => handleDelete(product)}>Delete</button>
            </div>
        </div>
    )
};