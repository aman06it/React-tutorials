import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler(){
        console.log('button click')
    }
  render() {
    return (
      <div>
          <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}

export default ClassClick