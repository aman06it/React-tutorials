import React, { Component } from 'react'

export default class LifeCycleB extends Component {
    constructor(){
        super()

        this.state={
            name:'Aman'
        }
        console.log('LifeCycleB constructure')
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleB componentDidMount')
    }

    render() {
        console.log('LifeCycleB render')
        return (
            <div>
                Lifecycle B
            </div>
        )
    }
}
