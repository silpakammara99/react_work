import { useState,useEffect } from 'react'
import axios from 'axios'

import React from 'react'

const JewelleryScreen = () => {
const[data,setData]=useState([])
  
  useEffect(()=>{
    fetchData()
  },[])
  
  const fetchData=async()=>{
    try{
    const response=await axios.get('https://fakestoreapi.com/products/category/jewelery')
  
  if(response.status==200){
    setData(response.data)
  }
  }
  catch(err){
    console.log(err)
  }
  
}
  
    return (
      <div>
       <h4>Welcome to jewellery screen</h4>
       {
        data.map((each)=>{
        return(
        <>
        {/* <pre key={each.id}>{JSON.stringify(each)}</pre> */}
        <div style={{width:'100vw',border:'1px solid black'}}>
          <section>
          <h5>{each.title}</h5>
          <h3>{each.price}</h3>
          <p>{each.description}</p>
          <img src={each.image} style={{height:'100px', width:'100px'}}></img>
          </section>
        </div>
        </>
        )}
        )
       }
      </div>
    )
  }
  
 
  
  

export default JewelleryScreen