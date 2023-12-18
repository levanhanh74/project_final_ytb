import { useEffect } from "react";
import axios from "axios";

function ProductPage() {
    console.log(`${process.env.REACT_APP_BASE_PRODUCT}`);
    useEffect(() => {
        const fetchApiProduct = async () => {
            const fectchAPI = await axios.get(`${process.env.REACT_APP_BASE_PRODUCT}product/getallproduct`);
            console.log("ProductPage: ", await fectchAPI.data.data);
        }
        fetchApiProduct();
    }, [])
    return (<>
        <h1>ProductPage</h1>
    </>);
}


export default ProductPage;