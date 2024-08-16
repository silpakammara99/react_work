import Lists from "./Props/list";
import Mainheading from "./Props/headings";
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
          <Mainheading heading={eachRecipe.name}   />
          <Image source={eachRecipe.image} width={200}  height={200}/>
          <Mainheading heading={"ingredients required"}  />
          <Lists list={eachRecipe.ingredients}/>
          <Mainheading heading={"instructions required"}  />
          <Lists list={eachRecipe.instructions}  />
          <Buttons  text={"Start preparation"}   />
        </div>

        
      )
    })

  }

    </>
  )}

export default Dishes;
