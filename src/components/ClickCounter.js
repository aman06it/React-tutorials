import React, { Component } from 'react'
import UpdatedComponent from './whithCounter'
export class ClickCounter extends Component {
  render() {
    return (
      <div>
          <button onClick={this.props.incrementCounter}>{this.props.name} Click {this.props.count} times</button>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCounter, 10)