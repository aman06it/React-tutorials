import React from 'react'

const UpdatedComponent = (OriginalComponent, incrementValue) =>{
    class NewComponent extends React.Component {
        constructor(){
            super()
            this.state={
                count:0
            }
        }
        incrementCounter=()=>{
            this.setState((prevState)=>{
                return {
                    count:prevState.count+incrementValue
                }
            })
        }
        render(){
            return <OriginalComponent name="Aman" count={this.state.count} incrementCounter={this.incrementCounter} {...this.props}/>
        }
    }
    return NewComponent
}

export default UpdatedComponent 