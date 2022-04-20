import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import CardCustom from "../../components/CardProduct";
import TopBar from "../../components/TopBar";



const Home = () => {
    const [products, setProducts] = useState([]);
    const getProducts = useCallback(async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/products");
            setProducts(response.data);
            console.log(response.data, "ini data");
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        getProducts();
    }
        , [getProducts]);
    
    
    return (
      <div>
        <TopBar />
        <div className="container">
                <div className="row">
                    {products.map((product) => (
                        <CardCustom
                            key={product._id}
                            id={product._id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                           
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;