import React, { Component } from 'react'

export default class UserGreeting extends Component {
    constructor(){
        super()
        this.state = {
            isLoggedIn: false
        }
    }
  render() {
    //1. if/else
    //   if(this.state.isLoggedIn){
    //       return <div>Welcome Aman</div>
    //   }else{
    //     return <div>Welcome Guest</div>
    //   }

    let message
    if(this.state.isLoggedIn){
        message=<div>Welcome Aman</div>
    }else{
        message=<div>Welcome Guest</div>
    }
    return message
  }
}

// 1. if/else
// 2. Element variables
// 3. Ternary condation operator
// 4. Short circuit operator