import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url = "https://dummyjson.com/products") => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await axios.get(url);
        if (response.status == 200) {
          setData(response.data);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    dataFetch();
  }, []);

  return [data, error, loading];
};

export default useAxios