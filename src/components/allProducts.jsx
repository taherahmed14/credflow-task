import { ProductCard } from "./productCard";
import "./products.css";

export const AllProducts = ({ products }) => {

    return(
        <div>
            <div className="heading">All Wines</div>
            <div className="container">
                {products.map((e) => (
                    <ProductCard key={e.id} product={e} />
                ))}
            </div>
        </div>
        
    )
};