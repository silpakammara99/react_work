import { Component } from "react";
//import { errorToasts, successToasts } from "../toasts/toast-helpers";

class Counter extends Component{

    state={
        count:0
    }
    
    Incrementing=()=>{
     this.setState({
        count:this.state.count+1,
     })
    }

    Decrementing=()=>{
        this.setState({
            count:this.state.count-1
        })
    }

    Reseting=()=>{
        this.setState({
            count:0
        })
    }


    render(){
        return(
            <>
            <h1>Counter: {this.state.count}</h1>
            <button onClick={this.Incrementing}>Increment:</button>
            <button onClick={this.Decrementing}>Decrement</button>
            <button onClick={this.Reseting}>Reset</button>            
            </>
        )
    }


}
export default Counter