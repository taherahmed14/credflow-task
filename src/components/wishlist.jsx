import { useEffect, useState } from "react";
import "./products.css";
import { WishlistProductCard } from "./wishlistProductCard";

export const Wishlist = () => {

    const [wishlistProducts, setWishlistProducts] = useState([]);

    useEffect(() => {
        setWishlistProducts(JSON.parse(localStorage.getItem("wineWishList")));
    }, []);

    return(
        <div>
            <div className="heading">Your Wishlist</div>
            <div className="container">
                {wishlistProducts.map((e) => (
                    <WishlistProductCard key={e.id} product={e} wishlistProducts={wishlistProducts} setWishlistProducts={setWishlistProducts} />
            ))}
            </div>
        
        </div>
    )
};