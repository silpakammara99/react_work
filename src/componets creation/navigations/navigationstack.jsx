import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/homescreen";
import AboutScreen from "../screens/aboutscreen";
import { NavigationBar } from "../navbar/Navigationbar";
import { InvalidScreen } from "../screens/invalidscreen";
import { CategoryScreen } from "../screens/categoryscreen";
import JewelleryScreen from "../screens/jewelleryscreen";
import ElectronicScreen from "../screens/electronicscreen";
import ProductScreen from "../screens/productscreen";
import ProductDetails from "../screens/product-detail-screen";

export const NavigationStack = () => {
  return (
    <>
      <NavigationBar />
      {true ? (
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="about" element={<AboutScreen />} />
          <Route path="*" element={<InvalidScreen />}></Route>
          <Route path="category" element={<CategoryScreen />}>
            <Route index element={<ElectronicScreen />} />

            <Route path="jewellery" element={<JewelleryScreen />}></Route>
            <Route path="electronics" element={<ElectronicScreen />}></Route>
          </Route>

          <Route path="products" element={<ProductScreen/>}/>
        <Route path="products/:productId" element={<ProductDetails/>}/>
        
        </Routes>
      ) : (
        <Routes>
          <Route path="/login" element={login} />
        </Routes>
      )}
    </>
  );
};
