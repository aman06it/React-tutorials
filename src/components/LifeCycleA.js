import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export default class LifeCycleA extends Component {
    constructor(){
        super()

        this.state={
            name:'Aman'
        }
        console.log('LifeCycleA constructure')
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')
    }
    changeSate=()=>{
        this.setState({
            name:'Amit'
        })
    }
    render() {
        console.log('LifeCycleA render')
        return (
            <div>
                <div>Lifecycle A</div>
                <button onClick={this.changeSate}>Change State</button>
                <LifeCycleB/>
            </div>
        )
    }
}
