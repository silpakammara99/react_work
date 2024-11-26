import { useCallback, useState } from "react";
import Mainheading from "../../../Props/headings";
import CustomButton from "../../button/button";

const UseCallbackEx = () => {
  const [toggle, setToggle] = useState(false);
  
  const[age,setAge]=useState(10)

  const toggleHandler = useCallback(() => {
    
    setToggle(!toggle);
  },[toggle]);

const ageHandler=useCallback(()=>{
    setAge(age+1)
},[age])

  return (
    <>
    {toggle?'welcome user':'please login'}
      <Mainheading  />
      <h1>current age{age}</h1>
      {/* <button onClick={toggleHandler}>clicktoggle</button> */}
    <CustomButton text={'Toggle'} onPress={toggleHandler}/>
    <CustomButton text={'Age'} onPress={ageHandler}/>
    
    </>
  );
};

export default UseCallbackEx;
