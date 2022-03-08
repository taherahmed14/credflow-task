import { useEffect, useState } from "react";
import { AllProducts } from "./allProducts";

export const Products = () => {

    const [allProducts, setAllProducts] = useState([]);
    const [wineProducts, setWineProducts] = useState([]);
    const [prev, setPrev] = useState(0);
    const [next, setNext] = useState(20);

    useEffect(() => {
        getProducts();
    }, [allProducts]);

    useEffect(() => {
        setWineProducts(allProducts.slice(prev, next));
    }, [allProducts, prev, next]);

    const getProducts = async () => {
        const baseURL = 'https://api.sampleapis.com/wines/reds';
        fetch(baseURL)
        .then(resp => resp.json())
        .then(data => setAllProducts(data.slice(0, 100)));
    };

    const handlePrev = () => {
        if(prev > 0)
            setWineProducts(allProducts.slice(setPrev((p) => p - 20), setNext((p) => p - 20)));
    };

    const handleNext = () => {
        setWineProducts(allProducts.slice(setPrev((p) => p + 20), setNext((p) => p + 20)));
    };

    return(
        <div>
            <AllProducts products={wineProducts} />
            <div>
                <button onClick={handlePrev} className="pageBtn">Prev</button>
                <button onClick={handleNext} className="pageBtn">Next</button>
            </div>
        </div>
    )
};