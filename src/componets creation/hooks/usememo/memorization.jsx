import { useMemo, useState } from "react";

const UseMemo = () => {
  const [milkQuantity, setMilkQty] = useState(1);
  const [riceQuantity, setRiceQty] = useState(1);

  const milkPriceCalculation = useMemo(() => {
    console.log("milk price calculation");
    const priceOfMilk = 50;
    return milkQuantity * priceOfMilk;
  }, [milkQuantity]);

  const ricePriceCalculation = useMemo(() => {
    console.log("rice price calculation");
    const priceOfRice = 100;
    return riceQuantity * priceOfRice;
  }, [riceQuantity]);

  const milkHandler = () => {
    setMilkQty(milkQuantity + 1);
  };
  const riceHandler = () => {
    setRiceQty(riceQuantity + 1);
  };

  return (
    <>
      <h4>
        Milk quantity{milkQuantity}-price{milkPriceCalculation}
      </h4>
      <h4>
        Rice quantity{riceQuantity}-price{ricePriceCalculation}
      </h4>

      <button onClick={milkHandler}>change milk quantity</button>
      <button onClick={riceHandler}>change Rice quantity</button>
    </>
  );
};
export default UseMemo;
