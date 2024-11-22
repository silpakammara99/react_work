



import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RecipeSearchData from './../API-search/searchdata-table';
import axios from 'axios';

const ProductDetails = () => {


    const dynamicpath=useParams()
    console.log(dynamicpath,"dynamicpath")

    const[productData,setProductData]=useState({})

    useEffect(()=>{

        fetchData()
    },[dynamicpath])

    const fetchData=async()=>{
        const response=await axios.get(`https://fakestoreapi.com/products/${dynamicpath.productId}`)
   if(response.status==200){
    setProductData(response.data)
   }
   
   
    }


  return (
    <div>
      <h3>product data</h3>
      {
         Object.keys(productData).length>0&& <>
         <h2>{productData.title}</h2>
         <img src={productData.image} height={'100px'} width={'100px'}/>
         <h4>{productData.description}</h4>
         </>
      }
    </div>
  )
}

export default ProductDetails
