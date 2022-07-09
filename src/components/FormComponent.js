import React, { Component } from 'react'

export class FormComponent extends Component {
    constructor(){
        super()
        this.state={
             userName:'',
             comment:'',
             topic:'react'
        }
    }
    handleUserNameChange=(event)=>{
        this.setState({
            userName:event.target.value
        })
    }
    handleUserCommentChange=(event)=>{
        this.setState({
            comment:event.target.value
        })
    }
    handledTopic=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit=(event)=>{
        alert(`${this.state.userName}, ${this.state.comment}, ${this.state.topic}`)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>UserName</label>
                    <input
                        type="text" 
                        value={this.state.userName}
                        onChange={this.handleUserNameChange}
                    />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea
                        onChange={this.handleUserCommentChange}
                        value={this.state.comment}
                    />
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.topic} onChange={this.handledTopic}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>Vue</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default FormComponent