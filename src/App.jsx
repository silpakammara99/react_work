// import {Greet,Greet1, Greet2} from "./componets creation/greetings/greet"
// import style from "./componets creation/greetings/greet.module.css"
// import CustomeCards from "./componets creation/boostrap/bootstrap"
// import { CardsData } from "./data/cardsdata"
import CustomImage from "./componets creation/image/image";
import Buttons from "./Props/buttons";
import Mainheading, { SubHeading } from "./Props/headings";
import Lists,{Unorder} from "./Props/list";
// import Mounting from "./componets creation/life-cycle/render-mounting";
import { recipeData } from './data/recipeData';

const App = () => {
  const imageListing = [
    {
      name: "bag1",
      src: "http://clipart-library.com/new_gallery/28-282907_banana-svg-logo-png-banana-clip-art.png",
      width: "100",
      height: "100",
    },
    {
      name: "bag2",
      src: "https://tse1.mm.bing.net/th?id=OIP.Jxgb9GwfTqedcxJ6yft6YQHaHu&pid=Api&P=0&h=180",
      width: "120",
      height: "120",
    },
    {
      name: "bag3",
      src: "https://tse3.mm.bing.net/th?id=OIP.PxdQ6sBiwAynr5r1rC6TzgHaHO&pid=Api&P=0&h=180",
      width: "150",
      height: "150",
    },
    {
      name: "bag3",
      src: "https://tse3.mm.bing.net/th?id=OIP.PxdQ6sBiwAynr5r1rC6TzgHaHO&pid=Api&P=0&h=180",
      width: "200",
      height: "200",
    },
  ];

  return (
    <>
      {imageListing.map((each) => {
        return (
          <>
            <CustomImage
              source={each.src}
              alternaterText={each.name}
              width={each.width}
              height={each.height}
            />
          </>
        );
      })}
      {/* <Mounting color="red"/>  */}
      {/* <CustomImage source="http://clipart-library.com/new_gallery/28-282907_banana-svg-logo-png-banana-clip-art.png" alternateText="Banana" width="80" height="80"/>
    <CustomImage source="http://clipart-library.com/new_gallery/28-282907_banana-svg-logo-png-banana-clip-art.png" alternateText="Banana" width="150" height="150"/>
     */}

<Buttons text="login" bgColor="green" onPress={()=>{}}/>
<Buttons text="Signup" bgColor="blue" onPress={()=>{}} />
<Buttons text="Reset" bgColor="red" onPress={()=>{}} />
<Buttons/>

<Mainheading Mainhead="list of items"/>
<Lists list={["animals", "places", "things", "food", "humans"]}/>
<Mainheading Mainhead="list of fruits"/>
<Lists list={["apple", "banana","grapes", "strawberry"]}/>

{
  recipeData.map((every)=>{
    return(
      <>
      
 <Mainheading Mainhead={every.name}/>
 <CustomImage source={every.image} width="200" height="200"/>
 <SubHeading subhead="ingredients required"/>
<Unorder data={every.ingredients}/>
<SubHeading subhead="instructions to prepare"/>
<Unorder data={every.instructions}/>
<Buttons text={"click to video"} onPress={()=>{}} bgColor="green"/>
</>

    )

  })
}



    </>
  );
};

export default App;
