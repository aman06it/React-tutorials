import React, { Component } from 'react'
import UpdatedComponent from './whithCounter'

export class HoverCounter extends Component {
  render() {
    return (
      <div>
          <h2 onMouseOver={this.props.incrementCounter}>{this.props.name} Hovered {this.props.count} times</h2>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCounter, 5)