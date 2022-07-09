import React, { Component } from 'react'
import ComponentE from './ComponentE'
import { UserConsumer } from './userContext'

export class ComponentC extends Component {
  render() {
    return (
      <div>
          <UserConsumer>
              {
                  (username)=>{
                    return <div>Hello {username}</div>
                  }
              }
          </UserConsumer>
      </div>
    )
  }
}

export default ComponentC