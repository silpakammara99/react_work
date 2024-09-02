import { Component } from "react"
import CustomDNALoader from "../loader/loader"
import Lists from "../../Props/list"
import axios from "axios"


class RecipeList extends Component{
state={
    food:[],
    loading:true,
    error:false
}


componentDidMount(){
     console.log("I am componentDidMount Method")
     this.fetchData()
}

fetchData=async()=>{
    const finalData=await axios.get('https://dummyjson.com/recipes')
    const {status, data}=finalData

    if(status==200){
        this.setState({
           food:data.recipes,
           loading:false
        })
    }

    console.log(finalData)
}

// fetchData= async()=>{
//     try{
//     const data=await fetch('https://dummyjson.com/recipes');
//     const {recipes}=await data.json()
 
//     {
//         this.setState({
//             food:recipes,
//             loading:false
//         })
//     }
//     }catch{
//         alert("there is wrong in API Call")
//     }
// }

    render(){
        return(
        <>
        <h1>List of Products</h1>
        {
            this.state.loading? <CustomDNALoader/>:<>
            <h1>Recipes......</h1>
            {
                this.state.food.map((eachDish)=>{
                    return(
                      <div key={eachDish.id}>
                        <h2>{eachDish.name}</h2>
                      <img src={eachDish.image} style={{height:"200px", width:"200px"}}/>
                      <Lists list={eachDish.ingredients}/>
                      </div>
                    )
                })
            }
            </>
        }
    </>
        )
    }
}

export default RecipeList