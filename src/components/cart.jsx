import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartProductCard } from "./cartProductCard";
import "./products.css";

export const Cart = () => {

    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        setCartProducts(JSON.parse(localStorage.getItem("wineCart")));
    }, []);

    return(
        <div>
            <div className="heading">Your Cart</div>
            <div className="container">
                {cartProducts.map((e) => (
                    <CartProductCard key={e.id} product={e} cartProducts={cartProducts} setCartProducts={setCartProducts} />
            ))}
            </div>
            
            <div className="btnDiv">
                <Link to={"/checkout"} className="checkOutBtn">Checkout</Link>
            </div>
        </div>
    )
};