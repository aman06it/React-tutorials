import React, { Component } from 'react'
import Input from './Input'

export class FoucsInput extends Component {
    constructor(){
        super()
        this.componentRef = React.createRef()
    }
    cliakHandler = () =>{
        this.componentRef.current.focusInput()
    }
  render() {
    return (
      <div>
          <Input ref={this.componentRef} />
          <button onClick={this.cliakHandler} >Focus Input</button>
      </div>
    )
  }
}

export default FoucsInput