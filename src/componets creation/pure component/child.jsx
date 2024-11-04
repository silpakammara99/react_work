

 import React, { Component, PureComponent } from 'react'

// export default class ChildComponent extends PureComponent {
// state={
//     condition:false
// }

// childChange=()=>{
//     this.setState({
//         condition:!this.state.condition
//     })
// }
//   render() {
//     console.log("child rendering")
//     return (
//       <div>
//         ChildComponent
// <h1>{this.state.condition? "condittion changed":"condition not changed"}</h1>

//         <button onClick={this.childChange}>change condition</button>
//       </div>
//     )
//   }
// }


 const ChildComponent1=()=>{
console.log("child rendering")
    return(
        <>
            <h1>this is functional component</h1> 
        </>
    )
}
export default React.memo(ChildComponent1)