import { useEffect } from "react";
import { useState } from "react";
import CustomTable from "./table";
import axios from "axios";

const RecipeSearchData = () => {
  const [data, setdata] = useState([]);

 


  const[query, queryData]=useState("")
  useEffect(() => {
    fetchData();
  },[query]);


  const searchHandler=(event)=>{
    queryData(event.target.value)
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/recipes/search?q=${query}`)
      const recipe = response.data.recipes;
      console.log(recipe)
    setdata(recipe);

    } catch (err) {
      console.log("something wrong while access", err);
    }
  };

  return (
    <>
    <input type="text" value={query} onChange={searchHandler}/>
    {
        <CustomTable recipes={data}/>
    }
    </>
  );
};

export default RecipeSearchData