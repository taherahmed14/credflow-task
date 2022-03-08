import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartProductCard } from "./cartProductCard";
import "./products.css";

export const Cart = () => {

    const[cartProducts, setCartProducts] = useState([]);

    console.log(cartProducts);

    useEffect(() => {
        let arr = JSON.parse(localStorage.getItem("wineCart"));
        setCartProducts([arr]);
    }, []);

    const handleDelete = (data) => {
        let cart = JSON.parse(localStorage.getItem("wineCart"));
        let newCart = cart.filter(e => e.id !== data.id);
        localStorage.setItem("wineCart", JSON.stringify(newCart));
        setCartProducts(JSON.parse(localStorage.getItem("wineCart")));
    }

    return(
        <div>
            {cartProducts === null ? <div className="heading">Your Cart</div> :
                <div>
                    <div className="heading">Your Cart</div>
                    <div className="container">
                        {cartProducts.map((e) => (
                            <CartProductCard key={e.id} product={e} handleDelete={handleDelete} />
                        ))}
                    </div>
                    <div className="btnDiv">
                        <Link to={"/checkout"} className="checkOutBtn">Checkout</Link>
                    </div>
                </div>
            }
        </div>
    )
};