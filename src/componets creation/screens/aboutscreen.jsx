// import { NavigationBar } from "../navbar/Navigationbar"

import { useContext } from "react";
import { GlobalCounter, UserDetails } from "../navigations/navigationstack";
import UseReducerEx from "../hooks/usereducer/usereducerex";
import { WithProfile } from './../hoc/withprofile';

const AboutScreen = (props) => {
  const themechanger = useContext(UserDetails);

const{currentState, dipatch}=useContext(GlobalCounter)

console.log(currentState)
console.log(props)

  const changeHandler = () => {
    themechanger.handler();
  };

  const changeSalary = () => {
    themechanger.salaryHandler();
  };

  return (
    <>
      <h1>Welcome to aboutscreen{currentState.count}</h1>
    <h1>higher order function {props.profile.firstName} </h1>
    
      <UseReducerEx />
      <p>Current Theme: {themechanger.darkTheme ? "Dark" : "Light"}</p>
      <button onClick={changeHandler}>
      
        Switch to {themechanger.darkTheme ? "Light" : "Dark"} Theme
      </button>
      <button onClick={changeSalary}>setSalary</button>
    </>
  );
};
export default WithProfile(AboutScreen);
