import { useEffect, useState } from "react";
import "./products.css";
import { WishlistProductCard } from "./wishlistProductCard";

export const Wishlist = () => {

    const [wishlistProducts, setWishlistProducts] = useState([]);

    useEffect(() => {
        setWishlistProducts(JSON.parse(localStorage.getItem("wineWishList")));
    }, []);

    const handleDelete = (data) => {
        let cart = JSON.parse(localStorage.getItem("wineWishList"));
        let newCart = cart.filter(e => e.id !== data.id);
        localStorage.setItem("wineWishList", JSON.stringify(newCart));
        setWishlistProducts(JSON.parse(localStorage.getItem("wineWishList")));
    }

    return(
        <div>
            {wishlistProducts === null ? <div className="heading">Your Wishlist</div> :
            <div>
                <div className="heading">Your Wishlist</div>
                <div className="container">
                    {wishlistProducts.map((e) => (
                        <WishlistProductCard key={e.id} product={e} handleDelete={handleDelete} />
                ))}
                </div>
            </div>
            }
        </div>
    )
};