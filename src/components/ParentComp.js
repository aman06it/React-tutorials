import React, { Component, PureComponent } from 'react'
import PureComp from './PureComponent'
import RegularComp from './RegularComp'

export default class ParentComp extends PureComponent {
    constructor(){
        super()
        this.state={
            name:'Aman'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Aman'
            })
        }, 2000)
    }
  render() {
      console.log('******************** Parent Component')
    return (
        <div>
            Parent Component
            <RegularComp name={this.state.name}/>
            <PureComp name={this.state.name}/>
        </div>
    )
  }
}
