import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomeScreen from "../screens/homescreen"
import AboutScreen from "../screens/aboutscreen"
import { NavigationBar } from "../navbar/Navigationbar"
import { InvalidScreen } from "../screens/invalidscreen"




export const NavigationStack=()=>{

    return(
        <>      
         <NavigationBar/>
       {
        true?
<Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/about" element={<AboutScreen/>}/>
       <Route path="/*" element={<InvalidScreen/>}></Route>
       
       </Routes>
       
       :

       <Routes>
        < Route path="/login" element={login}/>
       </Routes>
       }

       
     
</>

       
    )
}