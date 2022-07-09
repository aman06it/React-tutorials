import React, { Component } from 'react'
import { User } from './userContext'

export class ComponentF extends Component {
  render() {
    return (
      <UserProvider/>
    )
  }
}

export default ComponentF