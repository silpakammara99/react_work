import { Component } from "react";
import ChildComponent1 from "./child";



class ParentComponet extends Component{
constructor(){
super()
this.state={
    isIndian:false,
}
}

nationChange=()=>{
    this.setState({
     isIndian:!this.state.isIndian
    })
}


    render(){
        console.log("parent rendering")
        return(
            <>
            <h1>hello normal component </h1>
          <h3>{this.state.isIndian? "yes": "no"} </h3>  
          <button onClick={this.nationChange}>click to change</button>
          <ChildComponent1/>
            </>
        )
    }
}
export default ParentComponet