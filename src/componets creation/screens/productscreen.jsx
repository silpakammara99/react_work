import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserDetails } from "../navigations/navigationstack";


const ProductScreen = () => {
const globalData=useContext(UserDetails)
console.log(globalData)

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    if (response.status == 200) {
      setProducts(response.data);
    }
  };

  return (
    <div>
      <h1>welcome {globalData.name}</h1>
      <h2>list of products</h2>
      {products.length > 0 && (
        <>
          {products.map((each) => (
            <>
              <h4>{each.title}</h4>
              <button>
                <Link to={`${each.id}`}>view product</Link>
              </button>
            </>
          ))}
        </>
      )}
    </div>
  );
};

export default ProductScreen;
