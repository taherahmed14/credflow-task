import { Link } from "react-router-dom";
import "./header.css";

export const Navbar = () => {
    return(
        <div className="navbar">
            <Link to={"/"} className="logo">Wines</Link>
            <div>
                <Link to={"/cart"} className="links">Your Cart</Link>
                <Link to={"/wishlist"} className="links">Wishlist</Link>
            </div>
        </div>
    )
};