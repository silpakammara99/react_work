import React, { Component } from 'react'

export default class Child extends Component {
constructor(){
    super()
    this.state={
        message:"this is child class"
    }
}


  render() {
    return (
      <div>
 <h2>{this.state.message}</h2>
      </div>
    )
  }
}
