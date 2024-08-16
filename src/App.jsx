import Lists from "./Props/list";
import Mainheading,{SubHeading} from "./Props/headings";
import Buttons from "./Props/buttons";
import Image from "./Props/image";
import { recipeData } from "./data/recipeData.js";


const Dishes = () => {
  return(
    < >
  {
    recipeData.map(eachRecipe=>{
      return(
        <div key={eachRecipe.id} >
          <Mainheading Mainhead={eachRecipe.name}   />
          <Image source={eachRecipe.image} width={200}  height={200}/>
          <SubHeading subhead={"ingredients required"}></SubHeading>
          <Lists list={eachRecipe.ingredients}/>
          <SubHeading subhead={"Instructions for cooking"}></SubHeading>
          <Lists list={eachRecipe.instructions}  />
          <Buttons  text={"Start preparation"}  />
        </div>

        
      )
    })

  }

    </>
  )}

export default Dishes;
