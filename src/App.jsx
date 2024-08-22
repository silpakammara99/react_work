// eslint-disable-next-line no-unused-vars
import {Greet,Greet1, Greet2} from "./componets creation/greetings/greet"
// eslint-disable-next-line no-unused-vars
import style from "./componets creation/greetings/greet.module.css"
import CustomeCards from "./componets creation/boostrap/bootstrap"
import { CardsData } from "./data/cardsdata"



const App =()=>{
  return(
    <>
    {
      CardsData.map(each=>{
        return(
          <>
        <CustomeCards title={each.title} text={each.text} source={each.img}/>
        </>
        )
      })
    }
 
      {/* <Greet/><br></br>
      <Greet1/><br></br>
      <Greet2/>
      <div className={style.wish}>
        <h3>this is heading tag</h3>
      </div> */}
      </>
  )
}

export default App
