export const WishlistProductCard = ({ product, handleDelete }) => {

    return(
        <div className="productCard">
            <div>
                <img src={product.image} alt="wishlistproduct" />
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