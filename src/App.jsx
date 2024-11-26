// import {Greet,Greet1, Greet2} from "./componets creation/greetings/greet"
// import style from "./componets creation/greetings/greet.module.css"
// import CustomeCards from "./componets creation/boostrap/bootstrap"
// import { CardsData } from "./data/cardsdata"
// import Mounting from "./componets creation/life-cycle/render-mounting";
// import ParentComponet from "./componets creation/pure component/parent";
// import Counter from "./componets creation/usestate-practice/useState_hook";
// import CustomTodo from './componets creation/usestate-practice/todolist';
// import DataChange from "./componets creation/usestate-practice/input_change";
// import MyCheckbox from "./componets creation/usestate-practice/checked";
// import { UseRefExample } from "./componets creation/hooks/useref-hook/useref-prac";
// import { UncontrolledComponent } from "./componets creation/hooks/uncontrolled components/uncontrolled-form";
// import { DataShowTable } from "./componets creation/datashow_table";
// import { ControlledForm } from "./componets creation/hooks/controlled component/controlled_validations";
// import { ReuseStateForm } from "./componets creation/hooks/controlled component/reuse_useState_validation";
// import { UseEffectExample } from "./componets creation/hooks/useEffect hook/useEffect";
import React from 'react';
import { WithProfile } from './componets creation/hoc/withprofile';
import { UseEffectExample3 } from './componets creation/hooks/useEffect hook/useEffect_3';
import { UseEffectExample2 } from './componets creation/hooks/useEffect hook/useEffect_eventlist';
import UseMemo from './componets creation/hooks/usememo/memorization';
import CounterReducer from './componets creation/hooks/usereducer/basicexample';
import TabComponent from './componets creation/timer task/timer';
import Memory from './memory-tasks/memo';
import UseMemoExam from './componets creation/hooks/usememo/usememoexam';
import UseCallbackEx from './componets creation/hooks/usecallbacks/usecallback_ex';
import Promiseexam from './componets creation/promises-all-races/sample_file';

const App = () => {
  return(
<> 

<Promiseexam/>
{/* <UseCallbackEx/> */}

{/* <Memory/> */}

{/* <UseMemoExam/> */}
{/* <UseMemo/> */}


{/* <WithProfile/> */}
{/* <CounterReducer/> */}
{/* <TabComponent/> */}
{/* <Stopwatch/> */}
{/* <UseEffectExample/> */}
{/* <UseEffectExample2/> */}
{/* <UseEffectExample3/> */}
{/* <ReuseStateForm/> */}
{/* <ControlledForm/> */}
{/* <DataShowTable/> */}
{/* <UncontrolledComponent/> */}
{/* <UseRefExample/> */}


{/* <Mounting color="red"/> */}
{/* <ParentComponet/> */}
{/* <Counter/> */}
{/* <CustomTodo/> */}
{/* <DataChange/> */}
{/* <MyCheckbox/> */}
</>
  )
};

export default App;
