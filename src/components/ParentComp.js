import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComponent'
import RegularComp from './RegularComp'

export default class ParentComp extends Component {
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
            {/* <RegularComp name={this.state.name}/>
            <PureComp name={this.state.name}/> */}
            <MemoComp name={this.state.name}/>
        </div>
    )
  }
}
