import React from 'react'

const UpdatedComponent = OriginalComponent =>{
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
                    count:prevState.count+1
                }
            })
        }
        render(){
            return <OriginalComponent name="Aman" count={this.state.count} incrementCounter={this.incrementCounter}/>
        }
    }
    return NewComponent
}

export default UpdatedComponent 