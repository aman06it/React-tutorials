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
    shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate')
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
