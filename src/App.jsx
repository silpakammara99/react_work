// import {Greet,Greet1, Greet2} from "./componets creation/greetings/greet"
// import style from "./componets creation/greetings/greet.module.css"
// import CustomeCards from "./componets creation/boostrap/bootstrap"
// import { CardsData } from "./data/cardsdata"
import Mounting from "./componets creation/life-cycle/render-mounting";
import ParentComponet from "./componets creation/pure component/parent";
import Counter from "./componets creation/usestate-practice/useState_hook";
import CustomTodo from './componets creation/usestate-practice/todolist';
import DataChange from "./componets creation/usestate-practice/input_change";
import MyCheckbox from "./componets creation/usestate-practice/checked";

const App = () => {
  return(
<> 
{/* <Mounting color="red"/> */}
{/* <ParentComponet/> */}
{/* <Counter/> */}
{/* <CustomTodo/> */}
{/* <DataChange/> */}
<MyCheckbox/>
</>
  )
};

export default App;
