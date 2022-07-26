import React, { Component } from 'react'

export class CounterEven extends Component {
    constructor() {
        super();
        this.state = {
          name: "aman",
          count: 0
        };
      }
      componentDidMount() {
       this.start()
      };
      start(){
        this.intervalID = setInterval(() => {
            this.setState((prevState, props) => {
              return { count: prevState.count + 1 };
            });
          }, 1000);
      }
      clear(){
        clearInterval(this.intervalID);
      };
      render() {
        return (
          <div className="App">
            counter {this.state.count}
            <button style={{ display: "block" }} onClick={() => this.clear()}>
              stop counter
            </button>
            <button style={{ display: "block" }} onClick={() => this.start()}>
              start counter
            </button>
          </div>
        );
      }
}

export default CounterEven