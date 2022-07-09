import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    increment(){
        // this.setState({    //setState is async method
        //     count:this.state.count+1
        // },()=>{console.log(this.state.count)})
        // console.log(this.state.count)
        this.setState((prevState, props)=>{
          return { count: prevState.count +1 }
        })
        console.log(this.state.count)
    }
    incrementFive(){
       this.increment()
       this.increment()
       this.increment()
       this.increment()
       this.increment()
    }
  render() {
    return (
        <div>
            <div>Count - {this.state.count}</div>
            <button onClick={()=>this.incrementFive()}>Increment 5</button>
        </div>
        )
  }
}
