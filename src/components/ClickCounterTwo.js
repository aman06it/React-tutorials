import React, { Component } from 'react'

export class ClickCounterTwo extends Component {
    constructor(){
        super()
        this.state = {
            count : 0 
        }
    }

    incrementCounter=()=>{
        this.setState((prevState)=>{
         
            return {
                count : prevState.count+1
            }
        })
    }

  render() {
    return (
      <div>
          <button onClick={this.incrementCounter}>Clicked {this.state.count} times</button>
      </div>
    )
  }
}

export default ClickCounterTwo