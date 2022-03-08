import { useEffect, useState } from "react";

export const Confirmation = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return(
       <div>
           {loading ? <img src="loader.gif" alt="loading" /> : 
           <div className="confirmMessage">
               Your Order has been successfully placed. Happy Shopping.
            </div>}
       </div>
    )
};