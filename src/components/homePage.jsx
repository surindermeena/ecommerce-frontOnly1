import { useEffect, useState } from "react";
import Navbar from "./navbar";
import ProductList from "./productList";


const HomePage = () => {

  const [productsData, setProductsData] = useState([])

  async function getProductData() {
    const res = await fetch("https://fakestoreapi.com/products")
    const result = await res.json();
    setProductsData(result);
    console.log(result);
  }
  
  useEffect(()=>{
    getProductData();
  },[]);


  return (
    <>

      <ProductList productsData={productsData}/>


    </>
  );
};

export default HomePage;
