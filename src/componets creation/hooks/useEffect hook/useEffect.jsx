import axios from "axios";
import { useEffect, useState } from "react";

export const UseEffectExample = () => {
  const [data, setData] = useState([]);
  const [type, setType] = useState("products");
  const [age, setAge] = useState(0);

  useEffect(() => {
    console.log("useeffect rendering..");
    document.title = `current age${age}`;
    fetchData();
  }, [type, age]);

  const fetchData = async () => {
    try {
      
      const { data, status } = await axios.get(
        `https://fakestoreapi.com/${type}`
      );
      if (status == 200) {
        console.log(data);
        setData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const changeHandler = (each) => {
    setType(each);
  };

  const ageHandler = () => {
    setAge(age + 1);
  };
  return (
    <>
      <h3>use effect examples</h3>
      <h1>{type}</h1>
      <button onClick={ageHandler}>agechange</button>

      {["products", "carts", "users"].map((each) => {
        return <button key={each} onClick={() => changeHandler(each)}>{each}</button>;
      })}
      {data.map((each) => {
        return <div key={each.id}>{JSON.stringify(each)}</div>;
      })}
    </>
  );
};
