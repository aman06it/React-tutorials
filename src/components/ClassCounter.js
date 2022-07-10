import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    incrementCounter=()=>{
        this.setState((prevState)=>({
            count:prevState.count+1
        }))
    }
  render() {
    return (
      <div>
          <button onClick={this.incrementCounter}>Count {this.state.count}</button>
      </div>
    )
  }
}

export default ClassCounter