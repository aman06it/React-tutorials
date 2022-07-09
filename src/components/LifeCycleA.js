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

    render() {
        console.log('LifeCycleA render')
        return (
            <div>
                Lifecycle A
                <LifeCycleB/>
            </div>
        )
    }
}
