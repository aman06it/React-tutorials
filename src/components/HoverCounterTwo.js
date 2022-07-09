import React, { Component } from 'react'

export class HoverCounterTwo extends Component {
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
          <h2 onMouseOver={this.incrementCounter}>Clicked {this.state.count} times</h2>
      </div>
    )
  }
}

export default HoverCounterTwo