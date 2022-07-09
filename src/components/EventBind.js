import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(){
        super()
        this.state={
            message:'Hello'
        }
        {/* 3. bind in constructur */}
        // this.clickHandler = this.clickHandler.bind(this)
    }
    //4. change the way to define handler's
    // clickHandler(){
    //     this.setState({
    //         message:'Good bay'
    //     })
    //     console.log(this)
    // }
    clickHandler = () =>{
        this.setState({
            message:'Good bay'
        })
        console.log(this)
    }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* 1. bind in render method */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button>  */}
        {/* 2. use arror method in render method */}    
        {/* <button onClick={()=>this.clickHandler()}>Click</button>  */}

        {/* 3,4*/}    
        <button onClick={this.clickHandler}>Click</button> 

      </div>
    )
  }
}

export default EventBind