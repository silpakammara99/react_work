
import axios from 'axios';
import { useEffect } from 'react';

const Promiseexam=()=>{

useEffect(()=>{
    const dataFetch=async()=>{
        const [response1,response2]=await Promise.all([axios.get('https://dummyjson.com/recipes'), axios.get('https://dummyjson.com/products')])

        const response=await Promise.race([axios.get('https://dummyjson.com/recipes'), axios.get('https://dummyjson.com/products')])
        console.log(response)
        console.log(response1,response2)
    }

    dataFetch()

},[])

}
export default Promiseexam