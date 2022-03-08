import { useState, useEffect } from "react";
import "./searchBox.css";

function useDebounce(value, delay) {
    console.log("Debouncing");
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);
        //clean up function
        return () => {
            clearTimeout(handler);
        }  
    }, [value, delay]);
    return debounceValue;
}

export const SearchBox = () => {
    const [searchInput, setSearchInput] = useState("");
    const [results, setResults] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

    const debounce = useDebounce(searchInput, 1000);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        const baseURL = 'https://api.sampleapis.com/wines/reds';
        fetch(baseURL)
        .then(resp => resp.json())
        .then(data => setAllProducts(data.slice(0, 100)));
    };

    useEffect(() => {
        console.log(debounce);
        if(debounce) {
            setResults(
                allProducts.filter(product => product.winery.toLowerCase().includes(searchInput.toLowerCase()))
            );
        }
        else {
            setResults([]);
        }
    }, [debounce, allProducts, searchInput]);

    return (
        <div className="searchContainer">
            <input className="searchInput" placeholder="Search" onChange={e => setSearchInput(e.target.value)} />

            <div className="results">
                {results?.map(product => 
                    <div>{product.winery}</div>)
                }
            </div>
        </div>
    )
};