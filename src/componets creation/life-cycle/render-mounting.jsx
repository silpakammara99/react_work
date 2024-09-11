import { Component } from "react";
import Child from "./child";

class Mounting extends Component {
  constructor() {
    super()
    console.log("constructor executed")
    this.state={
        products:[],
        message:"This is Render methods in ",
        favoriteColor:"green",
        count:100,  
        childVisible:true
    };
  }

  componentDidMount(){
    console.log("componentDidMOunt methods")
    document.title=`react counter ${this.state.count}`

  }

static getDerivedStateFromProps(props, state){
   
    return{favoriteColor:props.color}
}

componentDidUpdate(){
    console.log("componentDidupate method")
      document.title=`react counter ${this.state.count}`
}
shouldComponentUpdate(){
    console.log("shouldComponenetUPdate execution")
    return true
}

getSnapshotBeforeUpdate(){
    console.log("getsnapshotbeforupdate executed")
    // console.log(props, state)
}
countHandler=()=>{
    this.setState({
        count:this.state.count+1
    })
}

hideChild=()=>{
    this.setState({
        childVisible:!this.state.childVisible
    })
}

  render() {
    console.log("Render executed")
    return (
    <>
    
    <h1>{this.state.message} react</h1>
    <h2>{this.state.favoriteColor}</h2>
  
    <h1>{this.state.count}</h1>
    <button onClick={this.countHandler}>click to change the count</button>

    {
         this.state.childVisible&&  <Child/>
    }
     <button onClick={this.hideChild}>click to change the count</button>
    </>
    );

  }
}
 export default Mounting