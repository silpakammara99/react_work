import { useEffect, useMemo, useState } from "react";

const Memory = () => {
  const [timer, setTimer] = useState(new Date().toLocaleTimeString());
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Samsung Phone",
      price: 22000,
    },
    { id: 2, name: "Nokia Phone", price: 20000 },
    { id: 3, name: "Realme7I", price: 20000 },
  ]);

  const [search, setSearch] = useState("");

  //this is normal way before useMemo
//   const filterProducts = (products, searchkey) => {
//     console.log(products);
//     return products.filter((product) => {
//       return product.name.toLowerCase().includes(searchkey);
//     });
//   };
  const filterProduct = useMemo(
    () => {
        console.log(products)
        return products.filter((product) => {
          return product.name.toLowerCase().includes(search);
        });
      },[products,search]
  )

  useEffect(() => {
    setInterval(() => {
      setTimer(new Date().toLocaleTimeString());
    }, 1000);

    // return () => clearInterval(Interval);
  }, []);

  const styling = {
    border: "2px solid black",
  };

  return (
    <>
      <h1>{timer}</h1>
      <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}></input>

      
      <table style={styling}>
        <thead style={styling}>
          <tr>
            <td style={styling}>id</td>
            <td style={styling}>name</td>
            <td style={styling}>price</td>
          </tr>
        </thead>
        <tbody style={styling}>
          {filterProduct.map((val) => {
            return (
              <tr key={val.id}>
                <td style={styling}>{val.id}</td>
                <td style={styling}>{val.name}</td>
                <td style={styling}>{val.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default Memory;
