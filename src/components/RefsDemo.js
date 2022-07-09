import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(){
        super()
        this.inputRef = React.createRef()
        //2.approch to create refs
        this.cbRef = null
        this.setCbRef = element =>{
            this.cbRef = element
        }
    }
    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }
    clickHandler = ()=>{
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
           <input type="text" ref={this.setCbRef} />
          {/* <input type="text" ref={this.inputRef} />
          <button onClick={this.clickHandler}>Click</button> */}
      </div>
    )
  }
}

export default RefsDemo